import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  interest?: string;
  answers?: Record<string, string>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
}