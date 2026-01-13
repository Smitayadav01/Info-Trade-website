import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./models/Course.js";

dotenv.config();

const courses = [
  {
    title: "Elite Options Selling Program",
    category: "Options Trading",
    provider: "By TezTraders.in",
    duration: "15 Days",
    price: 7999,
    originalPrice: 12999,
    rating: 4.5,
    students: 20,
    image: "/courses/options-selling.jpg",
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
    modules: [
      "Basics of Option Selling",
      "Option Greeks",
      "Non-Directional Selling-1",
      "Non-Directional Selling-2",
      "Directional Options Selling-1",
      "Directional Options Selling-2",
      "Expiry Day Best Setup",
      "Positional Strategy-1",
      "Positional Strategy-2"
    ]
  },

  {
    title: "Algo Trading Mastery Program",
    category: "Algo Trading",
    provider: "By TezTraders.in",
    duration: "30 Days",
    price: 11999,
    originalPrice: 19999,
    rating: 4.9,
    students: 15,
    image: "/courses/algo-trading.jpg",
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
        answer:
          "Yes. For buyers: call & put buying techniques, entry & exit timing, premium risk management. For sellers: smart premium-earning methods and advanced setups like iron condors."
      },
      {
        question: "How much time do I need to commit each week?",
        answer:
          "Around 3–4 hours per week including live or recorded sessions, practice, and community participation. Lifetime access allows flexible learning."
      },
      {
        question: "Why is this course rated as one of the best options trading programs?",
        answer:
          "Live trading sessions, personalized feedback, strong trader community, lifetime support, and continuous updates make this program highly rated."
      }
    ],
    modules: [
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
      "Do's & Don'ts of systematic trading"
    ]
  },

  {
    title: "Options Buying SL Hunting Course",
    category: "Options Trading",
    provider: "By TezTraders.in",
    duration: "20 Days",
    price: 4999,
    originalPrice: 7999,
    rating: 4.7,
    students: 50,
    image: "/courses/sl-hunting.jpg",
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
    modules: [
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
