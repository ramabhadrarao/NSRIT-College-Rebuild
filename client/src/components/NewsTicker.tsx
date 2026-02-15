import { useState, useEffect } from "react";
import { Bell, X } from "lucide-react";

export default function NewsTicker() {
  const [isVisible, setIsVisible] = useState(true);
  const news = [
    "Admissions open for B.Tech 2026-27 batch. Apply online now.",
    "NSRIT achieves 95% placement record for academic year 2025-26.",
    "NAAC 'A' Grade and NBA accredited programs in CSE, ECE & ME.",
    "Upcoming: International Conference on AI & ML – March 15th, 2026."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-transparent text-xs sm:text-sm font-medium">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-full bg-muted text-slate-700 px-4 py-1.5 border border-border/70 shadow-sm">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-semibold shrink-0">
              <Bell className="h-3 w-3" /> Updates
            </span>
            <div className="relative min-h-[1.25rem] w-full max-w-2xl flex items-center">
              {news[currentIndex]}
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-slate-400 hover:text-slate-700 transition-colors sm:ml-4 self-end sm:self-auto shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
