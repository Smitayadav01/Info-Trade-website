import React, { useState } from 'react';
import { Bell, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, DollarSign, BarChart3, Settings } from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'trade',
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Successful Trade Executed',
      message: 'NIFTY Call Option bought at ₹125, target reached at ₹145. Profit: +16%',
      time: '2 minutes ago',
      status: 'success',
      amount: '+₹2,400'
    },
    {
      id: 2,
      type: 'alert',
      icon: <AlertTriangle className="h-5 w-5" />,
      title: 'Risk Alert',
      message: 'Portfolio exposure exceeding 80%. Consider reducing position sizes.',
      time: '15 minutes ago',
      status: 'warning',
      amount: null
    },
    {
      id: 3,
      type: 'trade',
      icon: <TrendingDown className="h-5 w-5" />,
      title: 'Stop Loss Triggered',
      message: 'BANKNIFTY Put Option sold at ₹89. Stop loss activated to limit losses.',
      time: '1 hour ago',
      status: 'error',
      amount: '-₹1,200'
    },
    {
      id: 6,
      type: 'trade',
      icon: <DollarSign className="h-5 w-5" />,
      title: 'Profit Target Achieved',
      message: 'Weekly profit target of ₹10,000 achieved. Consider booking profits.',
      time: '4 hours ago',
      status: 'success',
      amount: '+₹10,000'
    },
    
    {
      id: 8,
      type: 'alert',
      icon: <Clock className="h-5 w-5" />,
      title: 'Market Closing Soon',
      message: 'NSE will close in 30 minutes. Review open positions.',
      time: '1 day ago',
      status: 'warning',
      amount: null
    }
  ];

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      case 'warning': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getAmountColor = (amount: string | null) => {
    if (!amount) return '';
    return amount.startsWith('+') ? 'text-emerald-600' : 'text-red-600';
  };

  const filters = [
    { key: 'all', label: 'All Notifications', count: notifications.length },
    { key: 'trade', label: 'Trades', count: notifications.filter(n => n.type === 'trade').length },
    { key: 'alert', label: 'Alerts', count: notifications.filter(n => n.type === 'alert').length },
  ];

  const stats = [
    { label: 'Today\'s Trades', value: '12', change: '+3', color: 'emerald' },
    { label: 'Active Alerts', value: '5', change: '-2', color: 'amber' },
    { label: 'P&L Today', value: '₹8,400', change: '+12%', color: 'emerald' },
    { label: 'Win Rate', value: '78%', change: '+5%', color: 'blue' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                <p className="text-gray-600">Stay updated with your trading activities and market alerts</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Mark All Read
            </button>
          </div>
        </div>
      </section>

      {/* Stats Cards
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter Notifications</h3>
                <div className="space-y-2">
                  {filters.map((filterOption) => (
                    <button
                      key={filterOption.key}
                      onClick={() => setFilter(filterOption.key)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                        filter === filterOption.key
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <span className="font-medium">{filterOption.label}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        filter === filterOption.key
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {filterOption.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Notifications List */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg border ${getStatusColor(notification.status)}`}>
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {notification.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed mb-2">
                              {notification.message}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {notification.time}
                              </span>
                              <span className="capitalize px-2 py-1 rounded-full text-xs bg-gray-100">
                                {notification.type}
                              </span>
                            </div>
                          </div>
                          {notification.amount && (
                            <div className={`text-lg font-bold ${getAmountColor(notification.amount)} ml-4`}>
                              {notification.amount}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredNotifications.length === 0 && (
                <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications found</h3>
                  <p className="text-gray-600">
                    {filter === 'all' 
                      ? 'You\'re all caught up! No new notifications at the moment.'
                      : `No ${filter} notifications found. Try selecting a different filter.`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;