import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Clock, Users, CheckCircle, Plus, Minus } from "lucide-react";
import { useAuth } from "../../context/AuthContext"; // import auth for token

interface Course {
  _id: string;
  title: string;
  provider?: string;
  category: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating?: number;
  students?: number;
  enrolledCount?: number;
  isActive?: boolean;
  modules?: string[];
  features?: string[];
  faqs?: { question: string; answer: string }[];
}

const AdminCourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { token } = useAuth(); // get token for auth
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllModules, setShowAllModules] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/courses/${id}`, // ✅ backend route
          {
            headers: { Authorization: `Bearer ${token}` }, // only if auth required
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Course not found");
        }

        setCourse(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, token]);

  if (loading) return <p>Loading Admin Course...</p>;
  if (error || !course) return <p className="text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
        <p className="text-gray-600">Admin View</p>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">Course Details (Admin)</h2>
          <p className="mt-2">{course.description}</p>
        </div>

        <div className="mt-6 text-xl font-bold">
          Price: ₹{course.price}
          {course.originalPrice && (
            <span className="line-through text-gray-400 ml-2">
              ₹{course.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCourseDetails;
