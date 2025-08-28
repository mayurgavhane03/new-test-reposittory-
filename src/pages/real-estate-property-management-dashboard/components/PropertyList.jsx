import React from 'react';
import { MapPin, Bed, Bath, Square, TrendingUp, Eye, Edit } from 'lucide-react';

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      location: 'Manhattan, NY',
      price: '$485,000',
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: '/api/placeholder/150/100',
      status: 'Available',
      trend: 'up',
      change: '+5.2%'
    },
    {
      id: 2,
      title: 'Luxury Penthouse Suite',
      location: 'Brooklyn, NY',
      price: '$750,000',
      beds: 3,
      baths: 3,
      sqft: 1800,
      image: '/api/placeholder/150/100',
      status: 'Sold',
      trend: 'up',
      change: '+12.8%'
    },
    {
      id: 3,
      title: 'Cozy Family Home',
      location: 'Queens, NY',
      price: '$320,000',
      beds: 3,
      baths: 2,
      sqft: 1500,
      image: '/api/placeholder/150/100',
      status: 'Pending',
      trend: 'down',
      change: '-2.1%'
    },
    {
      id: 4,
      title: 'Urban Loft Space',
      location: 'Bronx, NY',
      price: '$395,000',
      beds: 1,
      baths: 1,
      sqft: 900,
      image: '/api/placeholder/150/100',
      status: 'Available',
      trend: 'up',
      change: '+8.7%'
    },
    {
      id: 5,
      title: 'Suburban Villa',
      location: 'Staten Island, NY',
      price: '$680,000',
      beds: 4,
      baths: 3,
      sqft: 2200,
      image: '/api/placeholder/150/100',
      status: 'Available',
      trend: 'up',
      change: '+3.4%'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'text-green-400 bg-green-400/20';
      case 'Sold':
        return 'text-blue-400 bg-blue-400/20';
      case 'Pending':
        return 'text-yellow-400 bg-yellow-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Property Listings</h3>
        <span className="text-sm text-gray-400">{properties.length} Properties</span>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {properties.map((property) => (
          <div key={property.id} className="bg-gray-800/30 rounded-xl p-4 hover:bg-gray-800/50 transition-colors duration-200">
            <div className="flex space-x-3">
              {/* Property Image */}
              <div className="w-16 h-16 bg-gray-700 rounded-lg flex-shrink-0 flex items-center justify-center">
                <Square className="w-6 h-6 text-gray-400" />
              </div>

              {/* Property Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-white truncate">{property.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(property.status)}`}>
                    {property.status}
                  </span>
                </div>
                
                <div className="flex items-center space-x-1 mb-2">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{property.price}</span>
                  <div className={`flex items-center space-x-1 ${property.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs">{property.change}</span>
                  </div>
                </div>
                
                {/* Property Details */}
                <div className="flex items-center space-x-3 mt-2 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Bed className="w-3 h-3" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="w-3 h-3" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="w-3 h-3" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 mt-3">
              <button className="group relative flex items-center space-x-1 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 active:bg-blue-500/40 text-blue-400 hover:text-blue-300 rounded-lg text-xs transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 focus:ring-offset-gray-800">
                <Eye className="w-3 h-3 transition-transform duration-200 group-hover:scale-110" />
                <span>View</span>
              </button>
              <button className="group relative flex items-center space-x-1 px-3 py-1 bg-orange-500/20 hover:bg-orange-500/30 active:bg-orange-500/40 text-orange-400 hover:text-orange-300 rounded-lg text-xs transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-1 focus:ring-offset-gray-800">
                <Edit className="w-3 h-3 transition-transform duration-200 group-hover:scale-110" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;