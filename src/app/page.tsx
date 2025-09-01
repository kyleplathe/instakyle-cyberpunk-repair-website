'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Watch, 
  Gamepad2, 
  Bitcoin, 
  Zap, 
  Shield, 
  Users,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

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
            <ArrowRight className="w-5 h-5" />
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
                <Shield className="w-16 h-16 text-neon-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 neon-text neon-blue">Ethical Capitalism</h3>
                <p className="text-gray-300">Small batch inventory, debt-free growth, and a Bitcoin strategic reserve for financial sovereignty.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-neon-green/30"
              >
                <Zap className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 neon-text neon-green">Reduce eWaste</h3>
                <p className="text-gray-300">Conserving precious earth minerals by extending device lifespans through expert repair.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-neon-pink/30"
              >
                <Users className="w-16 h-16 text-neon-pink mx-auto mb-4" />
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
                <Smartphone className="w-16 h-16 text-neon-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Phones</h3>
                <p className="text-gray-400">Screen, battery, and component repairs</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-green/30 text-center"
              >
                <Tablet className="w-16 h-16 text-neon-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Tablets</h3>
                <p className="text-gray-400">Display and hardware repairs</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-pink/30 text-center"
              >
                <Watch className="w-16 h-16 text-neon-pink mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Watches</h3>
                <p className="text-gray-400">Smartwatch and fitness tracker repairs</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-neon-purple/30 text-center"
              >
                <Gamepad2 className="w-16 h-16 text-neon-purple mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Gaming</h3>
                <p className="text-gray-400">Console and controller repairs</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline */}
      <section id="story" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text neon-pink">
              Our Evolution
            </h2>
            <div className="space-y-8 mt-12">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/3 text-right">
                  <h3 className="text-2xl font-bold neon-text neon-blue">2016 - The Beginning</h3>
                  <p className="text-gray-300">Instakyle iPhone Repair founded by Kyle Plathe, a Minnesota native who loves tech.</p>
                </div>
                <div className="w-4 h-4 bg-neon-blue rounded-full"></div>
                <div className="md:w-1/3 text-left">
                  <p className="text-gray-400">Using the internet as his classroom, Kyle dove into the repair world, connecting with peers and mentors across the U.S. and beyond.</p>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/3 text-right">
                  <p className="text-gray-400">Operating as a fully cloud-based service made growth efficient, but something was missing—real community connection.</p>
                </div>
                <div className="w-4 h-4 bg-neon-green rounded-full"></div>
                <div className="md:w-1/3 text-left">
                  <h3 className="text-2xl font-bold neon-text neon-green">2017 - Cloud Hustle</h3>
                  <p className="text-gray-300">Kyle realized online presence alone wasn&apos;t enough to complete the customer relationship loop.</p>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/3 text-right">
                  <h3 className="text-2xl font-bold neon-text neon-pink">2018 - California Reset</h3>
                  <p className="text-gray-300">Mobile street vending repairs via electric bike, tall flag, and backpack of tools.</p>
                </div>
                <div className="w-4 h-4 bg-neon-pink rounded-full"></div>
                <div className="md:w-1/3 text-left">
                  <p className="text-gray-400">First bike deployment on July 21, 2018 at the Southpark Summer Walkabout. Later moved into Ocean Beach office.</p>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/3 text-right">
                  <p className="text-gray-400">Building on momentum, Kyle began doing live repairs and accessory sales at local farmer&apos;s markets.</p>
                </div>
                <div className="w-4 h-4 bg-neon-purple rounded-full"></div>
                <div className="md:w-1/3 text-left">
                  <h3 className="text-2xl font-bold neon-text neon-purple">2019 - Bitcoin &amp; Markets</h3>
                  <p className="text-gray-300">On June 21, 2019, Instakyle accepted its first Bitcoin payment—years before it was cool.</p>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/3 text-right">
                  <h3 className="text-2xl font-bold neon-text neon-blue">2025 - Relaunch &amp; Level-Up</h3>
                  <p className="text-gray-300">Armed with new micro-soldering skills and focus on gaming console repairs.</p>
                </div>
                <div className="w-4 h-4 bg-neon-blue rounded-full"></div>
                <div className="md:w-1/3 text-left">
                  <p className="text-gray-400">The brand is now sharper, geekier, and more mission-driven than ever.</p>
                </div>
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
            <Bitcoin className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
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
          <MessageCircle className="w-6 h-6" />
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
