"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Download GrowX",
    description: "Get the app from the Play Store or App Store and install it on your device."
  },
  {
    number: "02",
    title: "Setup Account",
    description: "Verify your identity and link your bank account or crypto wallet securely."
  },
  {
    number: "03",
    title: "Start Growing",
    description: "Choose an investment plan and watch your wealth grow with 6% monthly returns."
  }
];

export default function StepGuide() {
  return (
    <section id="how-it-works" style={{ padding: '100px 20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 800 }}>How It Works</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              textAlign: i % 2 === 0 ? 'left' : 'right',
            }}
          >
            <div style={{
              fontSize: '120px',
              fontWeight: 900,
              color: 'rgba(255, 255, 255, 0.03)',
              lineHeight: 1,
              flexShrink: 0,
            }}>
              {step.number}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '15px' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6 }}>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Connector lines or visuals could go here but keeping it clean */}
    </section>
  );
}
