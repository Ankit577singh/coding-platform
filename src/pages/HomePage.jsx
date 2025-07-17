import { useEffect } from 'react';
// import { useState } from 'react';

import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiCode, FiTrendingUp } from 'react-icons/fi';

const HomePage = () => {
  const features = [
    {
      icon: <FiCode className="w-8 h-8 text-blue-600" />,
      title: 'Daily Challenges',
      description: 'New coding challenges every day to keep your skills sharp.',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-green-600" />,
      title: 'Interview Prep',
      description: 'Practice with real interview questions from top tech companies.',
      bgColor: 'bg-green-50',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-purple-600" />,
      title: 'Progress Tracking',
      description: 'Detailed analytics to monitor your improvement over time.',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <FiArrowRight className="w-8 h-8 text-orange-600" />,
      title: 'Real-time Coding',
      description: 'Full-featured editor with instant feedback and testing.',
      bgColor: 'bg-orange-50',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Active Coders' },
    { value: '500+', label: 'Coding Problems' },
    { value: '50+', label: 'Company Questions' },
    { value: '24/7', label: 'Support' },
  ];

  const testimonials = [
    {
      quote: "This platform helped me land my dream job at Google!",
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The daily challenges keep my skills sharp between jobs.",
      name: "Michael Chen",
      role: "Senior Developer at Amazon",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Best interview prep resource I've found in 10 years of coding.",
      name: "David Wilson",
      role: "CTO at Startup",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ];

  useEffect(() => {
    // Simple animation trigger
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
              >
                <span className="block">Master Coding Interviews</span>
                <span className="block text-blue-600">With Confidence</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-5 max-w-xl mx-auto text-xl text-gray-600"
              >
                Join thousands of developers preparing for their dream tech jobs.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link
                  to="/problems"
                  className="px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 md:text-lg md:px-10 flex items-center justify-center"
                >
                  Start Practicing Now
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/signup"
                  className="px-8 py-4 border border-blue-600 text-base font-medium rounded-lg shadow-lg text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 md:text-lg md:px-10 flex items-center justify-center"
                >
                  Create Free Account
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://gist.githubusercontent.com/rafaelalmeidatk/1e0d8b8e2d2e3a1e6d6d/raw/7fba6a9d4565e6aa4948b1c0a5a6c0b1b5d5b6b0/pattern.svg')]"></div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Everything You Need to Succeed
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                Our platform provides all the tools to ace your coding interviews.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FeatureCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    bgColor={feature.bgColor}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by Developers Worldwide
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Transform Your Coding Skills?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Join thousands of developers who've accelerated their careers with our platform.
            </p>
            <div className="mt-8">
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-blue-700 bg-white hover:bg-gray-100 transition-all duration-300 md:text-lg md:px-10"
              >
                Get Started for Free
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;