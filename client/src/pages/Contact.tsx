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
              <Button className="w-full bg-primary hover:bg-blue-600 text-lg py-6">
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
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
                  <p className="text-slate-500 text-sm">
                    Sontyam, Visakhapatnam,<br />
                    Andhra Pradesh - 531173
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-500 text-sm">
                    +91 891-2792617<br />
                    +91 98765 43210
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-500 text-sm">
                    info@nsrit.edu.in<br />
                    admissions@nsrit.edu.in
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-4">
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

            {/* Map Placeholder */}
            <div className="bg-slate-200 w-full h-64 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                Google Map Integration
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}