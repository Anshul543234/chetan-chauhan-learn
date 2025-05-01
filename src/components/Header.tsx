
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-bold text-primary">
          Portfolio
        </a>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a href="#contact">
            <Button>Contact</Button>
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden">
            <div className="flex flex-col items-center gap-4">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button>Contact</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
