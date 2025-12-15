import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, BarChart3, TrendingUp, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Brain } from 'lucide-react';

const Subscription = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for beginners starting their algo trading journey",
      features: [
        "2 Basic Algorithms",
        "Daily market signals",
        "Email support",
        "Basic risk management",
        "Mobile app access"
      ],
      color: "blue",
      popular: false,
      savings: null
    },
    {
      name: "Professional",
      price: "₹7,999",
      period: "/month",
      description: "Advanced algorithms for serious traders",
      features: [
        "10+ Premium Algorithms",
        "Real-time signals",
        "Priority support",
        "Advanced risk controls",
        "Custom strategy builder",
        "Backtesting tools",
        "API access"
      ],
      color: "emerald",
      popular: true,
      savings: "Save 30%"
    },
    {
      name: "Enterprise",
      price: "₹19,999",
      period: "/month",
      description: "Complete algorithmic trading solution for institutions",
      features: [
        "Unlimited Algorithms",
        "Custom algorithm development",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced analytics",
        "Multi-exchange support",
        "24/7 phone support",
        "Custom integrations"
      ],
      color: "purple",
      popular: false,
      savings: "Best Value"
    }
  ];

  const algorithms = [
    {
      name: "Momentum Scalper",
      description: "High-frequency trading algorithm for quick profits",
      returns: "+18% Monthly",
      risk: "Medium",
      icon: <Zap className="h-6 w-6" />
    },
    {
      name: "Options Income",
      description: "Generate consistent income through options strategies",
      returns: "+12% Monthly",
      risk: "Low",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      name: "Trend Following",
      description: "Capture major market trends with AI-powered signals",
      returns: "+25% Monthly",
      risk: "High",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      name: "Mean Reversion",
      description: "Profit from market corrections and reversals",
      returns: "+15% Monthly",
      risk: "Medium",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Algorithms",
      description: "Machine learning algorithms that adapt to market conditions automatically."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk Management",
      description: "Built-in risk controls and position sizing to protect your capital."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Trading",
      description: "Algorithms work round the clock, never missing trading opportunities."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Comprehensive performance tracking and detailed analytics dashboard."
    }
  ];

  const stats = [
    { number: "95%", label: "Success Rate" },
    { number: "₹100Cr+", label: "Trades Executed" },
    { number: "5,000+", label: "Active Subscribers" },
    { number: "24/7", label: "Market Coverage" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-50 to-indigo-50',
          border: 'border-blue-200',
          button: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
          text: 'text-blue-600',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'emerald':
        return {
          bg: 'from-emerald-50 to-green-50',
          border: 'border-emerald-200',
          button: 'from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
          text: 'text-emerald-600',
          badge: 'bg-emerald-100 text-emerald-800'
        };
      case 'purple':
        return {
          bg: 'from-purple-50 to-pink-50',
          border: 'border-purple-200',
          button: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
          text: 'text-purple-600',
          badge: 'bg-purple-100 text-purple-800'
        };
      default:
        return {
          bg: 'from-gray-50 to-gray-100',
          border: 'border-gray-200',
          button: 'from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800',
          text: 'text-gray-600',
          badge: 'bg-gray-100 text-gray-800'
        };
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl w-fit mx-auto mb-6 animate-pulse">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Algo Trading <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Subscription</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 animate-slide-up">
              Automate your trading with our powerful, ready-to-use algorithmic strategies. 
              Let AI handle your trades while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-300 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Live Performance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Trading Algorithms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Choose from our proven algorithmic strategies designed for different market conditions and risk profiles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {algorithms.map((algo, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {algo.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{algo.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{algo.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-emerald-600">{algo.returns}</div>
                    <div className="text-xs text-gray-500">Expected Returns</div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    algo.risk === 'Low' ? 'bg-emerald-100 text-emerald-800' :
                    algo.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {algo.risk} Risk
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Select the perfect subscription plan that matches your trading goals and experience level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const colors = getColorClasses(plan.color);
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border ${colors.border} animate-slide-up relative`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {plan.savings && (
                    <div className="absolute -top-3 right-4">
                      <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-bold`}>
                        {plan.savings}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg flex items-center justify-center`}>
                    Choose {plan.name}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Experience the power of automated trading with our advanced algorithmic platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-white rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Automate Your Trading?
          </h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed animate-slide-up">
            Join thousands of traders who have automated their success with our algorithmic trading platform. 
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group">
              Start 14-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <Link
              to="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;