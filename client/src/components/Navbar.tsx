import { Link, useLocation } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Menu,
  X,
  Search,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@assets/nsrit-logo.svg";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [location] = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive =
      location === href || (href !== "/" && location.startsWith(href));

    return (
      <Link href={href}>
        <div
          className={cn(
            "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors",
            isActive
              ? "bg-slate-900 text-white shadow-sm"
              : "text-slate-700 hover:text-primary hover:bg-slate-100"
          )}
        >
          {children}
        </div>
      </Link>
    );
  };

  return (
    <div className="w-full z-50 bg-white/95 backdrop-blur border-b border-slate-200 sticky top-0">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto px-4 h-9 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <Phone className="h-3 w-3" /> +91 891-2792617
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <Mail className="h-3 w-3" /> info@nsrit.edu.in
            </span>
            <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <MapPin className="h-3 w-3" /> Visakhapatnam, AP
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-3 pr-4 border-r border-primary-foreground/20">
              <Facebook className="h-3 w-3 cursor-pointer opacity-80 hover:opacity-100" />
              <Twitter className="h-3 w-3 cursor-pointer opacity-80 hover:opacity-100" />
              <Instagram className="h-3 w-3 cursor-pointer opacity-80 hover:opacity-100" />
              <Linkedin className="h-3 w-3 cursor-pointer opacity-80 hover:opacity-100" />
              <Youtube className="h-3 w-3 cursor-pointer opacity-80 hover:opacity-100" />
            </div>
            <div className="flex gap-3">
              <span className="cursor-pointer font-medium opacity-90 hover:opacity-100">
                Alumni
              </span>
              <span className="cursor-pointer font-medium opacity-90 hover:opacity-100">
                Staff Login
              </span>
              <span className="cursor-pointer font-medium opacity-90 hover:opacity-100">
                Pay Fee
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-1">
        <div className="flex justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
              <img
                src={logo}
                alt="NSRIT Logo"
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                 <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-100 rounded-full transition-colors cursor-pointer group">
                  About Us <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900">
                  History
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900">
                  Vision & Mission
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900">
                  Administration
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900">
                  Accreditation
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                 <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-100 rounded-full transition-colors cursor-pointer group">
                  Departments <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[320px] rounded-xl border border-slate-200 shadow-lg p-1">
                <Link href="/departments/civil/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    Civil Engineering
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/mechanical/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    Mechanical Engineering
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/eee/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    Electrical & Electronics Engineering
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/ece/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    Electronics & Communication Engineering
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/cse/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    Computer Science & Engineering
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/cse-aiml/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    Computer Science & Engineering (AI & ML)
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/cse-ds/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    Computer Science & Engineering (DS)
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/sh/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    S & H (Science & Humanities)
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/mba/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    MBA
                  </DropdownMenuItem>
                </Link>
                <Link href="/departments/mca/profile">
                  <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900 rounded-md">
                    MCA
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                 <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-100 rounded-full transition-colors cursor-pointer group">
                  Academics <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900">
                  Programs Offered
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900">
                  Academic Calendar
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm text-slate-700 cursor-pointer hover:bg-slate-100 focus:bg-slate-100 focus:text-slate-900">
                  Regulations
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink href="/admissions">Admissions</NavLink>
            <NavLink href="/placements">Placements</NavLink>
            <NavLink href="/research">Research</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <Button variant="ghost" size="icon" className="ml-2 text-slate-500 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-6 rounded-full shadow-sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-2">
            <Link href="/" className="px-4 py-3 hover:bg-slate-50 rounded-md font-medium text-slate-700">Home</Link>
            <Link href="/about" className="px-4 py-3 hover:bg-slate-50 rounded-md font-medium text-slate-700">About Us</Link>
            <Link href="/academics" className="px-4 py-3 hover:bg-slate-50 rounded-md font-medium text-slate-700">Academics</Link>
                <div className="mt-2 px-2">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Departments</p>
                </div>
                <div className="grid grid-cols-1 gap-1">
                  <Link href="/departments/civil/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">Civil Engineering</Link>
                  <Link href="/departments/mechanical/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">Mechanical Engineering</Link>
                  <Link href="/departments/eee/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">Electrical & Electronics Engineering</Link>
                  <Link href="/departments/ece/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">Electronics & Communication Engineering</Link>
                  <Link href="/departments/cse/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">CSE</Link>
                  <Link href="/departments/cse-aiml/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">CSE (AI & ML)</Link>
                  <Link href="/departments/cse-ds/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">CSE (DS)</Link>
                  <Link href="/departments/sh/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">S & H</Link>
                  <Link href="/departments/mba/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">MBA</Link>
                  <Link href="/departments/mca/profile" className="px-4 py-2 hover:bg-slate-50 rounded-md text-sm text-slate-700">MCA</Link>
                </div>
            <Link href="/admissions" className="px-4 py-3 hover:bg-slate-50 rounded-md font-medium text-slate-700">Admissions</Link>
            <Link href="/placements" className="px-4 py-3 hover:bg-slate-50 rounded-md font-medium text-slate-700">Placements</Link>
            <Link href="/contact" className="px-4 py-3 hover:bg-slate-50 rounded-md font-medium text-slate-700">Contact</Link>
            <Button className="w-full mt-4 bg-primary">Apply Now</Button>
          </div>
        </div>
      )}
    </div>
  );
}
