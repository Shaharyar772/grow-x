"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export default function TrustStatement() {
  return (
    <section className="statement-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="statement-content"
        >
          <div className="icon-group">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="icon-box"
            >
              <ShieldCheck size={32} />
            </motion.div>
          </div>
          
          <h2 className="statement-text">
            The <span className="highlight">GrowX</span> platform is your financial partner where your 
            investments are <span className="safe">safe and secure</span>. 
            Start your journey with Grow and multiply your investments with 
            <span className="gradient-text"> good stable returns</span>.
          </h2>

          <div className="features-mini">
            <div className="mini-item">
              <Sparkles size={16} className="text-primary" />
              <span>Financial Growth</span>
            </div>
            <div className="mini-item">
              <TrendingUp size={16} className="text-secondary" />
              <span>Stable ROI</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .statement-section {
          padding: 100px 20px;
          position: relative;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .statement-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .icon-box {
          width: 80px;
          height: 80px;
          background: rgba(0, 255, 163, 0.1);
          border: 1px solid rgba(0, 255, 163, 0.2);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00ffa3;
          margin-bottom: 8px;
        }

        .statement-text {
          font-size: clamp(24px, 5vw, 42px);
          font-weight: 700;
          line-height: 1.3;
          color: white;
          max-width: 900px;
        }

        .highlight {
          color: #6366f1;
        }

        .safe {
          color: #00ffa3;
          text-decoration: underline;
          text-underline-offset: 8px;
          text-decoration-thickness: 2px;
          text-decoration-color: rgba(0, 255, 163, 0.3);
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ffa3 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .features-mini {
          display: flex;
          gap: 24px;
          margin-top: 16px;
        }

        .mini-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.03);
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 640px) {
          .statement-section {
            padding: 60px 20px;
          }
          .features-mini {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
