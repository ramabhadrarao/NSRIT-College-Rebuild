import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our admissions team or visit our campus.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Subject</label>
                <Input placeholder="Admissions Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
                  <p className="text-slate-500 text-sm">
                    Sontyam, Visakhapatnam,<br />
                    Andhra Pradesh - 531173
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-500 text-sm">
                    +91 891-2792617<br />
                    +91 98765 43210
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-500 text-sm">
                    info@nsrit.edu.in<br />
                    admissions@nsrit.edu.in
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Office Hours</h3>
                  <p className="text-slate-500 text-sm">
                    Mon - Sat: 9:00 AM - 5:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Campus Location</h3>
                <a
                  href="https://www.google.com/maps/place/Nadimpalli+Satyanarayana+Raju+Institute+of+Technology/@17.870221,83.295762,2889m/data=!3m1!1e3!4m6!3m5!1s0x3a395ef6fb8b00c3:0xf05a9687dfa65d34!8m2!3d17.8702205!4d83.2957622!16s%2Fg%2F11g_l44fm?hl=en&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    className="rounded-full border-slate-200 text-slate-800 hover:bg-slate-50 h-10 px-5 text-sm font-semibold"
                  >
                    Open in Google Maps
                  </Button>
                </a>
              </div>
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  title="NSRIT Location Map"
                  src="https://www.google.com/maps?q=17.8702205,83.2957622&hl=en&z=16&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
