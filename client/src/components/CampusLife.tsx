import { motion } from "framer-motion";
import campus1 from "@/assets/campus-life-1.png";
import campus2 from "@/assets/campus-life-2.png";
import campus3 from "@/assets/campus-life-3.png";
import campus4 from "@/assets/campus-life-4.png";

const activities = [
  {
    image: campus1,
    title: "Innovation Hub",
    category: "Research"
  },
  {
    image: campus2,
    title: "Sports Complex",
    category: "Athletics"
  },
  {
    image: campus3,
    title: "Cultural Fest",
    category: "Arts"
  },
  {
    image: campus4,
    title: "Student Center",
    category: "Community"
  }
];

export default function CampusLife() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Life at NSRIT</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">Beyond the Classroom</h2>
            <p className="text-slate-400 text-lg">
              A vibrant campus life that fosters creativity, leadership, and lifelong friendships.
            </p>
          </div>
          <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-slate-900 rounded-full transition-all font-medium">
            Explore Campus Life
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-[500px] md:h-[400px]">
          {activities.map((item, index) => (
            <motion.div 
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-linear-to-t from-black/80 to-transparent">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}