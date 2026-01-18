import React, { useEffect, useState } from 'react';
import { Bell, Clock } from 'lucide-react';

type Notification = {
  _id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  priority: 'low' | 'medium' | 'high';
  isActive: boolean;
  createdAt: string;
};

const Notifications = () => {
  const [filter, setFilter] = useState<'all' | 'info' | 'warning' | 'success' | 'error'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        setError('');

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/notifications`);
        if (!res.ok) throw new Error('Failed to fetch notifications');

        const data = await res.json();
        if (!data.success) throw new Error('Server returned error');

        setNotifications(data.data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Server error while fetching notifications');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const filteredNotifications =
    filter === 'all'
      ? notifications
      : notifications.filter((n) => n.type === filter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'warning':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const filters = [
    { key: 'all', label: 'All Notifications', count: notifications.length },
    {
      key: 'info',
      label: 'Info',
      count: notifications.filter((n) => n.type === 'info').length,
    },
    {
      key: 'warning',
      label: 'Warnings',
      count: notifications.filter((n) => n.type === 'warning').length,
    },
    {
      key: 'success',
      label: 'Success',
      count: notifications.filter((n) => n.type === 'success').length,
    },
    {
      key: 'error',
      label: 'Errors',
      count: notifications.filter((n) => n.type === 'error').length,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
              <Bell className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-600">
                Stay updated with your trading activities and market alerts
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* FILTER SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Filter Notifications
                </h3>
                <div className="space-y-2">
                  {filters.map((filterOption) => (
                    <button
                      key={filterOption.key}
                      onClick={() =>
                        setFilter(
                          filterOption.key as
                            | 'all'
                            | 'info'
                            | 'warning'
                            | 'success'
                            | 'error'
                        )
                      }
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                        filter === filterOption.key
                          ? 'bg-blue-50 text-blue-600 border border-blue-200'
                          : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <span className="font-medium">{filterOption.label}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          filter === filterOption.key
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {filterOption.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* NOTIFICATIONS LIST */}
            <div className="lg:col-span-3">
              {loading && (
                <p className="text-gray-600">Loading notifications...</p>
              )}
              {error && <p className="text-red-500">{error}</p>}

              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <div
                    key={notification._id}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-2 rounded-lg border ${getTypeColor(
                          notification.type
                        )}`}
                      >
                        <Clock className="h-5 w-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {notification.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-2">
                          {notification.message}
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>
                            {new Date(
                              notification.createdAt
                            ).toLocaleString()}
                          </span>
                          <span className="capitalize px-2 py-1 rounded-full text-xs bg-gray-100">
                            {notification.type}
                          </span>
                          <span className="capitalize px-2 py-1 rounded-full text-xs bg-gray-100">
                            Priority: {notification.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredNotifications.length === 0 && !loading && (
                <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No notifications found
                  </h3>
                  <p className="text-gray-600">
                    {filter === 'all'
                      ? "You're all caught up! No new notifications at the moment."
                      : `No ${filter} notifications found.`}
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
