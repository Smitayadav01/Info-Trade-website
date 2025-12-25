import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Target, BarChart3, TrendingUp, CheckCircle, LineChart, Activity, DollarSign } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const words = [
    "AI Trading",
  "Specialized Courses",
  "Pre-built Trading Systems",
  "Expert PMS Services"
];

const [currentWord, setCurrentWord] = React.useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentWord((prev) => (prev + 1) % words.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Trading",
      description: "Advanced machine learning algorithms analyze market patterns and execute trades with 95% accuracy."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Sophisticated risk controls and position sizing algorithms protect your capital in volatile markets."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Execution",
      description: "Ultra-fast order execution with microsecond latency for optimal entry and exit points."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Comprehensive market analysis with live data feeds and advanced technical indicators."
    }
  ];

  // const stats = [
  //   { number: "95%", label: "Success Rate" },
  //   { number: "₹50L+", label: "Daily Volume" },
  //   { number: "0.2ms", label: "Avg Latency" },
  //   { number: "24/7", label: "Market Coverage" }
  // ];

  const benefits = [
    "Expert PMS services",
    "Real-time market data and analysis", 
    "Multi diversified systems",
    "Automated risk management",
    "Varied Courses",
    "Personal mentorship"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
  Master the Markets with
  <span
    key={currentWord}
    className="block
    mt-2
    text-6xl
    leading-[1.3]
    bg-gradient-to-r from-blue-600 to-purple-600
    bg-clip-text text-transparent
    transition-all duration-700 ease-in-out
    animate-slide
    will-change-transform"
  >
    {words[currentWord]}
  </span>
</h1>

            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Empowering your wealth with data-driven precision. From expert PMS and personalized guidance to cutting-edge Algo systems and trading education, TezTraders is your partner in financial growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {!isAuthenticated && (
                <Link
  to="/signup"
  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-2 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex flex-col items-center group"
>
  <span>Login / Sign-up</span>

  <span className="flex items-center text-sm font-normal opacity-90 mt-1">
    (Get full access)
    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
  </span>
</Link>

              )}
              {/* <Link
                to="/contact"
                className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-300 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* What Are You Looking For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Are You Looking For?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from expert portfolio management, easy-to-learn trading courses, or powerful 
              subscription-based algo systems — everything you need to trade smarter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio Management */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:from-blue-100 hover:to-indigo-100 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Management</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Smart, expert-managed portfolios designed to grow your wealth with minimal risk.
              </p>
              <Link
                to="/pms"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Courses */}
            <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:from-emerald-100 hover:to-green-100 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-emerald-100">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Courses</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Learn trading and investing with easy, practical courses for all skill levels.
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Subscription-Based Algo System */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:from-purple-100 hover:to-pink-100 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-purple-100">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscription-Based Algo System</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Automate your trades with powerful, ready-to-use algorithmic strategies.
              </p>
              <Link
                to="/subscription"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose TezTraders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advanced features that make us the preferred choice for algorithmic traders worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything You Need to 
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Trade Profitably</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our comprehensive trading platform provides all the programs and services you need to execute 
                profitable trades, manage risk effectively, and achieve consistent returns in the markets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-emerald-500 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              {/* <Link
                to="/signup"
                className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link> */}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full opacity-20"></div>
                <div className="relative z-10">
                  <LineChart className="h-16 w-16 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Performance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Join community of successful traders who have achieved consistent profits using our 
                    AI-powered algorithms and advanced risk management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of traders already using TezTraders to maximize their profits. 
              Start your free trial today and experience the power of AI trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link> */}
              <Link
                to="/contact"
                className="bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;