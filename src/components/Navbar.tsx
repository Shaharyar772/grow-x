"use client";
import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '15px 30px',
      borderRadius: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-1px' }}>
        Grow<span className="gradient-text">X</span>
      </div>
      
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <a href="#features" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-muted)' }}>Features</a>
        <a href="#how-it-works" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-muted)' }}>How it Works</a>
        <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
          Download <Download size={16} />
        </button>
      </div>
    </nav>
  );
}
