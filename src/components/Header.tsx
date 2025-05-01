
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="text-2xl font-bold text-primary">
          Chetan Chauhan
        </Link>
        
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
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === "/" 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors ${
              location.pathname === "/about" 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${
              location.pathname === "/contact" 
                ? "text-primary font-medium" 
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </nav>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden">
            <div className="flex flex-col items-center gap-4">
              <Link
                to="/"
                className={`transition-colors ${
                  location.pathname === "/" 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  location.pathname === "/about" 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  location.pathname === "/contact" 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
