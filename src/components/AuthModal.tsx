import React from 'react';
import { Link } from 'react-router-dom';
import { X, Lock, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, serviceName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Access Required
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          To access <span className="font-semibold text-blue-600">{serviceName}</span>, 
          you need to sign up or log in to your TezTraders Pro account.
        </p>
        
        <div className="space-y-3">
          <Link
            to="/signup"
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
          >
            Sign Up Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          
          <Link
            to="/login"
            onClick={onClose}
            className="w-full bg-white text-gray-700 py-3 px-6 rounded-lg font-semibold border border-gray-300 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Already have an account? Log In
          </Link>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Join thousands of successful traders using TezTraders Pro
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;