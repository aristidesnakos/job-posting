'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import type { MetricData, FunnelStage, Customer } from '@/types/dashboard';
import { FUNNEL_STAGES, HIGH_RISK_CUSTOMERS } from '@/lib/constants/dashboard';
import { DollarSign, Users, TrendingUp, ShoppingCart } from 'lucide-react';

export function useDashboardData() {
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [funnelData, setFunnelData] = useState<FunnelStage[]>(FUNNEL_STAGES);
  const [customers, setCustomers] = useState<Customer[]>(HIGH_RISK_CUSTOMERS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchDashboardData = async () => {
      setLoading(true);
      
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setMetrics([
        {
          title: 'Total Revenue',
          value: '$245,385',
          change: '+20.1%',
          trend: 'up',
          icon: <DollarSign className="h-6 w-6 text-blue-600" />,
        },
        {
          title: 'Active Users',
          value: '18,765',
          change: '+15.3%',
          trend: 'up',
          icon: <Users className="h-6 w-6 text-purple-600" />,
        },
        {
          title: 'Conversion Rate',
          value: '3.62%',
          change: '-5.4%',
          trend: 'down',
          icon: <TrendingUp className="h-6 w-6 text-green-600" />,
        },
        {
          title: 'Total Sales',
          value: '1,234',
          change: '+8.2%',
          trend: 'up',
          icon: <ShoppingCart className="h-6 w-6 text-orange-600" />,
        },
      ]);
      
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  return {
    metrics,
    funnelData,
    customers,
    loading,
    refetch: () => {
      // Implement refetch logic
    },
  };
}