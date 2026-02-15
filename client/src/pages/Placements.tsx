import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlacementsComponent from "@/components/Placements";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function PlacementsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Career Development</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training & Placements</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our mission is to ensure every student starts their career with the best opportunities in the industry.
          </p>
        </div>
      </div>

      <PlacementsComponent />

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Placement Statistics 2025-26</h2>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="font-bold text-slate-900">Company Name</TableHead>
                <TableHead className="font-bold text-slate-900">Sector</TableHead>
                <TableHead className="font-bold text-slate-900">Package (LPA)</TableHead>
                <TableHead className="font-bold text-slate-900 text-right">Selects</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Amazon", sector: "IT Product", package: "45.0", selects: 4 },
                { name: "Microsoft", sector: "IT Product", package: "42.0", selects: 2 },
                { name: "Oracle", sector: "IT Product", package: "32.0", selects: 5 },
                { name: "JP Morgan", sector: "FinTech", package: "18.0", selects: 8 },
                { name: "Deloitte", sector: "Consulting", package: "9.0", selects: 24 },
                { name: "TCS Digital", sector: "IT Services", package: "7.5", selects: 45 },
                { name: "Wipro Turbo", sector: "IT Services", package: "6.5", selects: 32 },
                { name: "Infosys", sector: "IT Services", package: "5.0", selects: 120 },
                { name: "Capgemini", sector: "IT Services", package: "4.5", selects: 85 },
                { name: "Tech Mahindra", sector: "IT Services", package: "4.0", selects: 60 },
              ].map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">{row.sector}</Badge>
                  </TableCell>
                  <TableCell className="font-bold text-slate-700">₹ {row.package} LPA</TableCell>
                  <TableCell className="text-right">{row.selects}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Footer />
    </div>
  );
}