
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-portfolio-purple hover:text-portfolio-purple-dark transition-colors"
        >
          Shazain
        </a>

        <div className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              className="hover:bg-portfolio-purple hover:text-white"
              asChild
            >
              <a href={link.href}>{link.name}</a>
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Button
            variant="outline"
            className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
            asChild
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
