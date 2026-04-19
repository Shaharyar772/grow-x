"use client";
import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <nav className="glass-nav">
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo">
            Grow<span className="gradient-text">X</span>
          </div>
          
          {/* Action Section */}
          <button className="btn-download">
            <span className="btn-text">Download</span>
            <Download size={18} strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      <style jsx>{`
        .glass-nav {
          position: fixed;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          max-width: 1100px;
          z-index: 1000;
          /* Glassmorphism Effect */
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          padding: 10px 20px;
          transition: all 0.3s ease;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: white;
          cursor: pointer;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn-download {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: black;
          border: none;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s active;
        }

        .btn-download:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .btn-download:active {
          transform: scale(0.95);
        }

        /* Responsive Logic */
        @media (max-width: 480px) {
          .glass-nav {
            top: 10px;
            padding: 8px 16px;
          }
          
          .logo {
            font-size: 18px;
          }

          .btn-text {
            display: none; /* Mobile par sirf icon dikhay ga agar space kam ho */
          }
          
          .btn-download {
            padding: 10px;
            border-radius: 50%; /* Mobile par circular icon button */
          }
        }

        /* Agar text dikhana ho mobile par to display: none hata dain */
        @media (min-width: 380px) {
           .btn-text {
            display: inline;
          }
          .btn-download {
            padding: 8px 18px;
            border-radius: 50px;
          }
        }
      `}</style>
    </>
  );
}