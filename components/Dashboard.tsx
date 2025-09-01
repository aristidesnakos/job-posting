'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { LayoutDashboard, BarChart, Settings, Bell, HelpCircle, Search, ChevronDown, Activity, TrendingUp, TrendingDown, MoreVertical, Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Card } from './ui/card';
import { FUNNEL_STAGES, HIGH_RISK_CUSTOMERS, CHART_GRADIENT, RISK_COLORS, TIME_PERIODS } from '@/lib/constants/dashboard';
import type { MetricData } from '@/types/dashboard';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl">PULSAR</span>
          </Link>
        </div>
        
        <nav className="px-4 pb-4">
          <div className="space-y-1">
            <Link href="/" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <BarChart className="h-5 w-5" />
              <span>Statistics</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Activity className="h-5 w-5" />
              <span>Task list</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Bell className="h-5 w-5" />
              <span>Report</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </Link>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-200 space-y-1">
            <span className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Other</span>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
            <Link href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <HelpCircle className="h-5 w-5" />
              <span>Help</span>
            </Link>
          </div>
        </nav>
        
        <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Darrell Steward</p>
              <p className="text-xs text-gray-500">d.steward@gmail.com</p>
            </div>
          </div>
        </div>
      </aside>
      
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-2xl font-semibold text-gray-900">Analytical board</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 w-64 bg-blue-50/50 border-blue-100 focus:bg-white"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <span className="text-sm">Chart Funnel</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Sales Funnel</DropdownMenuItem>
                <DropdownMenuItem>Marketing Funnel</DropdownMenuItem>
                <DropdownMenuItem>Conversion Funnel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  trend = 'up',
  icon
}: MetricData) {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {value}
          </p>
          {change && (
            <div className="flex items-center space-x-1">
              {trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {change}
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}

export function FunnelChart() {
  const stages = FUNNEL_STAGES;

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Sales Funnel Analytics</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gray-500">
              This week <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>This week</DropdownMenuItem>
            <DropdownMenuItem>Last week</DropdownMenuItem>
            <DropdownMenuItem>This month</DropdownMenuItem>
            <DropdownMenuItem>Last month</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="space-y-4">
        {stages.map((stage) => (
          <div key={stage.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">{stage.name}</span>
              <span className="text-lg font-bold">{stage.value}</span>
            </div>
            <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
              <div 
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${CHART_GRADIENT.blue} rounded-lg`}
                style={{ width: `${stage.percentage}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">{stage.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function StatsCard() {
  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <p className="text-3xl font-bold">123%</p>
          <div className="flex items-center justify-center space-x-1 text-green-500">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm">ROI</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">5%</p>
          <div className="flex items-center justify-center space-x-1 text-red-500">
            <TrendingDown className="h-4 w-4" />
            <span className="text-sm">Click Through Rate</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">450K</p>
          <div className="flex items-center justify-center space-x-1 text-green-500">
            <Activity className="h-4 w-4" />
            <span className="text-sm">Daily Active Users</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function RiskTable() {
  const customers = HIGH_RISK_CUSTOMERS;

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">High-Risk Customers</h3>
        <Button variant="ghost" size="sm" className="text-gray-500">
          See all
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
              <th className="pb-3 font-medium">Name</th>
              <th className="pb-3 font-medium">Risk</th>
              <th className="pb-3 font-medium">Key factors</th>
              <th className="pb-3 font-medium">Account value</th>
              <th className="pb-3 font-medium">Feedback</th>
              <th className="pb-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-gray-100">
                <td className="py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                    <span className="font-medium text-gray-900">{customer.name}</span>
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div 
                        key={level} 
                        className={`w-2 h-6 rounded ${level <= 3 ? RISK_COLORS[customer.risk] : 'bg-gray-200'}`} 
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3 text-gray-600">{customer.keyFactors}</td>
                <td className="py-3 font-semibold">{customer.accountValue}</td>
                <td className="py-3">
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Plus className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Minus className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </td>
                <td className="py-3">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export function AICoPilot() {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">The AI Co-Pilot</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Monthly <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {TIME_PERIODS.map((period) => (
              <DropdownMenuItem key={period.value}>{period.label}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex items-center justify-center h-48">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-white/30 backdrop-blur-sm animate-pulse animation-delay-200" />
          <div className="absolute inset-4 rounded-full bg-white/40 backdrop-blur-sm animate-pulse animation-delay-400" />
          <div className="absolute inset-6 rounded-full bg-white flex items-center justify-center">
            <Activity className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2 mt-6">
        <div className="flex justify-between items-center">
          <span className="text-sm opacity-90">Retention</span>
          <span className="text-xs opacity-75">Customer loyalty grew by 8%</span>
        </div>
        <div className="text-xs text-white/70">Retention 2025</div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="h-16 bg-white/20 rounded-lg backdrop-blur-sm" />
        ))}
      </div>
      
      <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white">
        Generate Report
      </Button>
    </Card>
  );
}

export default DashboardLayout;