export interface MetricData {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  icon?: React.ReactNode;
}

export interface FunnelStage {
  name: string;
  value: string;
  percentage: number;
}

export interface Customer {
  id: string;
  name: string;
  risk: 'high' | 'medium' | 'low';
  keyFactors: string;
  accountValue: string;
  avatar?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}

export interface StatsMetric {
  value: string;
  label: string;
  trend: 'up' | 'down' | 'neutral';
  icon?: React.ComponentType<{ className?: string }>;
}