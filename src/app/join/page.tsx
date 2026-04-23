'use client';

import { useEffect, Suspense, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Download, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

function JoinContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');
  const [copied, setCopied] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    
    if (ref) {
      localStorage.setItem('referralCode', ref);
    }

    const downloadTimeout = setTimeout(() => {
      if (!isMounted.current) return;
      const downloadLink = document.createElement('a');
      downloadLink.href = '/grow_x.apk';
      downloadLink.download = 'grow_x.apk';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setDownloadStarted(true);
    }, 2000);

    return () => {
      isMounted.current = false;
      clearTimeout(downloadTimeout);
    };
  }, [ref]);

  const copyToClipboard = () => {
    if (ref) {
      navigator.clipboard.writeText(ref);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleBackToSite = () => {
    if (isMounted.current) {
      router.push('/');
    }
  };

  return (
    <div className="join-container">
      {/* Background Elements */}
      <div className="bg-glow">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <div className="carbon-overlay"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="content-wrapper"
      >
        <div className="header-section">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="badge"
          >
            <TrendingUp size={14} className="icon-bounce" />
            <span>Join 50,000+ Smart Investors</span>
          </motion.div>
          
          <h1 className="main-title">
            Grow Your Wealth <br /> 
            <span className="gradient-text">with GrowX</span>
          </h1>
          
          <p className="subtitle">
            Your secure download is starting. Copy your code below to claim your sign-up bonus.
          </p>
        </div>

        {/* Main Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="main-card"
        >
          <div className="card-inner">
            <div className="card-header">
              <p className="label">Referral Code</p>
              <div className="bonus-badge">
                <Sparkles size={12} className="fill-green" />
                BONUS ACTIVE
              </div>
            </div>
            
            <div className="code-section">
              <div className="code-display">
                {ref || 'GROWX-777'}
              </div>

              <button 
                onClick={copyToClipboard}
                className="copy-button"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div key="check" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="flex-center">
                      <Check size={20} strokeWidth={3} />
                      <span>COPIED!</span>
                    </motion.div>
                  ) : (
                    <motion.div key="copy" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="flex-center">
                      <Copy size={20} strokeWidth={2.5} />
                      <span>COPY CODE</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="shimmer"></div>
              </button>
            </div>
            
            <AnimatePresence>
              {copied && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="success-msg"
                >
                  <span className="dot"></span>
                  Code ready to use in-app
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Download Section */}
        <div className="download-section">
          <div className="status-badge-container">
            <div className="status-badge">
              <div className={`status-dot ${downloadStarted ? 'active' : 'preparing'}`}>
                <div className="ping"></div>
              </div>
              <span className="status-text">
                {downloadStarted ? 'Download Started' : 'Preparing Secure Link'}
              </span>
            </div>
          </div>

          <div className="action-buttons">
            <a href="/grow_x.apk" download className="btn-manual">
              <Download size={18} />
              MANUAL DOWNLOAD
            </a>
            <button onClick={handleBackToSite} className="btn-website">
              GO TO WEBSITE
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="footer-msg"
        >
        </motion.div>
      </motion.div>

      <style jsx>{`
        .join-container {
          position: relative;
          min-height: 100vh;
          background: #050505;
          color: white;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          font-family: 'Outfit', sans-serif;
        }

        .carbon-overlay {
          position: absolute;
          inset: 0;
          background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
          opacity: 0.03;
          pointer-events: none;
        }

        .bg-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .orb {
          position: absolute;
          width: 50%;
          height: 50%;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.1;
          animation: pulse 4s infinite alternate;
        }

        .orb-1 {
          top: -10%;
          left: -10%;
          background: #6366f1;
        }

        .orb-2 {
          bottom: -10%;
          right: -10%;
          background: #a855f7;
          animation-delay: 2s;
        }

        @keyframes pulse {
          from { transform: scale(1); opacity: 0.1; }
          to { transform: scale(1.1); opacity: 0.15; }
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 512px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #818cf8;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);
        }

        .main-title {
          font-size: clamp(28px, 7vw, 48px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          line-height: 1.5;
          max-width: 340px;
          margin: 0 auto;
          font-weight: 500;
        }

        .main-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px;
          margin-bottom: 24px;
        }

        .card-inner {
          background: rgba(10, 10, 10, 0.9);
          border-radius: 28px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .label {
          font-size: 10px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .bonus-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 255, 163, 0.1);
          border: 1px solid rgba(0, 255, 163, 0.2);
          color: #00ffa3;
          font-size: 10px;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 100px;
        }

        .fill-green { fill: #00ffa3; }

        .code-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .code-display {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px;
          font-size: 28px;
          font-family: 'Monaco', 'Consolas', monospace;
          font-weight: 900;
          text-align: center;
          letter-spacing: 0.2em;
          color: white;
        }

        .copy-button {
          position: relative;
          overflow: hidden;
          background: #6366f1;
          color: white;
          border: none;
          padding: 16px;
          border-radius: 16px;
          font-weight: 900;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }

        .copy-button:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.4);
        }

        .copy-button:active {
          transform: scale(0.98);
        }

        .flex-center {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .shimmer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: translateX(-100%);
          transition: transform 0.5s;
        }

        .copy-button:hover .shimmer {
          transform: translateX(100%);
        }

        .success-msg {
          margin-top: 16px;
          font-size: 12px;
          font-weight: 700;
          color: #00ffa3;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #00ffa3;
          border-radius: 50%;
          animation: ping 1s infinite;
        }

        @keyframes ping {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(2); opacity: 0; }
        }

        .download-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .status-badge-container {
          display: flex;
          justify-content: center;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .status-dot {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .status-dot.active { background: #00ffa3; }
        .status-dot.preparing { background: #fbbf24; }

        .ping {
          position: absolute;
          inset: 0;
          background: inherit;
          border-radius: 50%;
          animation: ping 1.5s infinite;
        }

        .status-text {
          font-size: 10px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .action-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .btn-manual, .btn-website {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 900;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
        }

        .btn-manual {
          background: rgba(255, 255, 255, 0.03);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-manual:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .btn-website {
          background: white;
          color: black;
        }

        .btn-website:hover {
          background: #f3f4f6;
          transform: translateY(-2px);
        }

        .footer-msg {
          margin-top: 24px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .footer-msg a {
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dev-text {
          color: #00ffa3;
        }

        @media (max-width: 480px) {
          .action-buttons {
            grid-template-columns: 1fr;
          }
          
          .main-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-[#050505] text-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#00ffa3]"></div>
      </div>
    }>
      <JoinContent />
    </Suspense>
  );
}