"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="cta-container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="cta-glass-box"
      >
        {/* Glow Effect */}
        <div className="cta-bg-glow"></div>

        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Start <span className="gradient-text">Growing</span>?
          </h2>
          <p className="cta-description">
            Join thousands of investors. Our mobile apps are arriving soon to help you manage your wealth on the go.
          </p>

          <div className="btn-group">
            {/* Google Play Button */}
            <div className="btn-wrapper">
              <span className="badge-soon">Coming Soon</span>
              <button className="btn-store disabled-state">
                <Play size={24} fill="currentColor" />
                <div className="btn-label">
                  <small>Get it on</small>
                  <span>Google Play</span>
                </div>
              </button>
            </div>

            {/* App Store Button */}
            <div className="btn-wrapper">
              <span className="badge-soon">Coming Soon</span>
              <button className="btn-store disabled-state">
                <Apple size={24} fill="currentColor" />
                <div className="btn-label">
                  <small>Download on the</small>
                  <span>App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .cta-container {
          padding: 80px 20px;
          display: flex;
          justify-content: center;
        }

        .cta-glass-box {
          width: 100%;
          max-width: 1100px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cta-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(0, 255, 163, 0.05) 0%, transparent 70%);
          z-index: 0;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ffa3 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-description {
          font-size: clamp(16px, 3vw, 19px);
          color: rgba(255, 255, 255, 0.6);
          max-width: 550px;
          margin: 0 auto 48px auto;
          line-height: 1.6;
        }

        .btn-group {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-wrapper {
          position: relative;
        }

        .badge-soon {
          position: absolute;
          top: -12px;
          right: -10px;
          background: #a855f7;
          color: white;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4);
          z-index: 2;
        }

        .btn-store {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 28px;
          border-radius: 16px;
          color: white;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          cursor: not-allowed;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        .btn-label {
          display: flex;
          flex-direction: column;
        }

        .btn-label small {
          font-size: 10px;
          text-transform: uppercase;
          opacity: 0.6;
          line-height: 1;
        }

        .btn-label span {
          font-size: 18px;
          font-weight: 700;
        }

        /* Mobile View */
        @media (max-width: 640px) {
          .cta-glass-box {
            padding: 60px 20px;
            border-radius: 30px;
          }

          .btn-group {
            flex-direction: column;
            align-items: center;
          }

          .btn-store {
            width: 240px;
          }
        }
      `}</style>
    </section>
  );
}