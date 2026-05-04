import { Hammer, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-500 pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-16 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center">
                <Hammer className="text-black size-6 stroke-[3]" />
              </div>
              <div>
                <h1 className="text-lg font-black uppercase tracking-tighter text-white leading-none">Rashan</h1>
                <p className="text-[8px] uppercase tracking-[0.4em] text-gray-500 font-bold">Construction</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-xs font-medium">
              Architectural conceptualization to final structural execution. Building high-performance environments since 1999.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-brand-yellow transition-colors"><Facebook className="size-4" /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Twitter className="size-4" /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram className="size-4" /></a>
              <a href="#" className="hover:text-brand-yellow transition-colors"><Linkedin className="size-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-[11px] uppercase tracking-widest font-black">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-brand-yellow transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-brand-yellow transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white mb-8">Intelligence</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] uppercase tracking-widest font-bold">
              <div className="space-y-2">
                <div className="text-brand-yellow">Official HQ</div>
                <div className="text-gray-400 leading-loose">Westlands Business Park, <br />Nairobi, Kenya</div>
              </div>
              <div className="space-y-2">
                <div className="text-brand-yellow">Direct Contact</div>
                <div className="text-gray-400 leading-loose">0745259046 <br /> sospeterokenda@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.2em] font-black">
            © {new Date().getFullYear()} Rashan Engineering Group. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-black">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocols</a>
            <a href="#" className="hover:text-white transition-colors">System Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
