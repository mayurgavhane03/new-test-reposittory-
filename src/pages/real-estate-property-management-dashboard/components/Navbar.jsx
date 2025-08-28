import React, { useState } from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const categories = ['Properties list', 'Analytics'];

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-white">RealEstate Pro</h1>
            
            {/* Navigation Categories */}
            <div className="hidden md:flex items-center space-x-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'text-white border-b-2 border-orange-500 pb-1 shadow-lg' 
                      : 'text-gray-400 hover:text-white hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-full pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="group relative p-2 text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110 active:scale-95 hover:bg-gray-800/50 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-gray-900">
              <Bell className="w-5 h-5 transition-transform duration-200 group-hover:rotate-12" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={handleProfileToggle}
                className="group flex items-center space-x-2 p-2 rounded-full hover:bg-gray-800/50 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center transition-all duration-200 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-all duration-200 group-hover:text-white ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-xl rounded-lg border border-gray-800/50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200 transform hover:translate-x-1">
                      Profile Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200 transform hover:translate-x-1">
                      Account Details
                    </a>
                    <hr className="my-2 border-gray-800/50" />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200 transform hover:translate-x-1">
                      Sign Out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;