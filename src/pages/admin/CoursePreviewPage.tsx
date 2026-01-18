import { useLocation } from "react-router-dom";
import { Star, Clock, Users, CheckCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";

const CoursePreview = () => {
  const location = useLocation();
  const course = location.state?.course;
  const [showAllModules, setShowAllModules] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-red-600">
          No preview data found
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-1">{course.title}</h1>
        {course.provider && (
          <p className="text-gray-600">{course.provider}</p>
        )}

        <img
          src={course.image || "https://via.placeholder.com/800x400"}
          alt={course.title}
          className="w-full rounded-lg my-4"
        />

        {/* Stats */}
        <div className="flex gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400" />
            {course.rating || 4.5}
          </div>
          <div className="flex items-center gap-2">
            <Clock />
            {course.duration}
          </div>
          <div className="flex items-center gap-2">
            <Users />
            {(course.students || 0)}+ students
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-3">About this Course</h2>
          <p className="text-gray-700 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Features */}
        {course.features?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Inside the Course</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.features.map((feature: string, index: number) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="text-emerald-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modules */}
        {course.modules?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Course Modules</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {(showAllModules
                ? course.modules
                : course.modules.slice(0, 4)
              ).map((module: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <span>{module}</span>
                </div>
              ))}
            </div>

            {course.modules.length > 4 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAllModules(!showAllModules)}
                  className="flex gap-2 mx-auto text-emerald-600 font-semibold"
                >
                  {showAllModules ? <Minus /> : <Plus />}
                  {showAllModules ? "Read Less" : "Read Full Modules"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* FAQs */}
        {course.faqs?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>

            {course.faqs.map((faq: any, index: number) => (
              <details key={index} className="border p-4 rounded-lg mb-3">
                <summary className="font-semibold cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="sticky bottom-0 bg-white border-t mt-10 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            ₹{Number(course.price).toLocaleString()}
            <span className="ml-3 text-lg line-through text-gray-500">
              ₹{Number(course.originalPrice).toLocaleString()}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoursePreview;
