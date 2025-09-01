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
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-6xl font-bold text-blue-400 mb-8">
        INSTAKYLE
      </h1>
      
      <h2 className="text-4xl font-bold text-pink-400 mb-6">
        FIGHT eWASTE
      </h2>
      
      <p className="text-xl text-gray-300 mb-8 max-w-3xl">
        Empowering communities through ethical technology repair, education, and sustainable practices.
        Join the resistance against planned obsolescence.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-900 p-6 rounded-lg border border-blue-400">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Ethical Capitalism</h3>
          <p className="text-gray-300">Small batch inventory, debt-free growth, and a Bitcoin strategic reserve.</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-green-400">
          <h3 className="text-2xl font-bold text-green-400 mb-4">Reduce eWaste</h3>
          <p className="text-gray-300">Conserving precious earth minerals through expert repair.</p>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-pink-400">
          <h3 className="text-2xl font-bold text-pink-400 mb-4">Empower Communities</h3>
          <p className="text-gray-300">Technology education and access for all.</p>
        </div>
      </div>
      
      <div className="text-center">
        <button className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-300 transition-colors">
          Start Your Repair
        </button>
      </div>
      
      <div className="mt-12 text-center text-gray-400">
        <p>Fighting e-waste, one repair at a time</p>
      </div>
    </div>
  );
}
