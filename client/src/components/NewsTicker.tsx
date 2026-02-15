import { Bell } from "lucide-react";

export default function NewsTicker() {
  const news = [
    "Admissions open for B.Tech 2026-27 batch. Apply online now.",
    "NSRIT achieves 95% placement record for academic year 2025-26.",
    "NAAC 'A' Grade and NBA accredited programs in CSE, ECE & ME.",
    "Upcoming: International Conference on AI & ML – March 15th, 2026."
  ];

  const message = news.join("   •   ");

  return (
    <div className="bg-transparent text-[11px] sm:text-sm font-medium">
      <div className="container mx-auto px-3 sm:px-4 py-1">
        <div className="h-8 sm:h-9 flex items-center rounded-full bg-muted text-slate-700 px-3 sm:px-4 border border-border/70 shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            <span className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-[1px] rounded-full text-[10px] sm:text-xs uppercase tracking-wider font-semibold shrink-0">
              <Bell className="h-3 w-3" /> Updates
            </span>
            <div className="flex-1 overflow-hidden">
              <div className="ticker-move">
                <span className="pr-8">{message}</span>
                <span className="pr-8">{message}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
