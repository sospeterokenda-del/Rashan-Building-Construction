import { motion } from "motion/react";
import { ArrowRight, Drill, Trophy, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-dark">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none dot-pattern" />

      <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-yellow"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-yellow font-black">
                Rashan Building Construction
              </span>
            </div>
            <h1 className="text-6xl md:text-[110px] leading-[0.88] font-black uppercase tracking-tighter text-white transition-all">
              Built on <br />
              <span className="text-brand-yellow">Strength</span> & <br />
              Reliability.
            </h1>
            <div className="mt-12 max-w-lg">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                From architectural conceptualization to final structural execution, we build high-performance environments for corporate and residential clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-10">
                <Button className="bg-brand-yellow hover:bg-white text-black rounded-none h-14 px-10 text-[11px] uppercase tracking-widest font-black transition-all">
                  Our Projects
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none h-14 px-10 text-[11px] uppercase tracking-widest font-black transition-all bg-transparent">
                  Request Estimation
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Side Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-4 space-y-16"
          >
            <div className="border-l-4 border-white/10 pl-8 group">
              <span className="block text-5xl font-black mb-2 transition-colors group-hover:text-brand-yellow text-white">25+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Years Industry Authority</span>
            </div>
            <div className="border-l-4 border-white/10 pl-8 group">
              <span className="block text-5xl font-black mb-2 transition-colors group-hover:text-brand-yellow text-white">500+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Properties Developed</span>
            </div>
            <div className="border-l-4 border-white/10 pl-8 group">
              <span className="block text-5xl font-black mb-2 transition-colors group-hover:text-brand-yellow text-white">100%</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Safety Compliance Rate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
