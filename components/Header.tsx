import Link from 'next/link';
import { LayoutDashboard, BarChart, Settings, Bell, HelpCircle, Search, ChevronDown, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  return (
    <div className="flex h-screen">
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
        
        <main className="flex-1 overflow-auto bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30">
        </main>
      </div>
    </div>
  );
}