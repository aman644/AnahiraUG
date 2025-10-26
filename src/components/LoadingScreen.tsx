import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-navy-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 animate-pulse-slow">
          <div className="w-32 h-32 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            <span className="text-white font-bold text-6xl">P</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Premier Products</h1>
          <p className="text-slate-400">Loading your experience...</p>
        </div>

        <div className="w-64 h-1 bg-navy-900 rounded-full overflow-hidden mx-auto border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-primary-600 to-primary-700 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
