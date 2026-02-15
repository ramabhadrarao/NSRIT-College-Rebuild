import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Download, FileText, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Join the Future</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Admissions 2026</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Take the first step towards a successful engineering career. Apply now for undergraduate and postgraduate programs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Eligibility Criteria</h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">B.Tech Programs</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-slate-600">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with Chemistry/Biology/Technical Vocational subject.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Obtained at least 45% marks (40% in case of candidates belonging to reserved category) in the above subjects taken together.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Valid score in EAMCET / JEE Main.</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full h-px bg-slate-100"></div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">M.Tech Programs</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-slate-600">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Passed Bachelor's Degree or equivalent in the relevant field.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Obtained at least 50% marks (45% in case of candidates belonging to reserved category) in the qualifying examination.</span>
                    </li>
                    <li className="flex gap-3 text-slate-600">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span>Valid score in GATE / PGECET.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Admission Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "01", title: "Apply Online", desc: "Fill out the application form on our website." },
                  { step: "02", title: "Entrance Exam", desc: "Appear for EAMCET/JEE/GATE or institute entrance test." },
                  { step: "03", title: "Counseling", desc: "Participate in the counseling process based on your rank." },
                  { step: "04", title: "Verification", desc: "Submit original documents for verification." },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-primary/30 transition-colors">
                    <span className="absolute -top-4 -right-4 text-8xl font-bold text-slate-50 group-hover:text-rose-50 transition-colors select-none">
                      {item.step}
                    </span>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-rose-600 to-emerald-500 text-white shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0,_transparent_55%)]" />
              <div className="relative p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Apply Now</h3>
                  <p className="text-sm text-rose-50/90">
                    Share your basic details and our admissions team will connect
                    with you shortly.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="fullName"
                        className="text-xs font-semibold tracking-wide text-blue-50/95"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your name"
                        className="h-10 border-white/20 bg-white/10 text-white placeholder:text-blue-100/70"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold tracking-wide text-blue-50/95"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="h-10 border-white/20 bg-white/10 text-white placeholder:text-blue-100/70"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold tracking-wide text-blue-50/95"
                      >
                        Mobile Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91"
                        className="h-10 border-white/20 bg-white/10 text-white placeholder:text-blue-100/70"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold tracking-wide text-blue-50/95">
                        Program Interested In
                      </Label>
                      <Select>
                        <SelectTrigger className="h-10 border-white/20 bg-white/10 text-blue-50/90">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="btech-cse">
                            B.Tech - Computer Science
                          </SelectItem>
                          <SelectItem value="btech-ece">
                            B.Tech - Electronics & Communication
                          </SelectItem>
                          <SelectItem value="btech-mech">
                            B.Tech - Mechanical
                          </SelectItem>
                          <SelectItem value="btech-civil">
                            B.Tech - Civil
                          </SelectItem>
                          <SelectItem value="mtech">
                            M.Tech Programs
                          </SelectItem>
                          <SelectItem value="mba">MBA</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="exam"
                        className="text-xs font-semibold tracking-wide text-blue-50/95"
                      >
                        Entrance Exam
                      </Label>
                      <Select>
                        <SelectTrigger className="h-10 border-white/20 bg-white/10 text-blue-50/90">
                          <SelectValue placeholder="Select exam" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eamcet">EAMCET</SelectItem>
                          <SelectItem value="jee">JEE Main</SelectItem>
                          <SelectItem value="gate">GATE</SelectItem>
                          <SelectItem value="pgecet">PGECET</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="rank"
                        className="text-xs font-semibold tracking-wide text-blue-50/95"
                      >
                        Rank / Score (Optional)
                      </Label>
                      <Input
                        id="rank"
                        placeholder="Enter your rank or score"
                        className="h-10 border-white/20 bg-white/10 text-white placeholder:text-blue-100/70"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="text-xs font-semibold tracking-wide text-blue-50/95"
                    >
                      Additional Details (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Share any specific queries or preferences."
                      className="min-h-[80px] border-white/20 bg-white/10 text-white placeholder:text-blue-100/70"
                    />
                  </div>
                  <Button className="w-full bg-white text-primary hover:bg-blue-50 font-bold h-11 rounded-full mt-2">
                    Submit Enquiry
                  </Button>
                  <p className="text-[10px] text-blue-50/80 text-center">
                    By submitting this form, you consent to being contacted by
                    NSRIT for admission-related updates.
                  </p>
                </form>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" /> Downloads
              </h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-slate-700 font-medium text-sm">Brochure 2026</span>
                  </div>
                  <Download className="h-4 w-4 text-slate-300" />
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-slate-700 font-medium text-sm">Fee Structure</span>
                  </div>
                  <Download className="h-4 w-4 text-slate-300" />
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-slate-700 font-medium text-sm">Scholarship Form</span>
                  </div>
                  <Download className="h-4 w-4 text-slate-300" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Important Dates
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-slate-500 uppercase">MAR</span>
                    <span className="text-lg font-bold text-slate-900 leading-none">15</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Application Deadline</p>
                    <p className="text-slate-500 text-xs mt-1">Last date to submit forms</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-slate-500 uppercase">APR</span>
                    <span className="text-lg font-bold text-slate-900 leading-none">20</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Entrance Exam</p>
                    <p className="text-slate-500 text-xs mt-1">NSRIT Admission Test</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
