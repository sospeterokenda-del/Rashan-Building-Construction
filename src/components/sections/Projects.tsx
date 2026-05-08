import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Skyline Corporate Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "A 24-story architectural marvel featuring glass facade and eco-friendly systems.",
  },
  {
    title: "The Zenith Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7e099?auto=format&fit=crop&q=80&w=800",
    description: "Luxury apartment complex with integrated smart home technology and premium amenities.",
  },
  {
    title: "Metropolitan Hospital",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    description: "Modern healthcare facility designed for efficiency, hygiene, and patient comfort.",
  },
  {
    title: "Urban Green Mall",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800",
    description: "High-traffic retail destination focused on sustainable design and open-air spaces.",
  },
  {
    title: "Ocean View Villas",
    category: "Luxury Home",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Private oceanfront estate featuring infinity pools and contemporary Mediterranean style.",
  },
  {
    title: "Innovation Bridge",
    category: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1545143333-640375b4715f?auto=format&fit=crop&q=80&w=800",
    description: "Infrastructure project connecting the new tech district with the city center.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-6 md:px-16 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-yellow"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-yellow font-black">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
              Landmarks of <br /> <span className="text-brand-yellow">Excellence.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-[10px] uppercase tracking-widest font-black text-brand-yellow border-b-2 border-brand-yellow rounded-none hover:bg-transparent hover:text-brand-yellow">All Projects</Button>
            <Button variant="ghost" className="text-[10px] uppercase tracking-widest font-black text-gray-500 hover:text-white rounded-none hover:bg-transparent">Commercial</Button>
            <Button variant="ghost" className="text-[10px] uppercase tracking-widest font-black text-gray-500 hover:text-white rounded-none hover:bg-transparent">Residential</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] bg-brand-dark border-r border-b border-white/10 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4 p-8 bg-brand-dark border border-white/10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-yellow">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-4">{project.title}</h3>
                <Button variant="link" className="p-0 h-auto text-[10px] uppercase tracking-widest font-black text-brand-yellow gap-2 overflow-hidden group/btn hover:text-white hover:no-underline">
                  Explore Project <ArrowRight className="size-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
