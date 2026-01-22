
// Add missing React import to resolve 'Cannot find namespace React' error when using React.ReactNode.
import React from 'react';

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits?: string[];
  roles?: string[];
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
