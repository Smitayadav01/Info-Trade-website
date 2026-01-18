import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, BarChart3, Users, CheckCircle, ArrowRight, DollarSign, Target, Award, Clock } from 'lucide-react';

const PMS = () => {
  const portfolioTypes = [
    {
      name: "Conservative Growth",
      risk: "Low Risk",
      returns: "40-45% Annual",
      minInvestment: "₹50 Lakhs",
      description: "Stable growth with capital protection focus",
      features: ["Max risk 0.8%", "Steady returns", "Suitable for low risk investors", "Low volatility"],
      color: "emerald"
    },
    {
      name: "Balanced Portfolio",
      risk: "Medium Risk",
      returns: "60-65% Annual",
      minInvestment: "₹20 Lakhs",
      description: "Perfect balance of growth and stability",
      features: ["Max risk 1.2%", "Higher potential returns", "Suitable for balanced investors", "Mid volatility"],
      color: "blue"
    },
    {
      name: "Aggressive Growth",
      risk: "High Risk",
      returns: "100-110% Annual",
      minInvestment: "₹15 Lakhs",
      description: "Maximum growth potential for risk-tolerant investors",
      features: ["Max risk 1.5-2%", "Highest potential returns", "Suitable for risk-tolerance investors", "High volatility"],
      color: "purple"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Expert Management",
      description: "Professional fund managers with 7+ years of market experience managing your investments."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data-Driven Decisions",
      description: "Advanced analytics and AI-powered insights guide every investment decision for optimal returns."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal-Based Investing",
      description: "Customized portfolios aligned with your financial goals and risk tolerance."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Monitoring",
      description: "Continuous portfolio monitoring and rebalancing to maintain optimal asset allocation."
    }
  ];

  const stats = [
    { number: "₹500Cr+", label: "Assets Under Management" },
    { number: "2,500+", label: "Happy Investors" },
    { number: "22%", label: "Average Annual Returns" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          bg: 'from-emerald-50 to-green-50',
          border: 'border-emerald-200',
          button: 'from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
          text: 'text-emerald-600'
        };
      case 'blue':
        return {
          bg: 'from-blue-50 to-indigo-50',
          border: 'border-blue-200',
          button: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
          text: 'text-blue-600'
        };
      case 'purple':
        return {
          bg: 'from-purple-50 to-pink-50',
          border: 'border-purple-200',
          button: 'from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
          text: 'text-purple-600'
        };
      default:
        return {
          bg: 'from-gray-50 to-gray-100',
          border: 'border-gray-200',
          button: 'from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800',
          text: 'text-gray-600'
        };
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl w-fit mx-auto mb-6 animate-pulse">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Portfolio <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Management</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 animate-slide-up">
              Let our expert fund managers grow your wealth with professionally managed portfolios 
              designed for consistent returns and capital protection.
            </p>
            
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 transform hover:scale-105">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Portfolio Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Choose Your Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Select from our expertly crafted portfolios designed for different risk appetites and investment goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioTypes.map((portfolio, index) => {
              const colors = getColorClasses(portfolio.color);
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border ${colors.border} animate-slide-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{portfolio.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.text} bg-white/80 mb-2`}>
                      {portfolio.risk}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{portfolio.returns}</div>
                    <div className="text-gray-600">Expected Returns</div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-700 text-center mb-4">{portfolio.description}</p>
                    <div className="text-center mb-4">
                      <span className="text-lg font-semibold text-gray-900">Min Investment: {portfolio.minInvestment}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {portfolio.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${colors.text}`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
  to={`/portfolio/${portfolio.name
    .toLowerCase()
    .includes("conservative")
    ? "conservative"
    : portfolio.name.toLowerCase().includes("balanced")
    ? "balanced"
    : "aggressive"}`}
  className={`block text-center w-full bg-gradient-to-r ${colors.button} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
>
  Choose This Portfolio
</Link>

                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mt-14">
              <Link
                to="/contact"
                className="bg-gradient-to-r text-blue px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group border-blue-700"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
            </div>
      </section>
            

      {/* Benefits Section */}
      <section className="py-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-fade-in">
              Why Choose Our PMS?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Experience the difference of professional portfolio management with our proven track record.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed animate-slide-up">
            Join thousands of investors who trust our expert portfolio management to grow their wealth consistently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
            >
              Start Your Investment Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <button className="bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PMS;