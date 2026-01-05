import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ArrowLeft, Save } from "lucide-react";

interface CourseForm {
  title: string;
  description: string;
  duration: string;
  price: number | string;
  level: string;
  category: string;
  syllabus: Array<{ topic: string; content: string }>;
}

const CourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [form, setForm] = useState<CourseForm>({
    title: "",
    description: "",
    duration: "",
    price: "",
    level: "beginner",
    category: "",
    syllabus: [{ topic: "", content: "" }],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchCourse();
    }
  }, [id]);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch course");

      const data = await response.json();
      setForm({
        title: data.data.title,
        description: data.data.description,
        duration: data.data.duration,
        price: data.data.price,
        level: data.data.level || "beginner",
        category: data.data.category,
        syllabus: data.data.syllabus || [{ topic: "", content: "" }],
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSyllabusChange = (index: number, field: string, value: string) => {
    const newSyllabus = [...form.syllabus];
    newSyllabus[index] = { ...newSyllabus[index], [field]: value };
    setForm(prev => ({ ...prev, syllabus: newSyllabus }));
  };

  const addSyllabusItem = () => {
    setForm(prev => ({
      ...prev,
      syllabus: [...prev.syllabus, { topic: "", content: "" }],
    }));
  };

  const removeSyllabusItem = (index: number) => {
    setForm(prev => ({
      ...prev,
      syllabus: prev.syllabus.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        ...form,
        price: Number(form.price),
      };

      const method = id ? "PUT" : "POST";
      const url = id
        ? `${import.meta.env.VITE_API_URL}/api/courses/${id}`
        : `${import.meta.env.VITE_API_URL}/api/courses`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to save course");

      navigate("/admin/courses");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/admin/courses"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Courses
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {id ? "Edit Course" : "Create New Course"}
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter course title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Trading, Investing"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter course description"
              />
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={form.duration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 8 weeks"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">Syllabus</label>
                <button
                  type="button"
                  onClick={addSyllabusItem}
                  className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
                >
                  + Add Topic
                </button>
              </div>

              <div className="space-y-4">
                {form.syllabus.map((item, index) => (
                  <div key={index} className="p-4 border border-gray-300 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        value={item.topic}
                        onChange={(e) => handleSyllabusChange(index, "topic", e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Topic name"
                      />
                      <button
                        type="button"
                        onClick={() => removeSyllabusItem(index)}
                        className="text-red-600 hover:text-red-800 font-semibold text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <textarea
                      value={item.content}
                      onChange={(e) => handleSyllabusChange(index, "content", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Topic content"
                      rows={3}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                <Save size={20} />
                {loading ? "Saving..." : id ? "Update Course" : "Create Course"}
              </button>

              <Link
                to="/admin/courses"
                className="px-6 py-3 bg-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
