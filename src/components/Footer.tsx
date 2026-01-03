const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" }
    ],
    services: [
      { label: "AI & Machine Learning", href: "#services" },
      { label: "Cloud Architecture", href: "#services" },
      { label: "Full-Stack Development", href: "#services" },
      { label: "DevOps & Infrastructure", href: "#services" }
    ],
    resources: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") return;
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-display font-bold text-foreground mb-2">
              <span className="gradient-text">Phaemos</span> Technologies
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming businesses through innovative technology solutions. 
              Your trusted partner in digital transformation.
            </p>
            <div className="text-muted-foreground">
              <p>+233 546906739</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 animated-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Phaemos Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm animated-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm animated-underline">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm animated-underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;