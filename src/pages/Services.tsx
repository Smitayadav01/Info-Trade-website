import React from 'react';
import { TrendingUp, BarChart3, Zap, Shield, Target, Brain, Clock, DollarSign, LineChart, Activity, Cpu, AlertTriangle } from 'lucide-react';

const Services = () => {
  const tradingServices = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Algo Trading",
      description: "Advanced machine learning algorithms that analyze market patterns and execute trades automatically with 95% accuracy.",
      features: ["Real-time market analysis", "Risk management", "Backtesting tools", "Custom strategies"],
      price: "₹2,999/month"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Options Trading Strategies",
      description: "Sophisticated options trading algorithms including spreads, straddles, and volatility-based strategies.",
      features: ["Greeks analysis", "Volatility tracking", "Profit/Loss optimization", "Automated execution"],
      price: "₹4,999/month"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Market Analytics Suite",
      description: "Comprehensive market analysis tools with real-time data, technical indicators, and predictive modeling.",
      features: ["Live market data", "Technical indicators", "Pattern recognition", "Custom alerts"],
      price: "₹1,999/month"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High-Frequency Trading",
      description: "Ultra-fast execution algorithms designed for scalping and arbitrage opportunities in the market.",
      features: ["Microsecond execution", "Arbitrage detection", "Latency optimization", "Multi-exchange support"],
      price: "₹9,999/month"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Management",
      description: "Advanced risk controls and position sizing algorithms to protect your capital."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock market monitoring and automated trade execution."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Trading",
      description: "Highly accurate entry and exit points based on technical and fundamental analysis."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Live performance tracking and detailed analytics for all your trading strategies."
    }
  ];

  const stats = [
    { number: "95%", label: "Success Rate" },
    { number: "₹50L+", label: "Daily Volume" },
    { number: "0.2ms", label: "Avg Latency" },
    { number: "24/7", label: "Uptime" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl w-fit mx-auto mb-6">
              <LineChart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Trading <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced algorithmic trading solutions powered by AI and machine learning. 
              Maximize your returns with our proven trading strategies and risk management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Trading Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of algorithmic trading services designed for different trading styles and risk profiles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradingServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by traders, for traders. Our platform combines cutting-edge technology with proven trading strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Risk Warning */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4 bg-white rounded-2xl p-8 border border-amber-200">
            <div className="bg-amber-100 p-3 rounded-xl flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Disclosure</h3>
              <p className="text-gray-700 leading-relaxed">
                Trading in financial markets involves substantial risk and may not be suitable for all investors. 
                Past performance is not indicative of future results. Please ensure you understand the risks involved 
                and seek independent financial advice if necessary. Our algorithms are designed to minimize risk but 
                cannot guarantee profits or prevent losses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of successful traders using our algorithmic trading platform. 
            Start with our free trial and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;