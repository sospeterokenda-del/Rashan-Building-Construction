import { useState, useEffect } from "react";
import { Hammer, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-16 flex items-center justify-between max-w-[1400px]">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center">
            <Hammer className="text-black size-6 stroke-[3]" />
          </div>
          <div className="flex flex-col leading-none">
            <h1 className="text-xl font-black uppercase tracking-tighter text-white">
              RASHAN
            </h1>
            <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-bold">
              Building Construction
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-brand-yellow text-gray-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-white/20 px-6 py-2 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={cn("size-6", (scrolled || isOpen) ? "text-slate-900" : "text-white")} />
          ) : (
            <Menu className={cn("size-6", scrolled ? "text-slate-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-900 hover:text-orange-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full gap-2">
              <Phone className="size-4" />
              Call Us Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
