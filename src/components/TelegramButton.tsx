"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TelegramButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Placeholder link - user should replace this
  const telegramLink = "https://t.me/GROWXSUPPORTME"; 

  return (
    <div 
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            style={{
              marginRight: "16px",
              padding: "10px 20px",
              borderRadius: "14px",
              background: "rgba(15, 15, 15, 0.8)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              letterSpacing: "0.5px",
            }}
          >
            Chat with us!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #24A1DE 0%, #0088cc 100%)",
          boxShadow: "0 8px 30px rgba(0, 136, 204, 0.4)",
          cursor: "pointer",
          overflow: "hidden",
          textDecoration: "none",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            inset: 0,
            background: "white",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Telegram Icon (SVG) */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", zIndex: 10, color: "white" }}
        >
          <path
            d="M21.5 2L2 10L9 13L21.5 2Z"
            fill="currentColor"
          />
          <path
            d="M21.5 2L13 21.5L9 13L21.5 2Z"
            fill="currentColor"
          />
          <path
            d="M9 13L11 18L13 13L9 13Z"
            fill="white"
            fillOpacity="0.4"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default TelegramButton;
