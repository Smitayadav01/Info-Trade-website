import React from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle, Brain, Shield, Globe, Heart, BarChart3, LineChart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Innovation",
      description: "We constantly push boundaries in artificial intelligence to deliver cutting-edge trading algorithms that outperform traditional methods."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trader Success",
      description: "Your trading success is our success. We're committed to providing exceptional support and building lasting partnerships with our traders."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Trust",
      description: "We maintain the highest standards of security and transparency in all trading operations and fund management."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Market Excellence",
      description: "From Mumbai to global markets, we're building trading solutions that deliver consistent profits across all market conditions."
    }
  ];

  const team = [
    {
      name: "Tejas Yadav",
      role: "CEO & Founder",
      description: "4+ years in Financial  Market & algorithmic trading",
      image: "https://thumbs.dreamstime.com/b/businessman-profile-icon-male-portrait-flat-design-vector-illustration-47075259.jpg"
    },
    // {
    //   name: "Priya Agarwal",
    //   role: "Head of Quantitative Research",
    //   description: "PhD in Financial Mathematics, expert in options pricing and risk modeling.",
    //   image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    // },
    // {
    //   name: "Gautam Mehta",
    //   role: "Head of Technology",
    //   description: "Former Microsoft engineer specializing in high-frequency trading systems.",
    //   image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    // },
    // {
    //   name: "Kavya Nair",
    //   role: "Head of Risk Management",
    //   description: "CFA charterholder with expertise in portfolio risk and derivatives trading.",
    //   image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400"
    // }
  ];

  const stats = [
    { number: "2018", label: "Founded" },
    { number: "5,000+", label: "Active Traders" },
    { number: "₹500Cr+", label: "Assets Under Management" },
    { number: "95%", label: "Success Rate" }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to democratize algorithmic trading for retail investors."
    },
    {
      year: "2019",
      title: "First 1,000 Traders",
      description: "Reached our first major milestone with rapid trader adoption and consistent profits."
    },
    {
      year: "2021",
      title: "AI Algorithm Launch",
      description: "Launched our proprietary AI trading algorithms with 95% success rate."
    },
    {
      year: "2023",
      title: "Options Trading Suite",
      description: "Introduced advanced options trading strategies and risk management tools."
    },
    {
      year: "2024",
      title: "₹500Cr+ AUM",
      description: "Crossed ₹500 crores in assets under management with consistent performance."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl w-fit mx-auto mb-6">
              <LineChart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">TezTraders</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize algorithmic trading by providing retail investors with 
              institutional-grade trading algorithms and risk management systems.
            </p>
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
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{}</div>
                  <div className="text-gray-600 font-medium">{}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in the heart of Mumbai's financial district, TezTraders began with a simple yet powerful vision: 
                  to democratize access to institutional-grade algorithmic trading for retail investors and traders.
                </p>
                <p>
                  {/* What started as a small team of quantitative analysts and technologists has grown into India's leading 
                  algorithmic trading platform serving over 5,000 active traders.  */}
                  Our journey has been driven by an 
                  unwavering commitment to innovation, trader success, and the belief that advanced trading technology 
                  should be accessible to everyone.
                </p>
                <p>
                  Today, we continue to push the boundaries of algorithmic trading, integrating cutting-edge 
                  artificial intelligence and machine learning to help our traders achieve consistent profits in 
                  volatile market conditions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full opacity-20"></div>
                <img 
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Trading floor" 
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind TezTraders success and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 text-center">{member.role}</p>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 p-3 rounded-xl w-fit mx-auto mb-6">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            To democratize algorithmic trading by providing retail investors with institutional-grade 
            trading algorithms, advanced risk management systems, and comprehensive market analytics. 
            We believe in making sophisticated trading technology accessible to everyone, fostering a more 
            profitable and efficient trading ecosystem for individual investors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;