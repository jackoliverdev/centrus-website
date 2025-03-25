import axios, { AxiosInstance, AxiosError } from "axios";

// Types for Brevo API requests and responses
interface ContactAttributes {
  FIRSTNAME?: string;
  LASTNAME?: string;
  COMPANY?: string;
  PHONE?: string;
  [key: string]: string | undefined;
}

interface CreateContactData {
  email: string;
  attributes?: ContactAttributes;
  listIds?: number[];
  emailBlacklisted?: boolean;
  smsBlacklisted?: boolean;
  updateEnabled?: boolean;
}

interface UpdateContactData {
  attributes?: ContactAttributes;
  emailBlacklisted?: boolean;
  smsBlacklisted?: boolean;
  listIds?: number[];
  unlinkListIds?: number[];
}

interface EmailData {
  to: { email: string; name?: string }[];
  templateId: number;
  params?: Record<string, any>;
  subject?: string;
  tags?: string[];
}

interface BrevoResponse {
  id: number;
  email: string;
  [key: string]: any;
}

class BrevoError extends Error {
  constructor(
    message: string,
    public code: string | number,
    public response?: any
  ) {
    super(message);
    this.name = 'BrevoError';
  }
}

class Brevo {
  private api: AxiosInstance;
  private readonly defaultListId = 2; // Set default list ID to 2

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.brevo.com/v3/",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    // Add response interceptor for error handling
    this.api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const response = error.response;
        const message = response?.data && typeof response.data === 'object' && 'message' in response.data 
          ? String(response.data.message) 
          : error.message;
        const code = response?.status || 'UNKNOWN';
        
        throw new BrevoError(message, code, response?.data);
      }
    );
  }

  /**
   * Create a new contact
   */
  async createContact(data: CreateContactData): Promise<BrevoResponse> {
    try {
      const response = await this.api.post("contacts", {
        ...data,
        listIds: data.listIds || [this.defaultListId],
        updateEnabled: true,
      });
      return response.data;
    } catch (error) {
      if (error instanceof BrevoError && error.code === 400) {
        // Contact might already exist, try to update instead
        return await this.updateContact(data.email, {
          attributes: data.attributes,
          listIds: data.listIds || [this.defaultListId],
        });
      }
      throw error;
    }
  }

  /**
   * Update an existing contact
   */
  async updateContact(email: string, data: UpdateContactData): Promise<BrevoResponse> {
    try {
      const response = await this.api.put(`contacts/${encodeURIComponent(email)}`, data);
      return response.data;
    } catch (error) {
      if (error instanceof BrevoError && error.code === 404) {
        // Contact doesn't exist, try to create instead
        return await this.createContact({ email, ...data });
      }
      throw error;
    }
  }

  /**
   * Add contact to a list
   */
  async addContactToList(email: string, listId: number) {
    return await this.updateContact(email, {
      listIds: [listId],
    });
  }

  /**
   * Remove contact from a list
   */
  async removeContactFromList(email: string, listId: number) {
    return await this.updateContact(email, {
      unlinkListIds: [listId],
    });
  }

  /**
   * Get contact details
   */
  async getContact(email: string): Promise<BrevoResponse | null> {
    try {
      const response = await this.api.get(`contacts/${encodeURIComponent(email)}`);
      return response.data;
    } catch (error) {
      if (error instanceof BrevoError && error.code === 404) {
        return null;
      }
      throw error;
    }
  }

  /**
   * Delete a contact
   */
  async deleteContact(email: string): Promise<void> {
    await this.api.delete(`contacts/${encodeURIComponent(email)}`);
  }

  /**
   * Send transactional email using template
   */
  async sendTransactionalEmail(data: EmailData): Promise<BrevoResponse> {
    const response = await this.api.post("smtp/email", {
      to: data.to,
      templateId: data.templateId,
      params: data.params,
      subject: data.subject,
      tags: data.tags,
    });
    return response.data;
  }
}

// Export singleton instance
export const brevo = new Brevo();

// Helper function for newsletter signup
export async function addToBrevoList(
  email: string,
  attributes?: ContactAttributes,
  listId: number = 2  // Default to list ID 2
) {
  try {
    await brevo.createContact({
      email,
      attributes,
      listIds: [listId],
      updateEnabled: true,
    });
    return true;
  } catch (error) {
    console.error('Failed to add contact to Brevo:', error);
    throw error;
  }
}

// Export types
export type {
  ContactAttributes,
  CreateContactData,
  UpdateContactData,
  EmailData,
  BrevoError,
};