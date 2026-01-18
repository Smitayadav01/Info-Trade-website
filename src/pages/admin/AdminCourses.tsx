import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Edit2, Trash2, Plus } from "lucide-react";

interface Course {
  _id: string;
  title: string;
  category: string;
  price: number;
  originalPrice: number;
  duration: string;
  rating: number;
  students: number;
  level: string;
  enrolledCount: number;
  isActive: boolean;
}

const Courses = () => {
  const { token } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // -------- FETCH COURSES ----------
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses/admin/all`, // ✅ matches backend
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch courses");

      const data = await response.json();
      setCourses(data.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // -------- DELETE COURSE ----------
  const deleteCourse = async (id: string) => {
    if (!confirm("Delete this course?")) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses/${id}`, // ✅ matches backend delete route
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      setCourses((prev) => prev.filter((c) => c._id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Courses</h1>
          <Link
            to="/admin/courses/new"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            <Plus size={18} /> Add Course
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Duration</th>
                <th className="px-6 py-4 text-left">Rating</th>
                <th className="px-6 py-4 text-left">Students</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {courses.map((course) => (
                <tr key={course._id}>
                  <td className="px-6 py-4 font-medium">{course.title}</td>
                  <td className="px-6 py-4">{course.category}</td>
                  <td className="px-6 py-4">{course.duration}</td>
                  <td className="px-6 py-4">{course.rating}</td>
                  <td className="px-6 py-4">{course.students}</td>
                  <td className="px-6 py-4">
                    ₹{course.price}
                    <span className="line-through text-gray-400 ml-2">
                      ₹{course.originalPrice}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {course.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-3">
                    <Link
                      to={`/admin/courses/${course._id}/edit`} // Edit page
                      className="text-blue-600 flex items-center gap-1"
                    >
                      <Edit2 size={16} /> Edit
                    </Link>
                    <button
                      onClick={() => deleteCourse(course._id)}
                      className="text-red-600 flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {courses.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No courses found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
