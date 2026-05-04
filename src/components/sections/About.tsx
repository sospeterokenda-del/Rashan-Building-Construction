import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 md:px-16 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-yellow"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-yellow font-black">
                Authority in Engineering
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-none">
              We Build The <span className="text-brand-yellow">Future</span> That Lasts.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              Founded on the principles of integrity and high-quality workmanship, Rashan Building Construction has grown into one of the most respected names in the construction industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                "Certified Engineering Team",
                "Advanced Technology",
                "Global Safety Standards",
                "Transparent Management"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="size-2 bg-brand-yellow flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-[11px] uppercase tracking-widest font-black text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button className="bg-white hover:bg-brand-yellow hover:text-black text-black rounded-none h-16 px-12 text-[12px] uppercase tracking-widest font-black transition-all">
              Our Full Story
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative border-4 border-white/10 p-4 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Construction Leadership"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 bg-brand-yellow p-10 text-black hidden xl:block">
                <div className="text-6xl font-black leading-none">25</div>
                <div className="text-[10px] uppercase font-black tracking-widest mt-2">Years <br /> Prestige</div>
              </div>
            </div>
            <div className="absolute -bottom-12 -left-12 bg-brand-dark border border-white/10 p-8 hidden lg:block shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-full overflow-hidden border-2 border-brand-yellow">
                  <img src="https://i.pravatar.cc/150?u=as" alt="CEO" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <div className="font-black text-white text-xl uppercase tracking-tighter">John Rashan</div>
                  <div className="text-[9px] text-brand-yellow uppercase tracking-[0.3em] font-black">Founder & Visionary</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
