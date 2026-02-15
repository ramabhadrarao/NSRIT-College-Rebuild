import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useLocation, useRoute } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const departments = [
  { name: "Civil Engineering", slug: "civil" },
  { name: "Mechanical Engineering", slug: "mechanical" },
  { name: "Electrical & Electronics Engineering", slug: "eee" },
  { name: "Electronics & Communication Engineering", slug: "ece" },
  { name: "Computer Science & Engineering", slug: "cse" },
  { name: "Computer Science & Engineering (AI & ML)", slug: "cse-aiml" },
  { name: "Computer Science & Engineering (DS)", slug: "cse-ds" },
  { name: "S & H (Science & Humanities)", slug: "sh" },
  { name: "MBA", slug: "mba" },
  { name: "MCA", slug: "mca" },
];

const sections = [
  { title: "Department Profile", key: "profile" },
  { title: "Faculty", key: "faculty" },
  { title: "Student’s Corner", key: "students" },
  { title: "Laboratories", key: "labs" },
  { title: "Department Administration", key: "administration" },
  { title: "Research Activities", key: "research" },
  { title: "Industrial Visits", key: "industrial-visits" },
  { title: "Resources", key: "resources" },
  { title: "Advanced Learning", key: "advanced-learning" },
  { title: "Department Gallery", key: "gallery" },
  { title: "Department MOU’S", key: "mous" },
  { title: "Contact us", key: "contact" },
];

function humanize(slug?: string) {
  const d = departments.find((x) => x.slug === slug);
  return d ? d.name : "Department";
}

export default function Department() {
  const [location] = useLocation();
  const [, params] = useRoute("/departments/:dept/:section?");
  const dept = params?.dept || "cse";
  const section = params?.section || "profile";

  const activeClass =
    "bg-primary/10 text-primary border-primary/30";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <header className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-200/90 mb-2">
            Departments
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            {humanize(dept)}
          </h1>
          <p className="text-slate-300 mt-2">
            Explore {humanize(dept)} – curriculum, faculty, labs, and student resources.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          {/* Side Menu */}
          <aside className="bg-white border border-slate-200 rounded-xl shadow-sm p-3">
            <div className="mb-2 px-2">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                {humanize(dept)} Menu
              </p>
            </div>
            <div className="space-y-1">
              {sections.map((s) => (
                <Link key={s.key} href={`/departments/${dept}/${s.key}`}>
                  <div
                    className={cn(
                      "px-3 py-2 rounded-lg cursor-pointer text-sm text-slate-700 hover:bg-slate-100 border border-transparent",
                      section === s.key ? activeClass : ""
                    )}
                  >
                    {s.title}
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          {/* Content */}
          <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                {sections.find((s) => s.key === section)?.title || "Overview"}
              </h2>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Download Brochure
              </Button>
            </div>
            <div className="prose prose-slate max-w-none">
              <p>
                This is a placeholder for the {humanize(dept)} –{" "}
                {sections.find((s) => s.key === section)?.title?.toLowerCase()} section.
                Content and media can be added here as needed.
              </p>
              <p>
                Use the left side menu to navigate to different parts of the department.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
