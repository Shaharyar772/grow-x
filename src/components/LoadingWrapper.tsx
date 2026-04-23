'use client';

import React, { useState, useEffect } from 'react';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for hydration and a small delay to ensure styles are applied
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`skeleton-overlay ${!loading ? 'hidden' : ''}`}>
        <div className="skeleton-hero">
          <div className="skeleton-badge"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-title short"></div>
          <div className="skeleton-subtitle"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
      {children}
    </>
  );
}
