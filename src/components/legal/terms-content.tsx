'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';

import { termsContent } from '@/content/legal';

export function TermsContent() {
  return (
    <div className="prose prose-blue max-w-none dark:prose-invert">
      <ReactMarkdown>{termsContent}</ReactMarkdown>
    </div>
  );
}
