'use client';

import { DashboardLayout, MetricCard, FunnelChart, StatsCard, RiskTable, AICoPilot } from '@/components/Dashboard';
import { useDashboardData } from '@/hooks/useDashboardData';

export default function HomePage() {
  const { metrics, loading } = useDashboardData();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            // Loading skeleton
            [...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-lg" />
            ))
          ) : (
            metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Funnel Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <FunnelChart />
          </div>
          
          {/* AI Co-Pilot - Takes 1 column */}
          <div>
            <AICoPilot />
          </div>
        </div>

        {/* Stats and Risk Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <StatsCard />
          </div>
          <div className="lg:col-span-2">
            <RiskTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}