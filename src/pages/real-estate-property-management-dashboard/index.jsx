import React, { useState } from 'react';
import { User, Home, DollarSign, BarChart3 } from 'lucide-react';
import KPICard from './components/KPICard';
import RevenueChart from './components/RevenueChart';
import PropertyChart from './components/PropertyChart';
import UserProfile from './components/UserProfile';
import PropertyList from './components/PropertyList';
import Navbar from './components/Navbar';

const RealEstatePropertyManagementDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Properties list');

  // Mock data for KPIs
  const kpiData = [
    {
      title: 'Active Listings',
      value: 1847,
      change: 12.5,
      trend: 'up',
      icon: Home,
      color: 'text-green-400'
    },
    {
      title: 'Monthly Revenue',
      value: '$284,750',
      change: 8.2,
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Mortgage Payments',
      value: '$156,890',
      change: -3.1,
      trend: 'down',
      icon: BarChart3,
      color: 'text-red-400'
    }
  ];

  // Mock data for charts
  const revenueData = [
    { month: 'Jan', revenue: 240000, expenses: 180000 },
    { month: 'Feb', revenue: 268000, expenses: 195000 },
    { month: 'Mar', revenue: 285000, expenses: 210000 },
    { month: 'Apr', revenue: 295000, expenses: 220000 },
    { month: 'May', revenue: 320000, expenses: 235000 },
    { month: 'Jun', revenue: 284750, expenses: 225000 }
  ];

  const propertyData = [
    { name: 'Residential', value: 65, color: '#22C55E' },
    { name: 'Commercial', value: 25, color: '#F97316' },
    { name: 'Industrial', value: 10, color: '#3B82F6' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Content */}
      <div className="pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Property Management Dashboard</h1>
            <p className="text-gray-400">Monitor your real estate portfolio performance</p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left Section - Performance Stats (8 columns) */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kpiData.map((kpi, index) => (
                  <KPICard key={index} {...kpi} />
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 shadow-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Monthly Revenue</h3>
                  <RevenueChart data={revenueData} />
                </div>

                {/* Property Distribution */}
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 shadow-2xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Property Distribution</h3>
                  <PropertyChart data={propertyData} />
                </div>
              </div>

              {/* Add Property Button */}
              <div className="flex justify-center">
                <button className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:from-orange-700 active:to-orange-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-gray-900">
                  <span className="relative z-10">Add Property</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </button>
              </div>
            </div>

            {/* Right Sidebar (4 columns) */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* User Profile */}
              <UserProfile />

              {/* Property Listings */}
              <PropertyList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePropertyManagementDashboard;