import { Link } from "wouter";
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
import logo from "/images/logo-official.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ href, children, hasDropdown = false }: { href: string, children: React.ReactNode, hasDropdown?: boolean }) => (
    <Link href={href}>
      <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-slate-100 rounded-md transition-colors cursor-pointer group relative">
        {children}
        {hasDropdown && <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />}
      </div>
    </Link>
  );

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
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={logo} alt="NSRIT Logo" className="h-14 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                 <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-100 rounded-md transition-colors cursor-pointer group">
                  About Us <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>History</DropdownMenuItem>
                <DropdownMenuItem>Vision & Mission</DropdownMenuItem>
                <DropdownMenuItem>Administration</DropdownMenuItem>
                <DropdownMenuItem>Accreditation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                 <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-100 rounded-md transition-colors cursor-pointer group">
                  Academics <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Departments</DropdownMenuItem>
                <DropdownMenuItem>Programs Offered</DropdownMenuItem>
                <DropdownMenuItem>Academic Calendar</DropdownMenuItem>
                <DropdownMenuItem>Regulations</DropdownMenuItem>
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
