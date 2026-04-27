"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, TrendingUp, History } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-badge-group"
      >
        <div className="hero-badge trust-badge">
          <History size={14} />
          <span>Trusted for 5+ Years</span>
        </div>
        <div className='p-6'></div>
        <div className="hero-badge">
          <TrendingUp size={16} />
          <span>6% monthly returns</span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-title"
      >
        Grow Your Wealth <br /> with <span className="gradient-text">GrowX</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hero-subtitle"
      >
        Join 50,000+ investors who have been growing their wealth with GrowX since 2019. Secure, automated, and consistent.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hero-cta"
      >
        <a href="/grow_x.apk" download className="btn-primary-hero">
          Download App <Download size={20} />
        </a>
      </motion.div>
      <div className='mb-6'></div>

      {/* Hero Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mockup-container"
      >
        <div className="glow-effect"></div>
        <img
          src="/hero-mockup.png"
          alt="GrowX App"
          className="hero-img"
        />
      </motion.div>

      <style jsx>{`
        .hero-section {
          padding: 140px 20px 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 32px;
          overflow: hidden;
        }

        .hero-badge-group {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-badge {
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .trust-badge {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #818cf8;
        }

        .hero-title {
          font-size: clamp(36px, 8vw, 80px);
          font-weight: 800;
          line-height: 1.05;
          max-width: 900px;
          letter-spacing: -2px;
          color: white;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(16px, 4vw, 20px);
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-primary-hero {
          background: white;
          color: black;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: transform 0.2s;
          position: relative;
          z-index: 10;
        }

        .btn-glass-hero {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .btn-primary-hero:hover, .btn-glass-hero:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .mockup-container {
          margin-top: 40px;
          width: 100%;
          max-width: 1000px;
          position: relative;
        }

        .hero-img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          animation: float 6s infinite ease-in-out;
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          z-index: -1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* Mobile Adjustments */
        @media (max-width: 640px) {
          .hero-section {
            padding: 120px 16px 40px 16px;
            gap: 24px;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary-hero, .btn-glass-hero {
            width: 100%;
            justify-content: center;
          }
          
          .hero-badge span {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}