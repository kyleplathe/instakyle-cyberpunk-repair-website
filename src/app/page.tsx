'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [showGlitch, setShowGlitch] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowGlitch(true);
      setTimeout(() => setShowGlitch(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Scan Line Effect */}
      <div className="scanline"></div>
      
      {/* Circuit Board Background */}
      <div className="circuit-bg absolute inset-0 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold neon-text neon-blue"
          >
            INSTAKYLE
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-neon-green transition-colors">Services</a>
            <a href="#story" className="text-white hover:text-neon-green transition-colors">Story</a>
            <a href="#mission" className="text-white hover:text-neon-green transition-colors">Mission</a>
            <a href="#contact" className="text-white hover:text-neon-green transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 neon-text ${showGlitch ? 'glitch' : ''}`}>
            <span className="neon-blue">FIGHT</span>
            <span className="neon-pink"> eWASTE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering communities through ethical technology repair, education, and sustainable practices.
            Join the resistance against planned obsolescence.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-neon-green text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors cursor-pointer"
          >
            <span>Start Your Repair</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text neon-purple">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-neon-blue/30"
              >
                <div className="w-16 h-16 bg-neon-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 neon-text neon-blue">Ethical Capitalism</h3>
                <p className="text-gray-300">Small batch inventory, debt-free growth, and a Bitcoin strategic reserve for financial sovereignty.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-neon-green/30"
              >
                <div className="w-16 h-16 bg-neon-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 neon-text neon-green">Reduce eWaste</h3>
                <p className="text-gray-300">Conserving precious earth minerals by extending device lifespans through expert repair.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-neon-pink/30"
              >
                <div className="w-16 h-16 bg-neon-pink rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 neon-text neon-pink">Empower Communities</h3>
                <p className="text-gray-300">Technology education and access for all, building resilient local economies.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text neon-blue">
              Repair Services
            </h2>
            <p className="text-xl text-gray-300 mb-12">Expert repairs for all your digital devices</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/30 text-center"
              >
                <div className="w-16 h-16 bg-neon-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Phones</h3>
                <p className="text-gray-400">Screen, battery, and component repairs</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-green/30 text-center"
              >
                <div className="w-16 h-16 bg-neon-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Tablets</h3>
                <p className="text-gray-400">Display and hardware repairs</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-pink/30 text-center"
              >
                <div className="w-16 h-16 bg-neon-pink rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Watches</h3>
                <p className="text-gray-400">Smartwatch and fitness tracker repairs</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-purple/30 text-center"
              >
                <div className="w-16 h-16 bg-neon-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Gaming</h3>
                <p className="text-gray-400">Console and controller repairs</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bitcoin Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text text-yellow-400">
              Bitcoin Accepted
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Supporting financial sovereignty and sound money practices since 2019
            </p>
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-400/30">
              <p className="text-lg text-gray-300">
                &ldquo;We believe in the future of decentralized finance and building wealth outside the traditional banking system. 
                Bitcoin represents freedom, transparency, and a hedge against inflation.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text neon-green">
              Join the Resistance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to fight e-waste and empower your community? Let&apos;s connect.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-neon-blue/30"
              >
                <h3 className="text-2xl font-bold mb-4 neon-text neon-blue">Get a Quote</h3>
                <p className="text-gray-300 mb-4">Professional repair estimates for all devices</p>
                <button className="bg-neon-blue text-black px-6 py-3 rounded-lg font-bold hover:bg-blue-400 transition-colors">
                  Start Repair
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-neon-green/30"
              >
                <h3 className="text-2xl font-bold mb-4 neon-text neon-green">Shop Accessories</h3>
                <p className="text-gray-300 mb-4">Quality accessories and refurbished devices</p>
                <button className="bg-neon-green text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors">
                  Visit Shop
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Glitch Chat Widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowChat(!showChat)}
          className="bg-neon-pink text-black p-4 rounded-full shadow-lg hover:bg-pink-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </motion.button>
        
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 right-0 w-80 bg-gray-900 border border-neon-pink rounded-lg shadow-xl"
          >
            <div className="p-4 border-b border-neon-pink/30">
              <h3 className="text-lg font-bold neon-text neon-pink">Glitch AI Assistant</h3>
              <p className="text-sm text-gray-400">Your personal repair guide</p>
            </div>
            <div className="p-4">
              <div className="bg-gray-800 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-300">Hey there, tech warrior! I&apos;m Glitch, your AI repair assistant. How can I help you today?</p>
              </div>
              <input
                type="text"
                placeholder="Ask about repairs, services..."
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-neon-pink"
              />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold neon-text neon-blue mb-4">INSTAKYLE</div>
          <p className="text-gray-400 mb-6">
            Fighting e-waste, one repair at a time
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-neon-blue transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-green transition-colors">Terms</a>
            <a href="#" className="hover:text-neon-pink transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
