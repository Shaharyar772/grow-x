"use client";
import React from 'react';
import { Shield, Zap, CircleDollarSign, Headset, PieChart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <CircleDollarSign size={32} />,
    title: "6% Monthly Returns",
    description: "Our proprietary AI-driven strategies consistently deliver high yield returns for our user base."
  },
  {
    icon: <Shield size={32} />,
    title: "Bank-Grade Security",
    description: "Your funds are protected with end-to-end encryption and multi-sig wallet security protocols."
  },
  {
    icon: <PieChart size={32} />,
    title: "AI Portfolio Optmization",
    description: "Smart algorithms that analyze market trends 24/7 to optimize your investment portfolio in real-time."
  },
  {
    icon: <Zap size={32} />,
    title: "Instant Withdrawals",
    description: "Access your money whenever you need it. No lock-in periods, no hidden fees, instant processing."
  },
  {
    icon: <Globe size={32} />,
    title: "Global Access",
    description: "Invest from anywhere in the world with multi-currency support and seamless cross-border transfers."
  },
  {
    icon: <Headset size={32} />,
    title: "24/7 Expert Support",
    description: "Our team of dedicated financial experts is always available to help you with your investment journey."
  }
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '20px' }}>
          Why Choose <span className="gradient-text">GrowX</span>?
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          We provide the tools and technology to help you reach your financial goals faster than ever.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
      }}>
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass"
            style={{
              padding: '40px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              transition: 'var(--transition)',
              cursor: 'default',
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '16px',
              background: 'rgba(0, 255, 163, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700 }}>{f.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
