import React from 'react';
import { Star, MapPin, TrendingUp, Award } from 'lucide-react';

const UserProfile = () => {
  const userStats = [
    { label: 'Properties Managed', value: '127', icon: Award },
    { label: 'Years Experience', value: '8', icon: TrendingUp },
    { label: 'Success Rate', value: '94%', icon: Star }
  ];

  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 shadow-2xl">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">JS</span>
        </div>
        <h3 className="text-lg font-semibold text-white">John Sterling</h3>
        <p className="text-gray-400 text-sm">Senior Property Manager</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
            />
          ))}
          <span className="text-sm text-gray-400 ml-2">4.8/5</span>
        </div>
        
        {/* Location */}
        <div className="flex items-center justify-center space-x-1 mt-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">New York, NY</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="space-y-4">
        {userStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <stat.icon className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-sm text-gray-300">{stat.label}</span>
            </div>
            <span className="text-sm font-semibold text-white">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Investment History */}
      <div className="mt-6 pt-6 border-t border-gray-800/50">
        <h4 className="text-sm font-medium text-white mb-3">Investment History</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total Invested</span>
            <span className="text-white">$2.4M</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Current Value</span>
            <span className="text-green-400">$3.1M</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">ROI</span>
            <span className="text-green-400">+29.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;