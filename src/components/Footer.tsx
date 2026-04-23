"use client";
import React from 'react';
import { Twitter, Instagram, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      padding: '80px 20px 40px 20px',
      borderTop: '1px solid var(--glass-border)',
      marginTop: '100px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '60px',
      }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>
            Grow<span className="gradient-text">X</span>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Empowering the next generation of investors with smart, automated wealth management tools.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Platform</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>How it Works</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Benefits</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Security</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Support</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Help Center</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Contact Us</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={{ color: 'var(--text-muted)' }}><Twitter size={20} /></a>
            <a href="https://www.instagram.com/grow_x217?igsh=NHp0MjJtaHZkbzlt&utm_source=qr" style={{ color: 'var(--text-muted)' }} target='_blank'><Instagram size={20} /></a>
            <a href="#" style={{ color: 'var(--text-muted)' }}><Github size={20} /></a>
            <a href="#" style={{ color: 'var(--text-muted)' }}><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2026 GrowX Inc. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.3);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .developer-link {
          color: rgba(255, 255, 255, 0.2);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .developer-link:hover {
          color: rgba(255, 255, 255, 0.5);
          transform: translateY(-1px);
        }

        .dev-name {
          color: #6366f1;
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </footer>
  );
}
