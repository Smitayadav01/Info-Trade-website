import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js";

dotenv.config();

const courses = [
  {
    title: "Elite Options Selling Program",
    category: "Options Trading",
    level: "advanced",
    instructor: "TezTraders.in",
    duration: "15 Days",
    price: 7999,
    originalPrice: 12999,
    rating: 4.5,
    students: 20,
    image: "/courses/options-selling.jpg",
    description:
      "Institutional-level options selling program focusing on Greeks, volatility, and hedging.",
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
          "This program is best suited for traders who have basic knowledge of options."
      },
      {
        question: "What kind of strategies are taught?",
        answer:
          "You will learn non-directional and hedged options selling strategies."
      },
      {
        question: "How much capital is required?",
        answer:
          "A minimum capital of ₹2–3 lakhs is recommended."
      },
      {
        question: "Does it cover risk management?",
        answer:
          "Yes, strong emphasis is given to drawdown control and hedging."
      }
    ],
    modules: [
      "Basics of Option Selling",
      "Option Greeks",
      "Non-Directional Selling",
      "Directional Options Selling",
      "Expiry Day Best Setup",
      "Positional Strategies"
    ]
  },

  {
    title: "Algo Trading Mastery Program",
    category: "Algo Trading",
    level: "intermediate",
    instructor: "TezTraders.in",
    duration: "30 Days",
    price: 11999,
    originalPrice: 19999,
    rating: 4.9,
    students: 15,
    image: "/courses/algo-trading.jpg",
    description:
      "Learn rule-based algorithmic trading from scratch with live deployment.",
    features: [
      "Strategy development",
      "Back-testing",
      "Risk management",
      "Live trading"
    ],
    faqs: [
      {
        question: "Do I need coding knowledge?",
        answer:
          "Basic programming understanding is helpful but not mandatory."
      },
      {
        question: "Will I learn live strategy deployment?",
        answer:
          "Yes, live deployment with risk controls is covered."
      },
      {
        question: "Is backtesting included?",
        answer:
          "Yes, you will learn how to backtest strategies."
      },
      {
        question: "Which markets are covered?",
        answer:
          "Mainly Indian equity and index markets."
      },
      {
        question: "Is this suitable for both buyers and sellers?",
        answer:
          "Yes, the program covers strategies for both options buyers and sellers."
      },
      {
        question: "How much weekly time is required?",
        answer:
          "Approximately 3–4 hours per week."
      },
      {
        question: "Why is this course highly rated?",
        answer:
          "Live sessions, personalized feedback, strong community, and lifetime support."
      }
    ],
    modules: [
      "Introduction to Algo Trading",
      "Diversified Systems",
      "Non-directional Systems",
      "Directional Systems",
      "Mean Reversion",
      "Positional Systems",
      "Live Deployment"
    ]
  },

  {
    title: "Options Buying SL Hunting Course",
    category: "Options Trading",
    level: "beginner",
    instructor: "TezTraders.in",
    duration: "20 Days",
    price: 4999,
    originalPrice: 7999,
    rating: 4.7,
    students: 50,
    image: "/courses/sl-hunting.jpg",
    description:
      "Institutional-style options buying with SL hunting techniques.",
    features: [
      "Price action mastery",
      "SL hunting setups",
      "Hero-Zero strategy",
      "Risk control"
    ],
    faqs: [
      {
        question: "What is SL hunting?",
        answer:
          "Identifying institutional stop-loss zones for high-probability reversals."
      },
      {
        question: "Is this suitable for intraday traders?",
        answer:
          "Yes, ideal for intraday and short-term traders."
      },
      {
        question: "What is the Hero-Zero strategy?",
        answer:
          "A controlled-risk strategy with high reward potential."
      },
      {
        question: "Will this improve entry timing?",
        answer:
          "Yes, precise entry timing is a core focus."
      }
    ],
    modules: [
      "Introduction to Options Trading",
      "Price Action",
      "Fibonacci Setup",
      "Indicators Setup",
      "SL Hunting Masterclass",
      "Hero Zero Strategy",
      "Advanced Scalping"
    ]
  }
];


const seedCourses = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Course.deleteMany();
    await Course.insertMany(courses);
    console.log("✅ Courses seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedCourses();
