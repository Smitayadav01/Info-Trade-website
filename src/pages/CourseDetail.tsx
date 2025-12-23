import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Users, CheckCircle } from 'lucide-react';
import optionsImg from '../assets/courses/options-selling.jpg';
import algoImg from '../assets/courses/algo-trading.jpg';
import slHuntingImg from '../assets/courses/sl-hunting.jpg';
import RazorpayEnrollButton from "../components/RazorpayEnrollButton";


const courses = [
  {
    id: "1",
    title: "Elite Options Selling Program",
    level: "By TezTraders.in",
    duration: "15 Days",
    price: "₹9,999",
    originalPrice: "₹12,999",
    rating: 4.5,
    students: 20,
    image: optionsImg,
    description:
      "The program covers institutional-level options selling setups with an emphasis on Greeks, volatility analysis, and hedging techniques. Traders will learn how to manage drawdowns, control risk, and maintain consistency across different market cycles.",
    features: [
      "Options strategies",
      "Greeks analysis",
      "Income generation",
      "Risk hedging"
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer:
          "This program is best suited for traders who have basic knowledge of options. It focuses on institutional-level options selling concepts."
      },
      {
        question: "What kind of strategies are taught?",
        answer:
          "You will learn non-directional and hedged options selling strategies designed for consistent income generation."
      },
      {
        question: "How much capital is required?",
        answer:
          "A minimum capital of ₹2–3 lakhs is recommended to effectively implement the strategies taught."
      },
      {
        question: "Does it cover risk management?",
        answer:
        "Yes, strong emphasis is given to drawdown control, hedging techniques, and risk-to-reward optimization."
      }
    ]
  },
  {
    id: "2",
    title: "Algo Trading Mastery Program",
    level: "By TezTraders.in",
    duration: "30 Days",
    price: "₹14,999",
    originalPrice: "₹19,999",
    rating: 4.9,
    students: 15,
    image: algoImg,
    description:
      "This course teaches how to design rule-based algorithmic trading strategies from scratch. You will learn to backtest strategies using historical data, optimize performance, and deploy them for live market execution with proper risk controls.",
    features: [
      "Strategy development",
      "Back-testing",
      "Risk management",
      "Live trading sessions"
    ],
    faqs: [
      {
        question: "Do I need coding knowledge?",
        answer:
          "Basic programming understanding is helpful, but the course starts from fundamentals and explains concepts step-by-step."
      },
      {
        question: "Will I learn live strategy deployment?",
        answer:
          "Yes, the course covers strategy deployment with real-time market execution and risk controls."
      },
      {
        question: "Is backtesting included?",
        answer:
          "Yes, you will learn how to backtest strategies using historical data and optimize performance."
      },
      {
        question: "Which markets are covered?",
        answer:
          "The program focuses mainly on Indian equity and index markets."
      }
    ]
  },
  {
    id: "3",
    title: "Options Buying SL Hunting Course",
    level: "By TezTraders.in",
    duration: "20 Days",
    price: "₹4,999",
    originalPrice: "₹7,999",
    rating: 4.7,
    students: 50,
    image: slHuntingImg,
    description:
      "This course teaches institutional-style options buying with precise entry and exit rules, focusing on high-momentum trades and optimal risk-to-reward. It also covers SL-hunting setups, helping traders identify liquidity zones, false breakouts, and institutional trap moves for high-probability reversals.",
    features: [
      "Price action mastery",
      "Entry modules",
      "Hero-zero strategy",
      "Risk control"
    ],
    faqs: [
      {
        question: "What is SL hunting?",
        answer:
          "SL hunting refers to identifying institutional stop-loss zones and trading high-probability reversals."
      },
      {
        question: "Is this course suitable for intraday traders?",
        answer:
          "Yes, the course is ideal for intraday and short-term options buyers."
      },
      {
        question: "What is the Hero-Zero strategy?",
        answer:
          "It focuses on controlled risk trades with the potential for high reward while strictly managing losses."
      },
      {
        question: "Will this help improve entry timing?",
        answer:
          "Yes, precise entry and exit rules are a core part of this course."
      }
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
    <div className="min-h-screen bg-gray-50 py-5 flex flex-col">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col">
        
        {/* Header */}
        <div className="mb-4">
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

       
{/* Course Image */}
<div className="mb-8 rounded-xl overflow-hidden w-full 
                aspect-[16/10] max-h-[420px] sm:max-h-[480px] md:max-h-[520px] mx-auto">
  <img
    src={course.image}
    alt={course.title}
    className="w-full h-full object-cover"
  />
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
        {/* FAQs */}
<div className="mb-8">
  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

  <div className="space-y-4">
    {course.faqs.map((faq, index) => (
      <details
        key={index}
        className="group border border-gray-200 rounded-lg p-4 cursor-pointer"
      >
        <summary className="flex justify-between items-center font-semibold text-gray-900">
          {faq.question}
          <span className="text-emerald-600 group-open:rotate-180 transition">
            ▼
          </span>
        </summary>
        <p className="mt-3 text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </details>
    ))}
  </div>
</div>


        {/* Sticky Price & CTA (Stops before footer) */}
<div className="sticky bottom-0 bg-white border-t shadow-md mt-10">
  <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

    <div className="text-2xl font-bold text-gray-900">
      <span>{course.price}</span>
      <span className="ml-3 text-lg text-gray-500 line-through">
        {course.originalPrice}
      </span>
    </div>

    <div className="w-full md:w-auto">
  <RazorpayEnrollButton courseId={course.id} />

</div>

  </div>
</div>


      </div>
    </div>
  );
};

export default CourseDetail;
