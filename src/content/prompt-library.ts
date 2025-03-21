export interface Prompt {
  id: number;
  text: string;
  role: Role;
  category: Category;
  iconBg: string;
}

export type Role = (typeof roles)[number];
export type Category = (typeof categories)[number];

// Pre-define the relationships instead of computing them
export const roleCategories = {
  Marketing: ['Content Creation', 'Planning', 'Analytics'],
  Sales: ['Emails', 'Calls', 'Leads', 'Objections'],
  Finance: ['Billing', 'Operational Costs', 'Payroll', 'Budgeting'],
  Legal: ['Contracts', 'Documents', 'Compliance'],
  Support: ['Customer Support', 'Internal Support', 'Product Support'],
  HR: ['Employee Onboarding', 'Employee Benefits', 'Employee Data', 'Policies'],
  IT: ['Troubleshooting & Support', 'System Access & Permissions', 'Infrastructure Management', 'Cyber Security & Compliance'],
  Operations: ['Process Optimisation', 'Resource Allocation and Management', 'Vendor & Supply Chain Management']
} as const;

export const roles = Object.keys(roleCategories) as Role[];
export const categories = [...new Set(Object.values(roleCategories).flat())] as Category[];

// Role-specific colors
const roleColors = {
  Marketing: '#3B00ff',
  Sales: '#cc00ff',
  Support: '#00ff94',
  HR: '#FFA800',
  Finance: '#00d9ff',
  Legal: '#ff00bf',
  IT: '#fff500',
  Operations: '#ff005c',
};

export const prompts: Prompt[] = [
  {
    id: 1,
    text: "Generate an 800-word blog post about [product feature], incorporating success metrics from our case studies.",
    role: "Marketing",
    category: "Content Creation",
    iconBg: roleColors.Marketing
  },
  {
    id: 2,
    text: "Write a thought leadership piece combining insights from our latest whitepaper and market research.",
    role: "Marketing",
    category: "Content Creation",
    iconBg: roleColors.Marketing
  },
  {
    id: 3,
    text: "Draft a customer success story featuring [Client Name], following our case study format guide.",
    role: "Marketing",
    category: "Content Creation",
    iconBg: roleColors.Marketing
  },
  {
    id: 4,
    text: "Create a 'how to' article on [product name], providing the user with a detailed step-by-step guide.",
    role: "Marketing",
    category: "Content Creation",
    iconBg: roleColors.Marketing
  },
  {
    id: 5,
    text: "Create a social media Reel outline including script, filming instructions, and recommended shots.",
    role: "Marketing",
    category: "Content Creation",
    iconBg: roleColors.Marketing
  },
  {
    id: 6,
    text: "Generate social media posts for LinkedIn and Instagram that highlight our [specific feature/update], using our brand voice and past engagement data.",
    role: "Marketing",
    category: "Content Creation",
    iconBg: roleColors.Marketing
  },
  {
    id: 7,
    text: "Write an ebook focusing on [insert subject], targeting [describe target audience], with [specify tonality] tone, and [define length] length.",
    role: "Marketing",
    category: "Content Creation",
    iconBg: roleColors.Marketing
  },
  {
    id: 8,
    text: "Create a content calendar and optimise schedule times for next month to highlight the launch of [Product].",
    role: "Marketing",
    category: "Planning",
    iconBg: roleColors.Marketing
  },
  {
    id: 9,
    text: "Design a marketing campaign for [product launch/feature], including timeline and channel recommendations.",
    role: "Marketing",
    category: "Planning",
    iconBg: roleColors.Marketing
  },
  {
    id: 10,
    text: "Generate a marketing strategy to reach our Q2 growth targets, based on the [Industry insights report].",
    role: "Marketing",
    category: "Planning",
    iconBg: roleColors.Marketing
  },
  {
    id: 11,
    text: "Create an email marketing sequence for our [product] launch using our [Brand guidelines].",
    role: "Marketing",
    category: "Planning",
    iconBg: roleColors.Marketing
  },
  {
    id: 12,
    text: "Generate KPIs and success metrics for our upcoming [campaign name] that would be good to track.",
    role: "Marketing",
    category: "Planning",
    iconBg: roleColors.Marketing
  },
  {
    id: 13,
    text: "Design a lead generation funnel strategy based on our current conversion rates and customer journey.",
    role: "Marketing",
    category: "Planning",
    iconBg: roleColors.Marketing
  },
  {
    id: 14,
    text: "Review the [2024 Marketing report] and goals for [2025 Marketing report] and suggest which channels to focus on.",
    role: "Marketing",
    category: "Analytics",
    iconBg: roleColors.Marketing
  },
  {
    id: 15,
    text: "Generate a follow-up email sequence for prospects who attended our product demo.",
    role: "Sales",
    category: "Emails",
    iconBg: roleColors.Sales
  },
  {
    id: 16,
    text: "Create a cold outreach template based on our [Best practice emails guide].",
    role: "Sales",
    category: "Emails",
    iconBg: roleColors.Sales
  },
  {
    id: 17,
    text: "Draft a follow-up email to [Client], incorporating our recent case study results from their industry.",
    role: "Sales",
    category: "Emails",
    iconBg: roleColors.Sales
  },
  {
    id: 18,
    text: "Create a discovery call script incorporating our key qualification questions.",
    role: "Sales",
    category: "Calls",
    iconBg: roleColors.Sales
  },
  {
    id: 19,
    text: "Generate talking points for a demo call with [Example] prospect using relevant case studies.",
    role: "Sales",
    category: "Calls",
    iconBg: roleColors.Sales
  },
  {
    id: 20,
    text: "Draft a meeting agenda for [insert audience], covering [insert topic].",
    role: "Sales",
    category: "Calls",
    iconBg: roleColors.Sales
  },
  {
    id: 21,
    text: "Create an objection handling responses document for likely objections from [industry] when selling [product].",
    role: "Sales",
    category: "Calls",
    iconBg: roleColors.Sales
  },
  {
    id: 22,
    text: "Create qualifying questions based on our [ideal customer profile documentation] for [product].",
    role: "Sales",
    category: "Leads",
    iconBg: roleColors.Sales
  },
  {
    id: 23,
    text: "Generate a case study example about [Client] who used [product/solution] to achieve [outcome].",
    role: "Sales",
    category: "Leads",
    iconBg: roleColors.Sales
  },
  {
    id: 24,
    text: "Generate a lead scoring framework to score inbound leads based on our [ideal customer profile documentation].",
    role: "Sales",
    category: "Leads",
    iconBg: roleColors.Sales
  },
  {
    id: 25,
    text: "Review [Company webpage] and summarise their business focus, challenges they may face, and how we could help.",
    role: "Sales",
    category: "Leads",
    iconBg: roleColors.Sales
  },
  {
    id: 26,
    text: "Based on [Company's Industry/Website], suggest pain points they might have with [role type] that our product can solve.",
    role: "Sales",
    category: "Leads",
    iconBg: roleColors.Sales
  },
  {
    id: 27,
    text: "Create a tailored pitch for [Lead's Job Role] at [Company Name] based on their likely responsibilities and challenges.",
    role: "Sales",
    category: "Leads",
    iconBg: roleColors.Sales
  },
  {
    id: 28,
    text: "How can I respond when a prospect says, [Objection]? Include our USPs against the competitor.",
    role: "Sales",
    category: "Objections",
    iconBg: roleColors.Sales
  },
  {
    id: 29,
    text: "What are some common objections businesses in [Industry] might raise about adopting our [Solution/Product]?",
    role: "Sales",
    category: "Objections",
    iconBg: roleColors.Sales
  },
  {
    id: 30,
    text: "What data points or case study examples can I share to address [Concern]?",
    role: "Sales",
    category: "Objections",
    iconBg: roleColors.Sales
  },
  {
    id: 31,
    text: "Show me the payment history for [Client Name] over the last 12 months.",
    role: "Finance",
    category: "Billing",
    iconBg: roleColors.Finance
  },
  {
    id: 32,
    text: "What was the total revenue generated from subscriptions in [month]?",
    role: "Finance",
    category: "Billing",
    iconBg: roleColors.Finance
  },
  {
    id: 33,
    text: "Generate a breakdown of recurring billing charges for [specific product or service].",
    role: "Finance",
    category: "Billing",
    iconBg: roleColors.Finance
  },
  {
    id: 34,
    text: "Analysing our cost history, identify areas for potential cost savings.",
    role: "Finance",
    category: "Billing",
    iconBg: roleColors.Finance
  },
  {
    id: 35,
    text: "What are the total operational costs for [Department/Team] in [month]?",
    role: "Finance",
    category: "Operational Costs",
    iconBg: roleColors.Finance
  },
  {
    id: 36,
    text: "How much did we spend on subscriptions for [provider] in [year]?",
    role: "Finance",
    category: "Operational Costs",
    iconBg: roleColors.Finance
  },
  {
    id: 37,
    text: "Compare costs for [example] from Q1 2023 to Q1 2024.",
    role: "Finance",
    category: "Operational Costs",
    iconBg: roleColors.Finance
  },
  {
    id: 38,
    text: "Which employees received bonuses in [month] and what was their pre-tax total?",
    role: "Finance",
    category: "Payroll",
    iconBg: roleColors.Finance
  },
  {
    id: 39,
    text: "What is the average salary for [Department/Role]?",
    role: "Finance",
    category: "Payroll",
    iconBg: roleColors.Finance
  },
  {
    id: 40,
    text: "Generate a comparison of budget vs. actual spending for [specific project or team].",
    role: "Finance",
    category: "Budgeting",
    iconBg: roleColors.Finance
  },
  {
    id: 41,
    text: "What are the projected savings if we reduce [specific expense] by 15%?",
    role: "Finance",
    category: "Budgeting",
    iconBg: roleColors.Finance
  },
  {
    id: 42,
    text: "What are the key termination clauses in the contract with [Client/Vendor Name]?",
    role: "Legal",
    category: "Contracts",
    iconBg: roleColors.Legal
  },
  {
    id: 43,
    text: "Generate a summary of active contracts due for renewal in [month].",
    role: "Legal",
    category: "Contracts",
    iconBg: roleColors.Legal
  },
  {
    id: 44,
    text: "Compare the payment terms of the contract with [Vendor/Client Name] to our standard terms.",
    role: "Legal",
    category: "Contracts",
    iconBg: roleColors.Legal
  },
  {
    id: 45,
    text: "What are the non-compete clauses in the agreement with [Partner Name]?",
    role: "Legal",
    category: "Contracts",
    iconBg: roleColors.Legal
  },
  {
    id: 46,
    text: "List all compliance documents submitted by [Vendor/Client Name].",
    role: "Legal",
    category: "Documents",
    iconBg: roleColors.Legal
  },
  {
    id: 47,
    text: "Generate a summary of key points in [specific document].",
    role: "Legal",
    category: "Documents",
    iconBg: roleColors.Legal
  },
  {
    id: 48,
    text: "What are the confidentiality provisions in the [specific document]?",
    role: "Legal",
    category: "Documents",
    iconBg: roleColors.Legal
  },
  {
    id: 49,
    text: "Provide the latest policy document on data protection compliance.",
    role: "Legal",
    category: "Documents",
    iconBg: roleColors.Legal
  },
  {
    id: 50,
    text: "What are the key compliance deadlines for this quarter?",
    role: "Legal",
    category: "Compliance",
    iconBg: roleColors.Legal
  },
  {
    id: 51,
    text: "Retrieve a list of all GDPR-related policies we have on file.",
    role: "Legal",
    category: "Compliance",
    iconBg: roleColors.Legal
  },
  {
    id: 52,
    text: "What are the penalties outlined in [specific regulation] for non-compliance?",
    role: "Legal",
    category: "Compliance",
    iconBg: roleColors.Legal
  },
  {
    id: 53,
    text: "Summarise the latest updates in [specific regulation or law].",
    role: "Legal",
    category: "Compliance",
    iconBg: roleColors.Legal
  },
  {
    id: 54,
    text: "Generate a report on the most common customer complaints this quarter.",
    role: "Support",
    category: "Customer Support",
    iconBg: roleColors.Support
  },
  {
    id: 55,
    text: "What steps should be taken to resolve [support problem] based on our support policy?",
    role: "Support",
    category: "Customer Support",
    iconBg: roleColors.Support
  },
  {
    id: 56,
    text: "Highlight key opportunities for improvement based on recent reviews.",
    role: "Support",
    category: "Customer Support",
    iconBg: roleColors.Support
  },
  {
    id: 57,
    text: "Retrieve the troubleshooting guide for [specific issue/product].",
    role: "Support",
    category: "Customer Support",
    iconBg: roleColors.Support
  },
  {
    id: 58,
    text: "Summarise the key steps for setting up [specific tool or software].",
    role: "Support",
    category: "Internal Support",
    iconBg: roleColors.Support
  },
  {
    id: 59,
    text: "What are the troubleshooting steps for resolving [specific internal issue]?",
    role: "Support",
    category: "Internal Support",
    iconBg: roleColors.Support
  },
  {
    id: 60,
    text: "Who should I speak to about [specific issue/project]?",
    role: "Support",
    category: "Internal Support",
    iconBg: roleColors.Support
  },
  {
    id: 61,
    text: "Retrieve the user manual for [specific hardware/software].",
    role: "Support",
    category: "Internal Support",
    iconBg: roleColors.Support
  },
  {
    id: 62,
    text: "What are the most common issues reported for [specific product]?",
    role: "Support",
    category: "Product Support",
    iconBg: roleColors.Support
  },
  {
    id: 63,
    text: "Retrieve customer feedback on [specific product feature].",
    role: "Support",
    category: "Product Support",
    iconBg: roleColors.Support
  },
  {
    id: 64,
    text: "From our reviews, generate a report of feature requests for [specific product].",
    role: "Support",
    category: "Product Support",
    iconBg: roleColors.Support
  },
  {
    id: 65,
    text: "Generate FAQs to include on our website for [specific product or service].",
    role: "Support",
    category: "Product Support",
    iconBg: roleColors.Support
  },
  {
    id: 66,
    text: "Retrieve troubleshooting guides for all issues related to [specific product].",
    role: "Support",
    category: "Product Support",
    iconBg: roleColors.Support
  },
  {
    id: 67,
    text: "List all active warranties for [specific product or service].",
    role: "Support",
    category: "Product Support",
    iconBg: roleColors.Support
  },
  {
    id: 68,
    text: "Retrieve/create the onboarding checklist for [Employee Name] in [position].",
    role: "HR",
    category: "Employee Onboarding",
    iconBg: roleColors.HR
  },
  {
    id: 69,
    text: "What steps are required for onboarding new employees?",
    role: "HR",
    category: "Employee Onboarding",
    iconBg: roleColors.HR
  },
  {
    id: 70,
    text: "Provide an overview of required compliance training for new hires.",
    role: "HR",
    category: "Employee Onboarding",
    iconBg: roleColors.HR
  },
  {
    id: 71,
    text: "What are the standard onboarding procedures for remote employees?",
    role: "HR",
    category: "Employee Onboarding",
    iconBg: roleColors.HR
  },
  {
    id: 72,
    text: "What is the policy for annual leave and how many days does [Employee Name] have remaining?",
    role: "HR",
    category: "Employee Benefits",
    iconBg: roleColors.HR
  },
  {
    id: 73,
    text: "Retrieve the benefits package details for employees in [specific department].",
    role: "HR",
    category: "Employee Benefits",
    iconBg: roleColors.HR
  },
  {
    id: 74,
    text: "What is the reimbursement policy for [Company expenses]?",
    role: "HR",
    category: "Employee Benefits",
    iconBg: roleColors.HR
  },
  {
    id: 75,
    text: "Retrieve details on maternity and paternity leave policies.",
    role: "HR",
    category: "Employee Benefits",
    iconBg: roleColors.HR
  },
  {
    id: 76,
    text: "Retrieve [Employee Name]'s performance review summary.",
    role: "HR",
    category: "Employee Data",
    iconBg: roleColors.HR
  },
  {
    id: 77,
    text: "What is the current headcount by department?",
    role: "HR",
    category: "Employee Data",
    iconBg: roleColors.HR
  },
  {
    id: 78,
    text: "Generate a report on employee turnover rates over the past year.",
    role: "HR",
    category: "Employee Data",
    iconBg: roleColors.HR
  },
  {
    id: 79,
    text: "What is [Employee Name]'s work anniversary and next appraisal date?",
    role: "HR",
    category: "Employee Data",
    iconBg: roleColors.HR
  },
  {
    id: 80,
    text: "Retrieve the latest version of the employee handbook.",
    role: "HR",
    category: "Policies",
    iconBg: roleColors.HR
  },
  {
    id: 81,
    text: "What is the policy on remote work for employees?",
    role: "HR",
    category: "Policies",
    iconBg: roleColors.HR
  },
  {
    id: 82,
    text: "Provide the policy for handling workplace harassment complaints.",
    role: "HR",
    category: "Policies",
    iconBg: roleColors.HR
  },
  {
    id: 83,
    text: "What steps are required to terminate an employee contract?",
    role: "HR",
    category: "Policies",
    iconBg: roleColors.HR
  },
  {
    id: 84,
    text: "How do I reset my [specific software/platform] password?",
    role: "IT",
    category: "Troubleshooting & Support",
    iconBg: roleColors.IT
  },
  {
    id: 85,
    text: "Retrieve the troubleshooting steps for [Example] issues.",
    role: "IT",
    category: "Troubleshooting & Support",
    iconBg: roleColors.IT
  },
  {
    id: 86,
    text: "What is the resolution for 'Access Denied' errors in [specific system]?",
    role: "IT",
    category: "Troubleshooting & Support",
    iconBg: roleColors.IT
  },
  {
    id: 87,
    text: "What is the process for requesting access to [specific tool/system]?",
    role: "IT",
    category: "System Access & Permissions",
    iconBg: roleColors.IT
  },
  {
    id: 88,
    text: "How do I deactivate access for [Employee Name] who has left the company?",
    role: "IT",
    category: "System Access & Permissions",
    iconBg: roleColors.IT
  },
  {
    id: 89,
    text: "Retrieve a list of all company devices assigned to employees.",
    role: "IT",
    category: "Infrastructure Management",
    iconBg: roleColors.IT
  },
  {
    id: 90,
    text: "What are the steps for reporting a phishing email?",
    role: "IT",
    category: "Cyber Security & Compliance",
    iconBg: roleColors.IT
  },
  {
    id: 91,
    text: "Retrieve the latest cybersecurity training materials.",
    role: "IT",
    category: "Cyber Security & Compliance",
    iconBg: roleColors.IT
  },
  {
    id: 92,
    text: "Provide a summary of the security audit report.",
    role: "IT",
    category: "Cyber Security & Compliance",
    iconBg: roleColors.IT
  },
  {
    id: 93,
    text: "Generate a step-by-step workflow for [specific task].",
    role: "Operations",
    category: "Process Optimisation",
    iconBg: roleColors.Operations
  },
  {
    id: 94,
    text: "Identify potential areas for process improvements in [specific department].",
    role: "Operations",
    category: "Process Optimisation",
    iconBg: roleColors.Operations
  },
  {
    id: 95,
    text: "Provide recommendations to improve efficiency in [specific operation].",
    role: "Operations",
    category: "Process Optimisation",
    iconBg: roleColors.Operations
  },
  {
    id: 96,
    text: "Provide a summary of all active projects and their resource allocation.",
    role: "Operations",
    category: "Resource Allocation and Management",
    iconBg: roleColors.Operations
  },
  {
    id: 97,
    text: "Which team members are currently overbooked or underutilised?",
    role: "Operations",
    category: "Resource Allocation and Management",
    iconBg: roleColors.Operations
  },
  {
    id: 98,
    text: "Retrieve the latest contract agreement with [specific vendor].",
    role: "Operations",
    category: "Vendor & Supply Chain Management",
    iconBg: roleColors.Operations
  },
  {
    id: 99,
    text: "What is the delivery timeline for [specific product/service] from [specific supplier]?",
    role: "Operations",
    category: "Vendor & Supply Chain Management",
    iconBg: roleColors.Operations
  },
  {
    id: 100,
    text: "Identify any potential risks in our supply chain and how they can be mitigated.",
    role: "Operations",
    category: "Vendor & Supply Chain Management",
    iconBg: roleColors.Operations
  }
];

// Simple helper functions that don't compute relationships
export const getPromptsByRole = (role: Role) => 
  prompts.filter(p => p.role === role);

export const getCategoriesForRole = (role: Role) => 
  roleCategories[role];

export const getPromptsByCategory = (category: Category) => 
  prompts.filter(p => p.category === category);
