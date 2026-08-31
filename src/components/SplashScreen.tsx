import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
  isDarkMode?: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, isDarkMode }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const FILL_DURATION = 2000;
    const START_DELAY = 1500;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(onFinish, 400);
      }, 500);
      return () => clearTimeout(timer);
    }

    let animationFrameId: number;
    const timeoutId = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - startTime) / FILL_DURATION);
        setProgress(p * 100);
        if (p < 1) {
          animationFrameId = requestAnimationFrame(tick);
        } else {
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onFinish, 450);
          }, 250);
        }
      };
      animationFrameId = requestAnimationFrame(tick);
    }, START_DELAY);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center min-h-screen overflow-hidden transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${isDarkMode ? 'dark' : ''}`}
      style={{
        background: isDarkMode ? '#120a1e' : '#faf9fd',
        backgroundImage: isDarkMode
          ? 'radial-gradient(circle at 50% 35%, rgba(168,85,247,.20), transparent 60%)'
          : 'radial-gradient(circle at 50% 35%, rgba(124,58,237,.10), transparent 60%)',
        color: isDarkMode ? '#f3f0fa' : '#241c33',
        fontFamily: "'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', sans-serif",
      }}
    >
      <style>{`
        .splash-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 32px;
          perspective: 1200px;
        }

        .splash-logo-wrap {
          width: clamp(110px, 26vw, 160px);
          transform-style: preserve-3d;
          filter: drop-shadow(0 22px 30px rgba(124,58,237,.22));
          animation: dropIn 1.15s cubic-bezier(.2,.8,.2,1) both,
                    float 3.4s ease-in-out 1.15s infinite;
        }

        .splash-logo-wrap img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @keyframes dropIn {
          0% {
            transform: rotateY(-110deg) rotateX(12deg) translateZ(-220px) scale(.55);
            opacity: 0;
          }
          55% { opacity: 1; }
          100% {
            transform: rotateY(0) rotateX(0) translateZ(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(0); }
          50% { transform: translateY(-7px) rotateX(3deg); }
        }

        .splash-wordmark {
          margin-top: 2px;
          font-weight: 800;
          font-size: clamp(1.15rem, 4vw, 1.5rem);
          letter-spacing: 3px;
          opacity: 0;
          animation: fadeUp .7s ease .95s forwards;
        }

        .splash-subtitle {
          margin-top: -8px;
          font-size: .66rem;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: ${isDarkMode ? '#a89bc4' : '#8b8299'};
          opacity: 0;
          animation: fadeUp .7s ease 1.1s forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(9px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .splash-loader {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .splash-spinner {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2.5px solid ${isDarkMode ? '#2a1f3d' : '#e9e5f2'};
          border-top-color: #7c3aed;
          opacity: 0;
          animation: spin .75s linear infinite, spinnerFadeIn .3s ease 1.3s forwards;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spinnerFadeIn { to { opacity: 1; } }

        .splash-status-text {
          font-size: .75rem;
          color: ${isDarkMode ? '#a89bc4' : '#8b8299'};
          opacity: 0;
          animation: fadeUp .5s ease 1.4s forwards;
        }

        .splash-progress-track {
          width: min(46vw, 190px);
          height: 4px;
          border-radius: 4px;
          background: ${isDarkMode ? '#2a1f3d' : '#e9e5f2'};
          overflow: hidden;
          opacity: 0;
          animation: fadeUp .5s ease 1.5s forwards;
        }

        .splash-progress-fill {
          height: 100%;
          border-radius: 4px;
          background: #7c3aed;
          transition: width 0.05s linear;
        }

        @media (prefers-reduced-motion: reduce) {
          .splash-logo-wrap, .splash-wordmark, .splash-subtitle, .splash-spinner, .splash-status-text, .splash-progress-track {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div className="splash-stage">
        <div className="splash-logo-wrap">
          <img src="/favicon.png" alt="Logo ORVOKS" />
        </div>
        <div className="splash-wordmark">ORVOKS</div>
        <div className="splash-subtitle">Orientasi Vokasi Muda</div>

        <div className="splash-loader">
          <div className="splash-spinner"></div>
          <div className="splash-status-text">Menuju ke Beranda&hellip;</div>
          <div className="splash-progress-track">
            <div
              className="splash-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
