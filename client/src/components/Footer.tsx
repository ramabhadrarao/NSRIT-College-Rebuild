import logo from "@assets/nsrit-logo.svg";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="NSRIT" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Nadimpalli Satyanarayana Raju Institute of Technology is committed to providing quality education and fostering innovation in engineering and technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-slate-900 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-slate-900 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-slate-900 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-slate-900 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Admissions', 'Placements', 'Research', 'Campus Life', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-secondary flex items-center gap-2 transition-colors">
                    <ArrowRight className="h-3 w-3" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-bold mb-6">Departments</h4>
            <ul className="space-y-3 text-sm">
              {['Computer Science', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'MBA'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-secondary flex items-center gap-2 transition-colors">
                    <ArrowRight className="h-3 w-3" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Sontyam, Visakhapatnam,<br />Andhra Pradesh - 531173</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span>+91 891-2792617</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span>info@nsrit.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; 2026 NSRIT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
