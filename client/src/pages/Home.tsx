import Navbar from "@/components/Navbar";
import NewsTicker from "@/components/NewsTicker";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import NewsEvents from "@/components/NewsEvents";
import Placements from "@/components/Placements";
import CampusLife from "@/components/CampusLife";
import studentLibrary from "@/assets/students-library.png";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <NewsTicker />
      <Hero />
      
      {/* About Section - Redesigned for better flow */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-primary font-bold text-xs tracking-wider uppercase mb-4 border border-amber-100">
                About NSRIT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Empowering the Next Generation of <span className="text-primary">Innovators</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Established with a vision to create global leaders, NSRIT combines academic rigor with practical exposure. Our campus is a melting pot of ideas, innovation, and culture, designed to foster holistic development.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {[
                  "NAAC 'A' Grade Accredited",
                  "NBA Accredited Programs",
                  "30+ Acres Green Campus",
                  "Incubation Center for Startups",
                  "Global University Tie-ups",
                  "Strong Alumni Network"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-blue-600 text-white h-12 px-8 rounded-full">
                  Read Our Story
                </Button>
                <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-12 px-8 rounded-full">
                  Chairman's Message
                </Button>
              </div>
            </div>

            {/* Image Grid */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={studentLibrary} 
                  alt="Students in library" 
                  className="w-full object-cover h-[500px] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-lg italic">"Education is not the learning of facts, but the training of the mind to think."</p>
                  <p className="text-secondary mt-2 font-bold">- Albert Einstein</p>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-slate-100 hidden xl:block animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-12 w-12 bg-amber-50 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                     20+
                   </div>
                   <div>
                     <p className="text-slate-900 font-bold text-lg">Years of Legacy</p>
                     <p className="text-slate-500 text-sm">Building Excellence</p>
                   </div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[85%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Programs />
      <Placements />
      <CampusLife />
      <NewsEvents />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
            Join a community of learners, leaders, and innovators. Apply now for the academic year 2026-2027.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-amber-50 font-bold h-14 px-10 rounded-full text-lg">
              Apply Online
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-10 rounded-full text-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
