import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Video, Users, CheckCircle, ArrowRight, Clock, Award, Star, Play } from 'lucide-react';

const Courses = () => {
  const courses = [

    {
      id: 1,
      title: "Elite Options Selling Program",
      level: "Theta Edge",
      duration: "15 Days",
      price: "₹9,999",
      originalPrice: "₹12,999",
      rating: 4.5,
      students: 20,
      description: "Advanced options strategies for consistent income generation.",
      features: ["Options strategies", "Greeks analysis", "Income generation", "Risk hedging"],
      color: "blue",
      popular: false
    },
    {
      id: 2,
      title: "Algo Trading Mastery Program",
      level: "Theta + Delta Edge",
      duration: "30 Days",
      price: "₹14,999",
      originalPrice: "₹19,999",
      rating: 4.9,
      students: 15,
      description: "Build and deploy your own algorithmic trading systems.",
      features: ["Strategy Devlopment", "Back-Testing", "Risk management", "Live trading sessions"],
      color: "emerald",
      popular: true
    },
    {
      id: 3,
      title: "Options Buying-SL Hunting Mastery Course ",
      level: "Delta Edge",
      duration: "20 Days",
      price: "₹4,999",
      originalPrice: "₹7,999",
      rating: 4.7,
      students: 50,
      description: "Learn the art of institutional level buying system",
      features: ["Intro to options buying", "Price action mastery", "Entry modules", "Hero zero modules"],
      color: "purple",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "HD Video Lessons",
      description: "High-quality video content with practical examples and real market scenarios."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from professional traders with 15+ years of market experience."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Materials",
      description: "Detailed course materials, PDFs, and trading templates included."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certification",
      description: "Get certified upon completion and showcase your trading expertise."
    }
  ];

  const stats = [
    { number: "1000+", label: "Students Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Community Support" },
    { number: "Lifetime", label: "Course Access" },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          bg: 'from-emerald-50 to-green-50',
          border: 'border-emerald-200',
          button: 'from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700',
          text: 'text-emerald-600',
          badge: 'bg-emerald-100 text-emerald-800'
        };
      case 'blue':
        return {
          bg: 'from-blue-50 to-indigo-50',
          border: 'border-blue-200',
          button: 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
          text: 'text-blue-600',
          badge: 'bg-blue-100 text-blue-800'
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
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-3 rounded-xl w-fit mx-auto mb-6 animate-pulse">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Trading <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 animate-slide-up">
              Master the art of trading with our comprehensive courses designed by expert traders. 
              From basics to advanced strategies, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              
              <Link
                to="/contact"
                className="bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-300 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xxl"
              >
                
                <span className="flex items-center text-xl mt-1 border-black">
                  Get Course Consultants
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section className="py-12 sm:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center group animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 sm:p-8 transition-all duration-300 transform hover:scale-105">
            
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {stat.number}
            </div>
            
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Choose from our expertly designed courses that have helped thousands of traders succeed in the markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const colors = getColorClasses(course.color);
              return (
                <div 
                  key={course.id} 
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border ${colors.border} animate-slide-up relative`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {course.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.badge}`}>
                        {course.level}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{course.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${colors.text}`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                  </div>
                  <Link
  to={`/courses/${course.id}`}
  className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg flex items-center justify-center`}
>
  Get Started
  <ArrowRight className="ml-2 h-5 w-5" />
</Link>

                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Experience world-class trading education with our comprehensive learning platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 group-hover:from-emerald-100 group-hover:to-green-100 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Get One-on-One Interactions with the founder
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed animate-slide-up">
            Join thousands of successful traders who learned with our expert-designed courses. 
            Your trading success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
           
            <Link
              to="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;