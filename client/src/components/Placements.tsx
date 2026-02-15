import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Briefcase, Building } from "lucide-react";

// Mock data for recruiters
const recruiters = [
  "TCS", "Infosys", "Wipro", "Cognizant", "Accenture", 
  "Capgemini", "Amazon", "Microsoft", "Google", "Oracle",
  "IBM", "HCL", "Tech Mahindra", "Deloitte", "PwC",
  "KPMG", "EY", "Adobe", "Salesforce", "Cisco"
];

export default function Placements() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs px-3 py-1 uppercase tracking-widest">
            Career Success
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Placement Excellence
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our dedicated training and placement cell ensures that every student gets the opportunity to kickstart their career with top-tier companies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Highest Package", value: "45 LPA", icon: Trophy, color: "text-yellow-600 bg-yellow-50" },
            { label: "Average Package", value: "8.5 LPA", icon: TrendingUp, color: "text-blue-600 bg-blue-50" },
            { label: "Companies Visited", value: "250+", icon: Building, color: "text-indigo-600 bg-indigo-50" },
            { label: "Offers Made", value: "1200+", icon: Briefcase, color: "text-emerald-600 bg-emerald-50" },
          ].map((stat, index) => (
            <Card key={index} className="border-none shadow-sm bg-slate-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <span className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Scrolling Recruiters */}
        <div className="relative w-full overflow-hidden bg-slate-50 py-10 rounded-xl border border-slate-100">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-slate-50 to-transparent z-10"></div>
          
          <div className="text-center mb-8">
             <span className="text-slate-400 font-semibold uppercase text-sm tracking-widest">Our Top Recruiters</span>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-12 overflow-hidden whitespace-nowrap py-4"
            style={{ width: "100%" }}
          >
            {/* Double the list for seamless scrolling */}
            {[...recruiters, ...recruiters].map((company, index) => (
              <div 
                key={index} 
                className="inline-flex items-center justify-center font-bold text-2xl text-slate-300 hover:text-primary transition-colors cursor-pointer px-4"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}