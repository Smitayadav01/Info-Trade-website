import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Edit2, Trash2, Plus, Image as ImageIcon } from "lucide-react";

interface PMSImage {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  isActive: boolean;
  uploadedBy: {
    name: string;
    email: string;
  };
  createdAt: string;
}

const PMSImages = () => {
  const { token } = useAuth();
  const [images, setImages] = useState<PMSImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pms-images`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch images");

      const data = await response.json();
      setImages(data.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pms-images/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to delete image");

      setImages(images.filter(img => img._id !== id));
    } catch (err: any) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="bg-white shadow-lg mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Manage PMS Images</h1>
          <Link
            to="/admin"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Back to Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">PMS Images</h2>
          <Link
            to="/admin/pms-images/new"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition font-semibold"
          >
            <Plus size={20} />
            Upload Image
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {images.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <ImageIcon size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">No images uploaded yet</p>
            <Link
              to="/admin/pms-images/new"
              className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-semibold"
            >
              Upload First Image →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                      {image.category}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      image.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {image.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/admin/pms-images/${image._id}`}
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition flex items-center justify-center gap-1"
                    >
                      <Edit2 size={16} /> Edit
                    </Link>
                    <button
                      onClick={() => deleteImage(image._id)}
                      className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold transition flex items-center justify-center gap-1"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PMSImages;
