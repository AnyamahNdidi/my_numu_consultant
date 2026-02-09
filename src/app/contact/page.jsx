'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    services: [],
    message: '',
    hearAbout: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const firstInputRef = useRef(null);

  const serviceOptions = [
    'Product & Narrative Strategy',
    'Go-to-Market Strategy',
    'Storytelling',
    'Other'
  ];

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return ''; // Phone is optional
    const re = /^[\d\s\-\+\(\)]+$/;
    return phone.length >= 10 && re.test(phone) ? '' : 'Please enter a valid phone number';
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim() === '' ? 'Full name is required' : '';
      case 'email':
        if (value.trim() === '') return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        return validatePhone(value); // Phone is optional, only validate if provided
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleServiceToggle = (service) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];

    setFormData({
      ...formData,
      services: newServices
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched to show errors
    const newTouched = {
      fullName: true,
      email: true,
      phone: true,
      services: true,
      message: true,
      hearAbout: true
    };
    
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone) // This will be empty string if phone is empty
    };

    setTouched(newTouched);
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) return;

    setIsSubmitting(true);
    setSubmitStatus('submitting');

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate random success/failure for demo
          const isSuccess = Math.random() > 0.2; // 80% success rate for demo
          if (isSuccess) {
            console.log('Form submitted:', formData);
            resolve();
          } else {
            reject(new Error('Failed to submit form. Please try again.'));
          }
        }, 1500);
      });

      setSubmitStatus('success');
      // Reset form on successful submission
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        services: [],
        message: '',
        hearAbout: ''
      });
      setTouched({});
      setErrors({});
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus(error.message || 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Side */}
            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Let&apos;s shape your<br />
                <span className="text-[#00FF94] text-5xl">Story together.</span>
              </h1>

              <div className="space-y-6 text-[#B0B0B0] text-lg leading-relaxed">
                <p>
                  We&apos;d love to hear from you. Please fill in your details below and we&apos;ll get back to you 
                  quickly, usually within 24 hours.
                </p>

                <p>
                  Thank you for considering us. We respect your privacy and assure you that all information 
                  provided will be kept confidential.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-[#B0B0B0]">
                    Full Name*
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#1A1A1A] border ${errors.fullName && touched.fullName ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF94] transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#B0B0B0]">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#1A1A1A] border ${errors.email && touched.email ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF94] transition-colors`}
                    placeholder="you@company.com"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                {/* Phone Number - Optional */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-[#B0B0B0]">
                    Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-[#1A1A1A] border ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-700'} rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF94] transition-colors`}
                    placeholder="+1 (555) 123-4567"
                  />
                  <p className="text-xs text-gray-500 mt-1">For faster response times</p>
                  {errors.phone && touched.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[#B0B0B0]">
                    What service are you looking for?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-4 py-3 rounded border-2 transition-all text-left ${
                          formData.services.includes(service)
                            ? 'border-[#00FF94] bg-[#00FF94]/10 text-white'
                            : 'border-gray-700 bg-[#1A1A1A] text-[#B0B0B0] hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{service}</span>
                          {formData.services.includes(service) && (
                            <span className="text-[#00FF94]">✓</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#B0B0B0]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF94] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* How did you hear about us */}
                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-semibold mb-2 text-[#B0B0B0]">
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full bg-[#1A1A1A] border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF94] transition-colors"
                    placeholder="LinkedIn, Google, Referral, etc."
                  />
                </div>

                {/* Status */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500 rounded p-4 text-green-500">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500 rounded p-4 text-red-500">
                    Oops! Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                {/* Submit */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-[#00FF94] hover:bg-[#00D17A] text-[#0A0A0A] font-bold py-4 px-8 rounded-lg text-lg transition-colors ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
