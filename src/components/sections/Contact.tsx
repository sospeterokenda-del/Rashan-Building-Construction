import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none dot-pattern" />

      <div className="container mx-auto px-16 relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Info Side */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-yellow"></div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-brand-yellow font-black">
                Connect With Us
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mt-4 mb-10 leading-none">
              Build Your <br /> <span className="text-brand-yellow">Vision.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-16 max-w-lg leading-relaxed font-medium">
              Every landmark starts with a conversation. Reach out to our engineering experts for a consultation on your next high-performance environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-4">Hotline</div>
                <div className="text-2xl font-black text-white transition-colors group-hover:text-brand-yellow tracking-tighter">
                  0745259046
                </div>
              </div>
              
              <div className="group">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-4">Official Mail</div>
                <div className="text-xl font-black text-white transition-colors group-hover:text-brand-yellow tracking-tighter break-all">
                  sospeterokenda@gmail.com
                </div>
              </div>

              <div className="md:col-span-2 group pt-8 border-t border-white/10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black mb-4 flex items-center gap-3">
                  <MapPin className="size-4 text-brand-yellow" />
                  Location Prestige
                </div>
                <div className="text-2xl font-black text-white leading-tight tracking-tighter max-w-md">
                  Westlands Business Park, 4th Floor Muthithi Road, Nairobi, Kenya
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-12 md:p-16 border-l-8 border-brand-yellow border-t border-r border-b border-white/5 shadow-2xl"
          >
            <div className="mb-12">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Request Briefing</h3>
              <p className="text-gray-500 text-sm italic">Our partners will contact you within 12 standard business hours.</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white block">Identity Name</label>
                <Input placeholder="E.g. Alexander Hamilton" className="h-16 rounded-none bg-white/5 border-none border-b-2 border-white/10 focus:border-brand-yellow focus:ring-0 text-white placeholder:text-gray-600 font-bold" />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white block">Contact Endpoint</label>
                <Input placeholder="Email Address" type="email" className="h-16 rounded-none bg-white/5 border-none border-b-2 border-white/10 focus:border-brand-yellow focus:ring-0 text-white placeholder:text-gray-600 font-bold" />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white block">Structural Inquiry</label>
                <Textarea
                  placeholder="Describe your architectural / engineering requirements..."
                  className="min-h-[120px] rounded-none bg-white/5 border-none border-b-2 border-white/10 focus:border-brand-yellow focus:ring-0 pt-6 text-white placeholder:text-gray-600 font-bold"
                />
              </div>

              <Button size="lg" className="w-full h-16 rounded-none bg-brand-yellow hover:bg-white text-black text-[11px] uppercase tracking-widest font-black transition-all">
                Submit Consultation Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
