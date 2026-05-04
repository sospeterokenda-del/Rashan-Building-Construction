import { motion } from "motion/react";
import { Building2, Home, Construction, Ruler, HardHat, Pickaxe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Residential Development",
    description: "Expertly crafted living spaces that combine aesthetic elegance with structural longevity.",
    benefits: ["Custom architectural designs", "Sustainable material sourcing", "Rigorous quality control"],
    icon: Home,
  },
  {
    title: "Corporate Complexes",
    description: "High-performance office environments designed to enhance operational efficiency and brand presence.",
    benefits: ["Smart building integration", "Optimized floor layouts", "Fast-track construction"],
    icon: Building2,
  },
  {
    title: "Industrial Facilities",
    description: "Heavy-duty facility construction for manufacturing, processing, and large-scale logistics hubs.",
    benefits: ["High-load slab engineering", "Specialized utility systems", "Compliance with ISO standards"],
    icon: Pickaxe,
  },
  {
    title: "Urban Infrastructure",
    description: "Essential civil engineering projects that improve city connectivity and communal living standards.",
    benefits: ["Strategic planning", "Environmental impact assessment", "Long-term maintenance"],
    icon: Construction,
  },
  {
    title: "Interior Remodeling",
    description: "Strategic transformations of existing spaces to breathe new life into outdated structures.",
    benefits: ["Premium finishing works", "Space optimization", "Structural integrity validation"],
    icon: Ruler,
  },
  {
    title: "Project Management",
    description: "Strategic oversight that guarantees budgetary adherence and timeline precision for every client.",
    benefits: ["End-to-end transparency", "Procurement management", "Risk mitigation strategies"],
    icon: HardHat,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-brand-dark border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-16 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-yellow"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-yellow font-black">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
              Sectors of <br /><span className="text-brand-yellow">Impact</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 text-sm font-medium hidden md:block">
            Providing end-to-end engineering excellence across a diverse range of structural requirements and scales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-r border-b border-white/10 p-12 hover:bg-white/5 transition-all group relative cursor-pointer min-h-[450px] flex flex-col"
            >
              <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <service.icon className="text-black size-6 stroke-[2.5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-brand-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="text-[10px] uppercase tracking-widest text-white/70 font-bold flex items-center gap-3">
                      <div className="w-1.5 h-[1px] bg-brand-yellow" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-brand-yellow opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                Learn More <ArrowRight className="size-3" />
              </div>

              {/* Decorative Number */}
              <span className="absolute top-12 right-12 text-[10px] font-black text-white/5 tracking-widest group-hover:text-brand-yellow/20 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
