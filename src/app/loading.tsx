
'use client';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="skeleton-hero">
        <div className="skeleton-badge"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-title short"></div>
        <div className="skeleton-subtitle"></div>
        <div className="skeleton-button"></div>
      </div>
      
      <div className="skeleton-mockup"></div>

      <style jsx>{`
        .loading-container {
          position: fixed;
          inset: 0;
          background: #050505;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 150px;
          z-index: 9999;
        }

        .skeleton-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          width: 100%;
          max-width: 800px;
          padding: 0 20px;
        }

        .skeleton-badge {
          width: 200px;
          height: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          animation: pulse 1.5s infinite;
        }

        .skeleton-title {
          width: 80%;
          height: 60px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          animation: pulse 1.5s infinite;
        }

        .skeleton-title.short {
          width: 40%;
        }

        .skeleton-subtitle {
          width: 60%;
          height: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          animation: pulse 1.5s infinite;
        }

        .skeleton-button {
          width: 180px;
          height: 50px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          animation: pulse 1.5s infinite;
        }

        .skeleton-mockup {
          margin-top: 60px;
          width: 90%;
          max-width: 1000px;
          height: 400px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 24px;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
