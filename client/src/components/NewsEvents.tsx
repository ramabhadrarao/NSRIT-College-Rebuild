import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const news = [
  {
    category: "Academic",
    date: "Feb 12, 2026",
    title: "NSRIT secures top rank in National Engineering Survey",
    image: "https://placehold.co/800x500/b91c1c/ffffff?text=NSRIT+Campus"
  },
  {
    category: "Events",
    date: "Feb 08, 2026",
    title: "Annual Tech Fest 'Technova 2026' announced",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Placement",
    date: "Feb 01, 2026",
    title: "Over 500+ offers rolled out in Phase 1 placements",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
  }
];

const events = [
  {
    day: "15",
    month: "FEB",
    title: "International Conference on AI & ML",
    time: "10:00 AM - 04:00 PM",
    location: "Main Auditorium"
  },
  {
    day: "20",
    month: "FEB",
    title: "Alumni Meet 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Campus Grounds"
  },
  {
    day: "25",
    month: "FEB",
    title: "Workshop on Cloud Computing",
    time: "11:00 AM - 01:00 PM",
    location: "Lab Complex 3"
  }
];

export default function NewsEvents() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Happening at NSRIT</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Latest News & Events</h2>
          </div>
          <a href="#" className="text-primary font-semibold hover:underline">View All News →</a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Cards - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group cursor-pointer bg-white">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 text-slate-900 hover:bg-white">{item.category}</Badge>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <CalendarDays className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Events List - Takes up 1 column */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 h-full">
            <h3 className="font-bold text-xl text-slate-900 mb-6 pb-4 border-b">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="flex gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-50 rounded-lg flex flex-col items-center justify-center text-primary border border-amber-100 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-xs font-bold uppercase">{event.month}</span>
                    <span className="text-2xl font-bold leading-none">{event.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">{event.title}</h4>
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2 text-sm font-semibold text-primary border border-primary/20 rounded-md hover:bg-primary hover:text-white transition-colors">
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
