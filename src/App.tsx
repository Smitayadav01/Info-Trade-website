import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notifications from "./pages/Notifications";
import PMS from "./pages/PMS";
import Courses from "./pages/Courses"; // USER courses
import CourseDetail from "./pages/CourseDetail";
import Subscription from "./pages/Subscription";
import PortfolioDetails from "./pages/PortfolioDetails";
import PaymentSuccess from "./pages/PaymentSuccess";

// Legal
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

// Admin
import AdminRoute from "./routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourses from "./pages/admin/Courses";
import CourseForm from "./pages/admin/CourseForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Toaster position="top-right" />

        <div className="min-h-screen bg-white">
          <Navbar />

          <main>
            <Routes>
              {/* PUBLIC ROUTES */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/pms" element={<PMS />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/subscription" element={<Subscription />} />

              {/* LEGAL */}
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />

              {/* OTHER */}
              <Route path="/portfolio/:type" element={<PortfolioDetails />} />
              <Route
                path="/payment-success-9fA7xQ2LmP81ZkR4T6WcA2025"
                element={<PaymentSuccess />}
              />

              {/* ADMIN ROUTES */}
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/courses"
                element={
                  <AdminRoute>
                    <AdminCourses />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/courses/new"
                element={
                  <AdminRoute>
                    <CourseForm />
                  </AdminRoute>
                }
              />

              <Route
                path="/admin/courses/edit/:id"
                element={
                  <AdminRoute>
                    <CourseForm />
                  </AdminRoute>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
