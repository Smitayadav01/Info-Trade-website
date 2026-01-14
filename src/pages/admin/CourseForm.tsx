import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ArrowLeft, Save, Plus, Trash } from "lucide-react";

interface CourseForm {
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
}

const CourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [form, setForm] = useState<CourseForm>({
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
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ================= FETCH COURSE (EDIT) ================= */
  useEffect(() => {
    if (id && token) fetchCourse();
  }, [id, token]);

  const fetchCourse = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses/${id}`,
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
      navigate("/admin/courses");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <Link to="/admin/courses" className="flex items-center gap-2 mb-6 text-gray-600">
          <ArrowLeft size={18} /> Back
        </Link>

        <h1 className="text-3xl font-bold mb-6">
          {id ? "Edit Course" : "Create Course"}
        </h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* BASIC INFO */}
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" />
          <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="input" />
          <input name="provider" value={form.provider} onChange={handleChange} placeholder="Provider" className="input" />
          <input name="duration" value={form.duration} onChange={handleChange} placeholder="Duration" className="input" />
          <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="input" />

          {/* PRICING */}
          <div className="grid grid-cols-2 gap-4">
            <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="input" />
            <input name="originalPrice" value={form.originalPrice} onChange={handleChange} placeholder="Original Price" className="input" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input name="rating" value={form.rating} onChange={handleChange} placeholder="Rating" className="input" />
            <input name="students" value={form.students} onChange={handleChange} placeholder="Students" className="input" />
          </div>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="input h-28"
          />

          {/* FEATURES */}
          <Section title="Features" items={form.features} onAdd={() => addArrayItem("features")}
            onChange={(i, v) => handleArrayChange("features", i, v)}
            onRemove={(i) => removeArrayItem("features", i)}
          />

          {/* MODULES */}
          <Section title="Modules" items={form.modules} onAdd={() => addArrayItem("modules")}
            onChange={(i, v) => handleArrayChange("modules", i, v)}
            onRemove={(i) => removeArrayItem("modules", i)}
          />

          {/* FAQ */}
          <div>
            <h3 className="font-semibold mb-2">FAQs</h3>
            {form.faqs.map((faq, i) => (
              <div key={i} className="border p-3 mb-3 rounded">
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
                <button type="button" onClick={() => removeFaq(i)} className="text-red-600 mt-2">
                  Remove FAQ
                </button>
              </div>
            ))}
            <button type="button" onClick={addFaq} className="text-blue-600 flex gap-1">
              <Plus size={16} /> Add FAQ
            </button>
          </div>

          <button
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Save size={18} /> {loading ? "Saving..." : "Save Course"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ========== SMALL REUSABLE SECTION ========== */
const Section = ({ title, items, onAdd, onChange, onRemove }: any) => (
  <div>
    <h3 className="font-semibold mb-2">{title}</h3>
    {items.map((item: string, i: number) => (
      <div key={i} className="flex gap-2 mb-2">
        <input value={item} onChange={e => onChange(i, e.target.value)} className="input flex-1" />
        <button type="button" onClick={() => onRemove(i)} className="text-red-600">
          <Trash size={16} />
        </button>
      </div>
    ))}
    <button type="button" onClick={onAdd} className="text-blue-600 flex gap-1">
      <Plus size={16} /> Add {title}
    </button>
  </div>
);

export default CourseForm;
