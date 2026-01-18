import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ArrowLeft, Save, Plus, Trash } from "lucide-react";

interface CourseFormType {
  title: string;
  category: string;
  provider: string;
  duration: string;
  price: number | string;
  originalPrice: number | string;
  rating: number | string;
  students: number | string;
  image: string;
  description: string;
  features: string[];
  modules: string[];
  faqs: { question: string; answer: string }[];
  isActive: boolean;
}

const CourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [form, setForm] = useState<CourseFormType>({
    title: "",
    category: "",
    provider: "",
    duration: "",
    price: "",
    originalPrice: "",
    rating: "",
    students: "",
    image: "",
    description: "",
    features: [""],
    modules: [""],
    faqs: [{ question: "", answer: "" }],
    isActive: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH COURSE (EDIT MODE) ================= */
  useEffect(() => {
    if (id && token) fetchCourse();
  }, [id, token]);

  const fetchCourse = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/courses/admin/${id}`,  // ✅ MATCHES YOUR ROUTE
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const json = await res.json();
    if (!res.ok) throw new Error(json.message || "Failed to fetch course");

    setForm({
      title: json.data.title,
      category: json.data.category,
      provider: json.data.provider,
      duration: json.data.duration,
      price: json.data.price,
      originalPrice: json.data.originalPrice,
      rating: json.data.rating,
      students: json.data.students,
      image: json.data.image,
      description: json.data.description,
      features: json.data.features || [""],
      modules: json.data.modules || [""],
      faqs: json.data.faqs || [{ question: "", answer: "" }],
      isActive: json.data.isActive ?? false,
    });
  } catch (err: any) {
    setError(err.message);
  }
};


  /* ================= HANDLERS ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (
    field: "features" | "modules",
    index: number,
    value: string
  ) => {
    const updated = [...form[field]];
    updated[index] = value;
    setForm(prev => ({ ...prev, [field]: updated }));
  };

  const addArrayItem = (field: "features" | "modules") => {
    setForm(prev => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeArrayItem = (field: "features" | "modules", index: number) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleFaqChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const updated = [...form.faqs];
    updated[index] = { ...updated[index], [field]: value };
    setForm(prev => ({ ...prev, faqs: updated }));
  };

  const addFaq = () => {
    setForm(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const removeFaq = (index: number) => {
    setForm(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        ...form,
        price: Number(form.price),
        originalPrice: Number(form.originalPrice),
        rating: Number(form.rating),
        students: Number(form.students),
        isActive: form.isActive,
      };

      const res = await fetch(
        id
          ? `${import.meta.env.VITE_API_URL}/api/courses/${id}`
          : `${import.meta.env.VITE_API_URL}/api/courses`,
        {
          method: id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error("Failed to save course");

      const data = await res.json();
      navigate("/course-preview", {
  state: { course: data.data },
});
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        <Link
          to="/admin/courses"
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-black"
        >
          <ArrowLeft size={18} /> Back to Courses
        </Link>

        <h1 className="text-3xl font-bold mb-6">
          {id ? "Edit Course" : "Create New Course"}
        </h1>

        {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* BASIC DETAILS */}
          <div className="border p-5 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">Basic Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Title</label>
                <input name="title" value={form.title} onChange={handleChange} className="input" />
              </div>

              <div>
                <label className="form-label">Category</label>
                <input name="category" value={form.category} onChange={handleChange} className="input" />
              </div>

              <div>
                <label className="form-label">Provider</label>
                <input name="provider" value={form.provider} onChange={handleChange} className="input" />
              </div>

              <div>
                <label className="form-label">Duration</label>
                <input name="duration" value={form.duration} onChange={handleChange} className="input" />
              </div>
            </div>

            <div className="mt-4">
              <label className="form-label">Image URL</label>
              <input name="image" value={form.image} onChange={handleChange} className="input" />
            </div>
          </div>

          {/* PRICING & STATS */}
          <div className="border p-5 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">Pricing & Stats</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Price (₹)</label>
                <input name="price" value={form.price} onChange={handleChange} className="input" />
              </div>

              <div>
                <label className="form-label">Original Price (₹)</label>
                <input name="originalPrice" value={form.originalPrice} onChange={handleChange} className="input" />
              </div>

              <div>
                <label className="form-label">Rating</label>
                <input name="rating" value={form.rating} onChange={handleChange} className="input" />
              </div>

              <div>
                <label className="form-label">Students Enrolled</label>
                <input name="students" value={form.students} onChange={handleChange} className="input" />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="border p-5 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">Course Description</h2>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write detailed course description..."
              className="input h-28"
            />
          </div>

          {/* FEATURES */}
          <div className="border p-5 rounded-lg bg-gray-50">
            <Section
              title="Features"
              items={form.features}
              onAdd={() => addArrayItem("features")}
              onChange={(i, v) => handleArrayChange("features", i, v)}
              onRemove={(i) => removeArrayItem("features", i)}
            />
          </div>

          {/* MODULES */}
          <div className="border p-5 rounded-lg bg-gray-50">
            <Section
              title="Modules"
              items={form.modules}
              onAdd={() => addArrayItem("modules")}
              onChange={(i, v) => handleArrayChange("modules", i, v)}
              onRemove={(i) => removeArrayItem("modules", i)}
            />
          </div>

          {/* FAQ */}
          <div className="border p-5 rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-4">FAQs</h2>

            {form.faqs.map((faq, i) => (
              <div key={i} className="border p-3 mb-3 rounded bg-white">
                <input
                  value={faq.question}
                  onChange={e => handleFaqChange(i, "question", e.target.value)}
                  placeholder="Question"
                  className="input mb-2"
                />
                <textarea
                  value={faq.answer}
                  onChange={e => handleFaqChange(i, "answer", e.target.value)}
                  placeholder="Answer"
                  className="input"
                />

                <button
                  type="button"
                  onClick={() => removeFaq(i)}
                  className="text-red-600 mt-2"
                >
                  Remove FAQ
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addFaq}
              className="text-blue-600 flex gap-1 mt-2"
            >
              <Plus size={16} /> Add FAQ
            </button>
          </div>

          {/* PUBLISH TO USER PAGE */}
          <div className="border p-5 rounded-lg bg-gray-50 flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.isActive}
              onChange={e =>
                setForm(prev => ({ ...prev, isActive: e.target.checked }))
              }
            />
            <label className="font-medium">
              Show this course on main course page (Publish)
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <Save size={18} />
            {loading ? "Saving..." : "Save Course"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ========== SMALL REUSABLE SECTION ========== */
type SectionProps = {
  title: string;
  items: string[];
  onAdd: () => void;
  onChange: (i: number, v: string) => void;
  onRemove: (i: number) => void;
};

const Section = ({ title, items, onAdd, onChange, onRemove }: SectionProps) => (
  <div>
    <h3 className="font-semibold mb-2">{title}</h3>
    {items.map((item, i) => (
      <div key={i} className="flex gap-2 mb-2">
        <input
          value={item}
          onChange={e => onChange(i, e.target.value)}
          className="input flex-1"
        />
        <button
          type="button"
          onClick={() => onRemove(i)}
          className="text-red-600"
        >
          <Trash size={16} />
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className="text-blue-600 flex gap-1"
    >
      <Plus size={16} /> Add {title}
    </button>
  </div>
);

export default CourseForm;
