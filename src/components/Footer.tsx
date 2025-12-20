import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { FaTelegramPlane } from "react-icons/fa";


const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://TezTraders-pro.onrender.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Successfully subscribed! Check your email for confirmation.');
        setEmail('');
      } else {
        setMessage(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Unable to connect to server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/Deltatrader99", name: "Twitter" },
    // { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <FaTelegramPlane className="h-5 w-5" />, href: "http://www.telegram.me/Thetalovers99", name: "Telegram" },
    // { icon: <Github className="h-5 w-5" />, href: "#", name: "GitHub" },
    // { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" }/
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "notification", href: "/notifications" },
    { name: "Contact", href: "/contact" }
  ];

  // const resources = [
  //   { name: "Documentation", href: "#" },
  //   { name: "Help Center", href: "#" },
  //   { name: "API Reference", href: "#" },
  //   { name: "Community", href: "#" },
  //   { name: "Status", href: "#" }
  // ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TezTraders</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Master the markets with AI-powered algorithmic trading. 
              Join thousands of traders already maximizing their profits with TezTraders Pro.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Thane, Maharashtra, India</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">tejtraders99@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
       <div className="border-t border-gray-800 pt-8 mt-12">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <div>
      <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
      <p className="text-gray-400 text-sm">
        Get the latest updates and insights delivered to your inbox.
      </p>
    </div>

    <form onSubmit={handleSubscribe} className="w-full md:w-auto">
      {/* Wrapper */}
      <div className="relative flex md:static md:flex-row w-full md:w-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full md:w-64 px-4 py-2 pr-28 bg-gray-800 border border-gray-700 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     text-white placeholder-gray-400"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-1 top-1 bottom-1 
                      md:static md:ml-3 md:h-auto
                      bg-gradient-to-r from-blue-600 to-indigo-600 
                      text-white px-4 md:px-6 rounded-md md:rounded-lg 
                      font-medium transition-all duration-200
                      ${
                        isLoading
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:from-blue-700 hover:to-indigo-700'
                      }`}
        >
          {isLoading ? '...' : 'Subscribe'}
        </button>
      </div>
    </form>
  </div>

  {message && (
    <div
      className={`mt-4 p-3 rounded-lg text-sm ${
        message.includes('Successfully')
          ? 'bg-emerald-900 text-emerald-300 border border-emerald-700'
          : 'bg-red-900 text-red-300 border border-red-700'
      }`}
    >
      {message}
    </div>
  )}
</div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TezTraders. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Made with ❤️ in Mumbai</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;