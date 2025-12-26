import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Users, CheckCircle } from 'lucide-react';
import optionsImg from '../assets/courses/options-selling.jpg';
import algoImg from '../assets/courses/algo-trading.jpg';
import slHuntingImg from '../assets/courses/sl-hunting.jpg';
import RazorpayEnrollButton from "../components/RazorpayEnrollButton";
import { Plus, Minus } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Elite Options Selling Program",
    level: "By TezTraders.in",
    duration: "15 Days",
    price: "₹7,999",
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
    ],
    modules:[
  "Basics of Option Selling",
"Option Greeks",
"Non-Directional Selling-1",
"Non-Directional Selling-2",
"Directional Options Selling-1",
"Directional Options Selling-2",
"Expiry Day Best Setup",
"Positional Strategy-1",
"Positional Strategy-2",
]
  },
  {
    id: "2",
    title: "Algo Trading Mastery Program",
    level: "By TezTraders.in",
    duration: "30 Days",
    price: "₹11,999",
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
      },
      {
  question: "Is this options program suitable for both buyers and sellers?",
  answer: (
    <>
      <p>
        Yes! Our in-depth options trading program is designed to teach both
        major approaches to options trading.
      </p>

      <p className="mt-4 font-semibold">For Options Buyers:</p>
      <ul className="list-disc ml-6">
        <li>Practical call and put buying techniques</li>
        <li>Identifying the right entry and exit points</li>
        <li>Managing risk while trading option premiums</li>
      </ul>

      <p className="mt-4 font-semibold">For Options Sellers:</p>
      <ul className="list-disc ml-6">
        <li>Smart premium-earning methods</li>
        <li>Advanced option selling setups such as iron condors</li>
      </ul>

      <p className="mt-4">
        No matter whether your focus is on buying or selling options, this
        course equips you with the skills you need to trade confidently.
      </p>
    </>
  )
},
  {
  question: "How much time do I need to commit each week for this course?",
  answer: (
    <>
      <p>
        This course is designed with busy professionals in mind, requiring a flexible commitment of just 3–4 hours per week.
      </p>

      <p className="mt-4 font-semibold">Time Breakdown:</p>
      <ul className="list-disc ml-6">
        <li>1–2 hours: Live weekend sessions or recorded classes</li>
        <li>1 hour: Hands-on practice</li>
        <li>30–60 minutes: Community participation and Q&A</li>
        <li>Optional: Extra practice time for faster progress</li>
      </ul>

      <p className="mt-4 font-semibold">Flexible Scheduling Features:</p>
      <ul className="list-disc ml-6">
        <li>Self-paced video modules</li>
        <li>Weekend-focused live sessions</li>
        <li>Mobile-friendly platform for learning on the go</li>
        <li>Lifetime access, so there’s no pressure to rush through the content</li>
      </ul>

      <p className="mt-4">
        This options trading course respects your time while ensuring consistent learning and real results.
      </p>
    </>
  )
},
{
  question: "Why is this course rated as one of the best options trading programs?",
  answer: (
    <>
      <p>
        Our results truly speak for themselves, which is why students consistently rate us among the top options trading courses.
      </p>

      <p className="mt-4 font-semibold">What Makes Us Different:</p>
      <ul className="list-disc ml-6">
        <li>Live trading sessions with real market examples</li>
        <li>Personalized feedback on your individual trades</li>
        <li>Access to a strong community of successful options traders</li>
        <li>Lifetime support along with continuous course updates</li>
      </ul>

      <p className="mt-4">
        Join one of the best options trading courses online and experience firsthand why traders trust and recommend this program.
      </p>
    </>
  )
}

],
    modules:[
  "Introduction to Algo Trading",
  "Importance of diversified systems",
  "Non-directional systems",
  "Directional systems",
  "Semi-directional systems",
  "Cascading systems",
  "Mean reversion",
  "Positional systems",
  "STBT & BTST's",
  "Buying systems",
  "Do's & Don'ts of systematic trading",

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
    ],
    modules:[
  "Introduction to Options Trading",
"Price Action",
"Fibonacci Trading Setup",
"Indicators Trading Setup",
"Advance Scalping Strategies",
"Introduction to SL Hunting",
"Basics of SL Hunting",
"SL Hunting Masterclass",
"Entry Module Using SL Hunting",
"How to Trade Gap Up & Gap Down Using SL Hunting",
"Hero Zero Using SL Hunting",
"Breakout Failure Using SL Hunting",
"Complete Entry Using SL Hunting"
]
  }
];




const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const [showAllModules, setShowAllModules] = useState(false);


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
<div
  className="
    mb-8 
    rounded-xl 
    overflow-hidden 
    w-full 
    bg-white-100 
    flex 
    items-center 
    justify-center
    h-[220px] 
    sm:h-[300px] 
    md:h-[380px] 
    lg:h-[450px]
  "
>
  <img
    src={course.image}
    alt={course.title}
    className="max-w-full max-h-full object-contain"
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
{/* Modules */}
<div className="mb-10">
  <h2 className="text-2xl font-bold mb-6">Course Modules</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {(showAllModules ? course.modules : course.modules.slice(0, 4)).map(
      (module, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
            {index + 1}
          </div>
          <span className="font-medium text-gray-800">{module}</span>
        </div>
      )
    )}
  </div>

  {/* Read More / Read Less */}
  {course.modules.length > 4 && (
    <div className="mt-6 text-center">
      <button
  onClick={() => setShowAllModules(!showAllModules)}
  className="flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
>
  {showAllModules ? (
    <>
      <Minus size={18} />
      Read Less Modules
    </>
  ) : (
    <>
      <Plus size={18} />
      Read Full Modules
    </>
  )}
</button>
    </div>
  )}
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
