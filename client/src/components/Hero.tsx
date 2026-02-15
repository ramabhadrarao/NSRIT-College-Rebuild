import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  GraduationCap,
  Users,
  Building2,
  Trophy,
  PlayCircle,
} from "lucide-react";
import heroImage from "/images/campus.png";
import campus1 from "@/assets/campus-life-1.png";
import campus2 from "@/assets/campus-life-2.png";
import campus3 from "@/assets/campus-life-3.png";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const galleryImages = [campus1, campus2, campus3];

export default function Hero() {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null);
  const [isCarouselHovered, setIsCarouselHovered] = React.useState(false);

  React.useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (!isCarouselHovered) {
        carouselApi.scrollNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [carouselApi, isCarouselHovered]);

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 clip-hero">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="NSRIT Campus"
          className="w-full h-full min-w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/80 via-slate-900/60 to-slate-900/20" />
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-rose-400/30 blur-3xl opacity-70" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr from-amber-400/25 via-emerald-400/25 to-primary/30 blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 z-10 relative py-14 md:py-18 lg:py-24">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-start">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 text-accent text-[11px] font-semibold tracking-[0.22em] mb-6 uppercase shadow-lg shadow-slate-900/60 backdrop-blur-md border border-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Admissions Open 2026-27
              </span>
              <h1 className="text-[2.7rem] md:text-[3.5rem] lg:text-[4rem] font-semibold text-white leading-tight mb-4 md:mb-5">
                Shaping the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                  Future of Engineering
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200/90 mb-8 max-w-2xl leading-relaxed">
                Experience a future-ready campus with industry-aligned programs,
                global collaborations, and a strong placement ecosystem designed
                for tomorrow&apos;s innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 text-base rounded-full shadow-lg shadow-primary/40">
                  Explore Programs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-md border-white/25 text-slate-50 hover:bg-white hover:text-slate-900 font-semibold px-8 h-12 text-base rounded-full group"
                >
                  <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Virtual Campus Tour
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-secondary">
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-bold text-3xl">15+</span>
                </div>
                <span className="text-sm text-slate-300">
                  Years of Excellence
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-secondary">
                  <Users className="h-5 w-5" />
                  <span className="font-bold text-3xl">4000+</span>
                </div>
                <span className="text-sm text-slate-300">
                  Students Enrolled
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-secondary">
                  <Building2 className="h-5 w-5" />
                  <span className="font-bold text-3xl">50+</span>
                </div>
                <span className="text-sm text-slate-300">Modern Labs</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-secondary">
                  <Trophy className="h-5 w-5" />
                  <span className="font-bold text-3xl">95%</span>
                </div>
                <span className="text-sm text-slate-300">
                  Placement Record
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative max-w-md mx-auto w-full lg:max-w-none"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-rose-400/35 via-emerald-300/25 to-amber-300/35 opacity-70 blur-xl" />
            <div className="relative rounded-3xl bg-white/95 border border-border shadow-2xl shadow-slate-900/30 overflow-hidden">
              <div className="px-6 pt-5 pb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                    Admissions & Media
                  </p>
                  <p className="text-sm text-slate-600">
                    Enquiry form, gallery, and video tour
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500">
                  <span className="inline-flex h-6 items-center rounded-full bg-muted px-2">
                    Hero Slides
                  </span>
                  <span className="inline-flex h-6 items-center rounded-full bg-muted px-2">
                    Swipe →
                  </span>
                </div>
              </div>
              <Carousel
                className="w-full"
                opts={{ loop: true, align: "start" }}
                setApi={setCarouselApi}
                onMouseEnter={() => setIsCarouselHovered(true)}
                onMouseLeave={() => setIsCarouselHovered(false)}
              >
                <CarouselContent className="pb-4">
                  <CarouselItem>
                    <div className="px-6 pb-6">
                      <div className="rounded-2xl bg-muted border border-border p-5 space-y-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                              Quick Enquiry
                            </p>
                            <p className="text-sm text-slate-600">
                              Share your details to get a call back.
                            </p>
                          </div>
                          <span className="inline-flex h-7 items-center rounded-full bg-emerald-500 px-3 text-[10px] font-semibold text-white">
                            Admissions 2026
                          </span>
                        </div>
                        <form className="space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <Label
                                htmlFor="hero-name"
                                className="text-[11px] font-semibold tracking-wide text-slate-700"
                              >
                                Full Name
                              </Label>
                              <Input
                                id="hero-name"
                                placeholder="Enter your name"
                                className="h-9 border-border bg-white text-slate-900 placeholder:text-slate-400"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label
                                htmlFor="hero-email"
                                className="text-[11px] font-semibold tracking-wide text-slate-700"
                              >
                                Email
                              </Label>
                              <Input
                                id="hero-email"
                                type="email"
                                placeholder="name@example.com"
                                className="h-9 border-border bg-white text-slate-900 placeholder:text-slate-400"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <Label
                                htmlFor="hero-phone"
                                className="text-[11px] font-semibold tracking-wide text-slate-700"
                              >
                                Mobile
                              </Label>
                              <Input
                                id="hero-phone"
                                placeholder="+91"
                                className="h-9 border-border bg-white text-slate-900 placeholder:text-slate-400"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-[11px] font-semibold tracking-wide text-slate-700">
                                Program
                              </Label>
                              <Select>
                                <SelectTrigger className="h-9 border-border bg-white text-slate-900">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="btech-cse">
                                    B.Tech - CSE
                                  </SelectItem>
                                  <SelectItem value="btech-ece">
                                    B.Tech - ECE
                                  </SelectItem>
                                  <SelectItem value="btech-mech">
                                    B.Tech - MECH
                                  </SelectItem>
                                  <SelectItem value="btech-civil">
                                    B.Tech - CIVIL
                                  </SelectItem>
                                  <SelectItem value="mtech">M.Tech</SelectItem>
                                  <SelectItem value="mba">MBA</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <Button className="w-full h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold mt-1">
                            Submit Enquiry
                          </Button>
                          <p className="text-[10px] text-slate-500 text-center">
                            Our admissions team will contact you with next steps.
                          </p>
                        </form>
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="px-6 pb-6">
                      <div className="rounded-2xl bg-white border border-border p-5 space-y-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                              Campus Gallery
                            </p>
                            <p className="text-sm text-slate-600">
                              Swipe through life at NSRIT.
                            </p>
                          </div>
                          <span className="inline-flex h-7 items-center rounded-full bg-muted px-3 text-[10px] font-semibold text-slate-800">
                            Photos
                          </span>
                        </div>
                        <div className="relative">
                          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
                            {galleryImages.map((img, index) => (
                              <div
                                key={index}
                                className="relative min-w-[180px] h-40 rounded-xl overflow-hidden snap-start group"
                              >
                                <img
                                  src={img}
                                  alt={`Campus view ${index + 1}`}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />
                              </div>
                            ))}
                          </div>
                          <p className="mt-1 text-[11px] text-slate-600">
                            Labs, sports complex, cultural events and student
                            spaces in one view.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="px-6 pb-6">
                      <div className="rounded-2xl bg-white border border-border p-5 space-y-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                              Campus Tour
                            </p>
                            <p className="text-sm text-slate-600">
                              Watch a YouTube-style walkthrough of NSRIT.
                            </p>
                          </div>
                          <span className="inline-flex h-7 items-center rounded-full bg-red-500/90 px-3 text-[10px] font-semibold text-white">
                            Video
                          </span>
                        </div>
                        <div className="relative rounded-xl overflow-hidden bg-black">
                          <div className="aspect-video w-full">
                            <iframe
                              title="NSRIT Campus Tour"
                              src="https://www.youtube.com/embed/3E7hkPZ-HTk"
                              className="h-full w-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-slate-900/80 border-white/20 text-slate-100 hover:bg-slate-800/90" />
                <CarouselNext className="bg-slate-900/80 border-white/20 text-slate-100 hover:bg-slate-800/90" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
