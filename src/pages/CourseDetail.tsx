import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Users, CheckCircle } from 'lucide-react';

const courses = [
  {
    id: "1",
    title: "Elite Options Selling Program",
    level: "Buy TezTraders.in",
    duration: "15 Days",
    price: "₹7,999",
    rating: 4.5,
    students: 20,
    description:
      "The program covers institutional-level options selling setups with an emphasis on Greeks, volatility analysis, and hedging techniques. Traders will learn how to manage drawdowns, control risk, and maintain consistency across different market cycles.",
    features: [
      "Options strategies",
      "Greeks analysis",
      "Income generation",
      "Risk hedging"
    ]
  },
  {
    id: "2",
    title: "Algo Trading Mastery Program",
    level: "Buy TezTraders.in",
    duration: "30 Days",
    price: "₹14,999",
    rating: 4.9,
    students: 15,
    description:
      "This course teaches how to design rule-based algorithmic trading strategies from scratch. You will learn to backtest strategies using historical data, optimize performance, and deploy them for live market execution with proper risk controls.",
    features: [
      "Strategy development",
      "Back-testing",
      "Risk management",
      "Live trading sessions"
    ]
  },
  {
    id: "3",
    title: "Options Buying SL Hunting Course",
    level: "Buy TezTraders.in",
    duration: "20 Days",
    price: "₹3,999",
    rating: 4.7,
    students: 50,
    description:
      "This course teaches institutional-style options buying with precise entry and exit rules, focusing on high-momentum trades and optimal risk-to-reward. It also covers SL-hunting setups, helping traders identify liquidity zones, false breakouts, and institutional trap moves for high-probability reversals.",
    features: [
      "Price action mastery",
      "Entry modules",
      "Hero-zero strategy",
      "Risk control"
    ]
  }
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Course not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {course.title}
          </h1>
          <p className="text-gray-600 text-lg">{course.level}</p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400 fill-current" />
            {course.rating}
          </div>
          <div className="flex items-center gap-2">
            <Clock />
            {course.duration}
          </div>
          <div className="flex items-center gap-2">
            <Users />
            {course.students}+ students
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-3">About this Course</h2>
          <p className="text-gray-700 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Inside The Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-emerald-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & CTA */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-3xl font-bold text-gray-900">
            {course.price}
          </div>
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
