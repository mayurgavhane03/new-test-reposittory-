import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Icon from '../../../components/AppIcon';


const KPICard = ({ title, value, change, trend, icon: Icon, color }) => {
  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
          {trend === 'up' ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">{Math.abs(change)}%</span>
        </div>
      </div>
      
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-800/50">
        <p className="text-xs text-gray-500">
          {trend === 'up' ? 'Increased' : 'Decreased'} from last month
        </p>
      </div>
    </div>
  );
};

export default KPICard;