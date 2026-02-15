import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Building2, FlaskConical, Database, Zap, Wrench } from "lucide-react";

const programs = [
  {
    title: "Computer Science",
    icon: Code,
    description: "AI, ML, Data Science & Full Stack Development",
    color: "bg-rose-100 text-rose-600",
    tag: "Flagship UG"
  },
  {
    title: "Electronics & Comm.",
    icon: Zap,
    description: "VLSI, Embedded Systems & IoT",
    color: "bg-amber-100 text-amber-600",
    tag: "Core UG"
  },
  {
    title: "Mechanical Engg.",
    icon: Wrench,
    description: "Robotics, CAD/CAM & Thermodynamics",
    color: "bg-slate-100 text-slate-600",
    tag: "Core UG"
  },
  {
    title: "Civil Engineering",
    icon: Building2,
    description: "Structural Design, Surveying & Construction",
    color: "bg-emerald-100 text-emerald-600",
    tag: "Core UG"
  },
  {
    title: "Data Science",
    icon: Database,
    description: "Big Data Analytics & Visualization",
    color: "bg-purple-100 text-purple-600",
    tag: "Emerging"
  },
  {
    title: "Basic Sciences",
    icon: FlaskConical,
    description: "Physics, Chemistry & Mathematics",
    color: "bg-rose-100 text-rose-600",
    tag: "Foundation"
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)] items-start mb-8 lg:mb-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-100 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-primary font-semibold tracking-[0.18em] uppercase text-[11px]">
                Academic Excellence
              </span>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-slate-900 leading-tight">
                Explore our <span className="gradient-text">industry-aligned programs</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl">
                From core engineering to emerging technologies, NSRIT programs are designed
                with strong fundamentals, hands-on labs, and industry collaborations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Undergraduate</p>
                  <p className="text-lg font-semibold text-slate-900">6+ Programs</p>
                </div>
                <span className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                  UG
                </span>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-slate-100 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">Interdisciplinary</p>
                  <p className="text-lg font-semibold text-slate-900">AI & DS</p>
                </div>
                <span className="h-9 w-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-semibold">
                  New
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-7 text-sm font-semibold">
                View all programs
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-slate-200 text-slate-800 hover:bg-slate-50 h-11 px-7 text-sm font-semibold"
              >
                Download curriculum
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={index}
                  className="group bg-white/95 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer rounded-2xl"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl ${program.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 shrink-0">
                        {program.tag}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1.5 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 flex-1">
                      {program.description}
                    </p>
                    <div className="flex items-center text-xs md:text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
