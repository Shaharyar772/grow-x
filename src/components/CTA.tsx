"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple, Play } from 'lucide-react';

export default function CTA() {
  return (
    <section style={{ padding: '100px 20px', textAlign: 'center' }}>
      <div className="glass" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 40px',
        borderRadius: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(0, 255, 163, 0.05) 0%, transparent 50%)',
          zIndex: -1,
        }}></div>
        
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px' }}>
          Ready to Start <span className="gradient-text">Growing</span>?
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '20px', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
          Join thousands of successful investors today. Download the GrowX mobile app and start your journey towards financial freedom.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" style={{ padding: '15px 35px', fontSize: '18px' }}>
            <Play size={24} fill="currentColor" /> Google Play
          </button>
          <button className="glass" style={{
            padding: '15px 35px',
            borderRadius: '50px',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '18px',
          }}>
            <Apple size={24} fill="currentColor" /> App Store
          </button>
        </div>
      </div>
    </section>
  );
}
