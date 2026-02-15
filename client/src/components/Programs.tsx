import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Building2, FlaskConical, Database, Zap, Wrench } from "lucide-react";

const programs = [
  {
    title: "Computer Science",
    icon: Code,
    description: "AI, ML, Data Science & Full Stack Development",
    color: "bg-rose-100 text-rose-600"
  },
  {
    title: "Electronics & Comm.",
    icon: Zap,
    description: "VLSI, Embedded Systems & IoT",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Mechanical Engg.",
    icon: Wrench,
    description: "Robotics, CAD/CAM & Thermodynamics",
    color: "bg-slate-100 text-slate-600"
  },
  {
    title: "Civil Engineering",
    icon: Building2,
    description: "Structural Design, Surveying & Construction",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Data Science",
    icon: Database,
    description: "Big Data Analytics & Visualization",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Basic Sciences",
    icon: FlaskConical,
    description: "Physics, Chemistry & Mathematics",
    color: "bg-rose-100 text-rose-600"
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Academic Excellence</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Explore Our Programs</h2>
          <p className="text-slate-600 mt-4">
            We offer a wide range of undergraduate and postgraduate programs designed to equip students with industry-ready skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm overflow-hidden cursor-pointer bg-white">
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-slate-500 mb-6">{program.description}</p>
                <div className="flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
