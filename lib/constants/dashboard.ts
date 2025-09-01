import { FunnelStage, Customer } from '@/types/dashboard';

export const FUNNEL_STAGES: FunnelStage[] = [
  { name: 'Emails', value: '95k', percentage: 100 },
  { name: 'Visits', value: '73.4k', percentage: 76 },
  { name: 'Log in', value: '33.1k', percentage: 38 },
  { name: 'Payments', value: '15.7k', percentage: 21 },
];

export const HIGH_RISK_CUSTOMERS: Customer[] = [
  { 
    id: '1',
    name: 'Ralph Edwards', 
    risk: 'high', 
    keyFactors: 'Low activity', 
    accountValue: '$12,500' 
  },
  { 
    id: '2',
    name: 'Floyd Miles', 
    risk: 'high', 
    keyFactors: 'Inactivity', 
    accountValue: '$7,240' 
  },
  { 
    id: '3',
    name: 'Jenny Wilson', 
    risk: 'high', 
    keyFactors: 'Low engagement', 
    accountValue: '$91,000' 
  },
];

export const CHART_GRADIENT = {
  blue: 'from-blue-400 to-blue-500',
  purple: 'from-purple-400 to-purple-500',
  combined: 'from-blue-500 to-purple-600',
} as const;

export const RISK_COLORS = {
  high: 'bg-red-400',
  medium: 'bg-yellow-400',
  low: 'bg-green-400',
} as const;

export const TIME_PERIODS = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
] as const;