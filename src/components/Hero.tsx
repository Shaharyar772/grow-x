"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      padding: '160px 0 80px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '40px',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          background: 'rgba(0, 255, 163, 0.1)',
          border: '1px solid rgba(0, 255, 163, 0.2)',
          color: 'var(--primary)',
          fontSize: '14px',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <TrendingUp size={16} /> New: Get 10% monthly returns guaranteed
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontSize: 'clamp(40px, 8vw, 84px)',
          fontWeight: 800,
          lineHeight: 1.1,
          maxWidth: '900px',
          letterSpacing: '-2px',
        }}
      >
        Grow Your Wealth <br /> with <span className="gradient-text">GrowX</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontSize: '20px',
          color: 'var(--text-muted)',
          maxWidth: '600px',
          lineHeight: 1.6,
        }}
      >
        Join 50,000+ investors using GrowX to multiply their savings with secure, automated investment strategies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ display: 'flex', gap: '15px' }}
      >
        <button className="btn-primary" style={{ padding: '15px 35px', fontSize: '18px' }}>
          Download App <Download size={20} />
        </button>
        <button className="glass" style={{
          padding: '15px 35px',
          borderRadius: '50px',
          color: '#fff',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '18px',
        }}>
          Learn More <ChevronRight size={20} />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          marginTop: '60px',
          width: '100%',
          maxWidth: '1000px',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle, rgba(0, 255, 163, 0.1) 0%, transparent 70%)',
          zIndex: -1,
        }}></div>
        <img 
          src="/hero-mockup.png" 
          alt="GrowX App" 
          style={{ width: '100%', height: 'auto', borderRadius: '24px', animation: 'float 6s infinite ease-in-out' }}
        />
      </motion.div>
    </section>
  );
}
