import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ArrowLeft, Save, Upload } from "lucide-react";

interface PMSImageForm {
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  isActive: boolean;
}

const PMSImageForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [form, setForm] = useState<PMSImageForm>({
    title: "",
    imageUrl: "",
    description: "",
    category: "general",
    isActive: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchImage();
    }
  }, [id]);

  const fetchImage = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pms-images/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch image");

      const data = await response.json();
      setForm({
        title: data.data.title,
        imageUrl: data.data.imageUrl,
        description: data.data.description,
        category: data.data.category,
        isActive: data.data.isActive,
      });
      setPreviewUrl(data.data.imageUrl);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setForm(prev => ({ ...prev, imageUrl: url }));
    if (url) {
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const method = id ? "PUT" : "POST";
      const url = id
        ? `${import.meta.env.VITE_API_URL}/api/pms-images/${id}`
        : `${import.meta.env.VITE_API_URL}/api/pms-images`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to save image");

      navigate("/admin/pms-images");
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
          to="/admin/pms-images"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
        >
          <ArrowLeft size={20} />
          Back to Images
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {id ? "Edit Image" : "Upload New Image"}
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Image title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleImageUrlChange}
                  required
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition flex items-center gap-2"
                >
                  <Upload size={16} />
                  Browse
                </button>
              </div>
            </div>

            {previewUrl && (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-4">Preview</p>
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-w-full h-auto max-h-64 mx-auto rounded"
                  onError={() => setPreviewUrl(null)}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Image description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., general, portfolio, performance"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="isActive"
                name="isActive"
                checked={form.isActive}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                Active
              </label>
            </div>

            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                disabled={loading}
                className={`flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold transition ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
                }`}
              >
                <Save size={20} />
                {loading ? "Saving..." : id ? "Update Image" : "Upload Image"}
              </button>

              <Link
                to="/admin/pms-images"
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

export default PMSImageForm;
