import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, BookOpen, Bell, Image } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">TezTraders Admin</h1>
            <p className="text-sm text-gray-600">Welcome, {user?.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Manage your platform content and settings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/admin/courses"
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-l-4 border-blue-600"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Manage Courses</h3>
                <p className="text-sm text-gray-600">Create and edit trading courses</p>
              </div>
            </div>
            <div className="text-right">
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Go to Courses →
              </button>
            </div>
          </Link>

          <Link
            to="/admin/notifications"
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-l-4 border-green-600"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Bell className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Manage Notifications</h3>
                <p className="text-sm text-gray-600">Send alerts and announcements</p>
              </div>
            </div>
            <div className="text-right">
              <button className="text-green-600 hover:text-green-800 font-semibold text-sm">
                Go to Notifications →
              </button>
            </div>
          </Link>

          {/* <Link
            to="/admin/pms-images"
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-8 border-l-4 border-purple-600"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Image className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Manage PMS Images</h3>
                <p className="text-sm text-gray-600">Upload and manage images</p>
              </div>
            </div>
            <div className="text-right">
              <button className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
                Go to Images →
              </button>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
