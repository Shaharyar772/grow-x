"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, History } from 'lucide-react';

const stats = [
  { icon: <History size={24} />, value: "5+", label: "Years of Trust", description: "Serving since 2019" },
  { icon: <Users size={24} />, value: "50k+", label: "Active Investors", description: "Global community" },
  { icon: <Award size={24} />, value: "6%", label: "Monthly ROI", description: "Consistent returns" },
  { icon: <ShieldCheck size={24} />, value: "100%", label: "Secure", description: "Bank-grade safety" }
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="stat-card border-1 border-red-500"
          >
            <div className="stat-icon-wrapper">
              {stat.icon}
            </div>

            <div className="stat-info">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
              <span className="stat-desc">{stat.description}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .stats-section {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          
        }

        .stat-card {
          position: relative;
          padding: 30px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        /* 🔥 Gradient Border */
        .stat-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, #00ffa3, #4f46e5, #00ffa3);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, 
                        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
        }

        /* Hover Glow Effect */
        .stat-card:hover {
          box-shadow: 0 0 30px rgba(0, 255, 163, 0.4);
          transform: translateY(-5px);
        }

        .stat-icon-wrapper {
          width: 50px;
          height: 50px;
          background: rgba(0, 255, 163, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00ffa3;
          margin-bottom: 10px;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -1px;
        }

        .stat-label {
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .stat-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-card {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
}
