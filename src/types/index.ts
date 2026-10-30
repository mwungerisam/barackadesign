export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type StudioDiscipline = {
  id: string;
  code: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type StudioMetric = {
  label: string;
  value: string;
  context: string;
};

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  overview: string;
}
