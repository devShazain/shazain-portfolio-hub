import { Button } from "@/components/ui/button";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-dark-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-portfolio-purple-light mb-2">Shazain</h2>
            <p className="text-gray-300">Creating digital experiences that matter.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="link"
                className="text-gray-300 hover:text-portfolio-purple-light"
                asChild
              >
                <a href={link.href}>{link.name}</a>
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Shazain Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {/* Only LinkedIn and GitHub with real links */}
            <a
              href="https://www.linkedin.com/in/malikshazain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-purple-light transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/devShazain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-portfolio-purple-light transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="link" className="text-portfolio-purple-light hover:text-portfolio-purple p-0" asChild>
            <a href="#home">Back to Top</a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
