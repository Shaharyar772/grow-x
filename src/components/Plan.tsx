"use client";
import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "1 Month Growth",
    tag: "Most Popular",
    description: "Balanced monthly growth with consistent daily ROI payouts.",
    return: "6.0%",
    duration: "1 month",
    dailyRoi: "₹20/day",
    roiOn: "on ₹10k",
    highlight: true,
    color: "var(--primary)"
  },
  {
    name: "2 Week Sprint",
    tag: "Quick Return",
    description: "Fast cash flow with a short-term payout cycle. Perfect for testing the platform.",
    return: "4.0%",
    duration: "2 weeks",
    dailyRoi: "₹29/day",
    roiOn: "on ₹10k",
    highlight: false,
    color: "var(--secondary)"
  },
  {
    name: "3 Month Pro",
    tag: "Best Value",
    description: "Higher returns with medium-term commitment. Best for serious investors.",
    return: "12.0%",
    duration: "3 months",
    dailyRoi: "₹13/day",
    roiOn: "on ₹10k",
    highlight: false,
    color: "#a855f7" // Purple-ish
  },
  {
    name: "6 Month Elite",
    tag: "Premium",
    description: "Maximum returns for long-term wealth building. Premium plan with priority support.",
    return: "18.0%",
    duration: "6 months",
    dailyRoi: "₹10/day",
    roiOn: "on ₹10k",
    highlight: false,
    color: "#f59e0b" // Amber
  },
  {
    name: "More Plans",
    tag: "Coming Soon",
    description: "We are developing new AI-driven strategies to help you diversify your portfolio even further.",
    return: "---",
    duration: "---",
    dailyRoi: "---",
    roiOn: "upcoming",
    highlight: false,
    disabled: true,
    color: "var(--text-muted)"
  }
];

export default function Plan() {
  return (
    <section id="plans" style={{ padding: '100px 20px', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '20px' }}>
              Investment <span className="gradient-text">Plans</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              Choose a plan and see exactly how much you earn.
            </p>
          </motion.div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass"
              style={{
                padding: '30px',
                borderRadius: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                position: 'relative',
                border: plan.highlight ? `1px solid ${plan.color}` : '1px solid var(--glass-border)',
                background: plan.highlight ? 'rgba(255, 255, 255, 0.03)' : 'var(--glass)',
                boxShadow: plan.highlight ? `0 10px 40px ${plan.color}15` : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 800,
                    color: plan.color
                  }}>
                    X
                  </div>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700 }}>{plan.name}</h3>
                  </div>
                </div>
                {plan.tag && (
                  <div style={{
                    background: plan.highlight ? plan.color : 'rgba(255,255,255,0.1)',
                    color: plan.highlight ? '#000' : 'var(--text-muted)',
                    padding: '6px 16px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 700
                  }}>
                    {plan.tag}
                  </div>
                )}
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.5 }}>
                {plan.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Return</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)' }}>{plan.return}</div>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Duration</div>
                  <div style={{ fontSize: '16px', fontWeight: 700 }}>{plan.duration}</div>
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Daily ROI</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#818cf8' }}>{plan.dailyRoi}</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-muted)' }}>{plan.roiOn}</div>
                </div>
              </div>

              <button
                className={plan.disabled ? "" : "btn-primary"}
                disabled={plan.disabled}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px',
                  borderRadius: '16px',
                  fontSize: '16px',
                  marginTop: 'auto',
                  cursor: plan.disabled ? 'not-allowed' : 'pointer',
                  background: plan.disabled ? 'rgba(255,255,255,0.05)' : undefined,
                  color: plan.disabled ? 'var(--text-muted)' : undefined,
                  border: plan.disabled ? '1px solid var(--glass-border)' : undefined,
                  opacity: plan.disabled ? 0.6 : 1
                }}
              >
                {plan.disabled ? "Coming Soon" : "Calculate & Invest"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
