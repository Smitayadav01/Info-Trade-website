import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, BarChart3 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isLoading, setIsLoading] = useState(false);

  // Toast state
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000); // hide after 3 seconds
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.number || !formData.subject || !formData.message) {
      showToast('error', 'Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://algotrade-pro.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();

      showToast('success', data.message || 'Message sent successfully!');

      // Reset form
      setFormData({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });

    } catch (error) {
      console.error(error);
      showToast('error', 'Server is unreachable. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, title: "Email Us", details: "tejtraders99@gmail.com", description: "Send us an email anytime" },
    { icon: <Phone className="h-6 w-6" />, title: "WhatsApp Us", details: "+91 9453980510", description: "Mon-Fri from 9am to 3pm" },
    { icon: <MapPin className="h-6 w-6" />, title: "Visit Us", details: "Mumbai, Maharashtra", description: "400001, India" },
    { icon: <Clock className="h-6 w-6" />, title: "Business Hours", details: "9:00 AM - 6:00 PM", description: "Monday to Friday" }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'demo', label: 'Personal Consultation' },
    { value: 'trading', label: 'Portfolio Management Services' },
    { value: 'support', label: 'Courses/Learnings' },
    { value: 'algorithms', label: 'Subscription Based Algo' },
  ];

  return (
    <div className="bg-white relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl w-fit mx-auto mb-6">
            <Send className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your algorithmic trading journey? Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center border border-gray-100">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-3 w-fit mx-auto mb-4">{info.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-blue-600 font-medium mb-1">{info.details}</p>
              <p className="text-gray-500 text-sm">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2"> Full Name * </label>
                <input name="name" value={formData.name} onChange={handleChange}  className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address * </label>
                <input name="email" value={formData.email} onChange={handleChange}  className="w-full p-3 border rounded-lg" />
                </div>
              </div>
              {/* Number & Inquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div> <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"> Mobile No * </label>
                <input name="number" value={formData.number} onChange={handleChange}  className="w-full p-3 border rounded-lg" />
                </div>
                <div> <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2"> Inquiry Type </label>
                <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full p-3 border rounded-lg">
                  {inquiryTypes.map(type => <option key={type.value} value={type.value}>{type.label}</option>)}
                </select>
                </div>
              </div>
              {/* Subject & Message */}
              <div> <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2"> Subject * </label>
              <input name="subject" value={formData.subject} onChange={handleChange}  className="w-full p-3 border rounded-lg" />
              </div>
              <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message * </label>
              <textarea name="message" value={formData.message} onChange={handleChange}  rows={6} className="w-full p-3 border rounded-lg"></textarea>
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center">
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Side - Additional Info */}
          <div className="space-y-8">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-emerald-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Why Choose TezTraders?</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  95% success rate algorithms
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Real-time risk management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  Custom trading strategies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  24/7 market monitoring
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Popup */}
      {toast && (
        <div className={`fixed bottom-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white transition-all duration-300 z-50
          ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};
    
export default Contact;
