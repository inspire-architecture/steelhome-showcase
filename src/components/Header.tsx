import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "За нас", href: "#about" },
    { label: "Технология", href: "#technology" },
    { label: "Модели къщи", href: "#models" },
    { label: "Реализирани обекти", href: "#projects" },
    { label: "Блог", href: "#blog" },
    { label: "Предимства", href: "#advantages" },
    { label: "Процес", href: "#process" },
    { label: "Контакти", href: "#contact" },
    { label: "Избери план", href: "#plans" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <img src="/prefabrik-house-logo.png" alt="Prefabrik House" className="h-16 lg:h-24 object-contain brightness-110" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="cta" onClick={() => scrollToSection("#contact")}>
              Запитване
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button variant="cta" className="mt-2" onClick={() => scrollToSection("#contact")}>
              Запитване
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
