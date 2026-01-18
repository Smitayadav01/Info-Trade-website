import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface Course {
  _id: string;
  title: string;
  category: string;
  price: number;
  originalPrice: number;
  duration: string;
  description: string;
  isActive: boolean;
}

const AdminCourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { token } = useAuth();
  const navigate = useNavigate();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/courses/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Course not found");
        setCourse(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id, token]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;
    setSaving(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/courses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(course),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Update failed");
      navigate("/admin/courses");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error || !course) return <p className="text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Edit Course</h1>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={course.title}
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-semibold">Category</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={course.category}
              onChange={(e) => setCourse({ ...course, category: e.target.value })}
            />
          </div>

          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              value={course.description}
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold">Price</label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                value={course.price}
                onChange={(e) => setCourse({ ...course, price: Number(e.target.value) })}
              />
            </div>

            <div className="flex-1">
              <label className="block font-semibold">Original Price</label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded"
                value={course.originalPrice}
                onChange={(e) => setCourse({ ...course, originalPrice: Number(e.target.value) })}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold">Duration</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={course.duration}
              onChange={(e) => setCourse({ ...course, duration: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={course.isActive}
              onChange={(e) => setCourse({ ...course, isActive: e.target.checked })}
            />
            <span>Active</span>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};




export default AdminCourseDetails;
