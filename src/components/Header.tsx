
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Team", id: "team" },
    { label: "Track Record", id: "track-record" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          <span className="text-blue-400">Novel</span> Technologies
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-900 border-slate-700">
            <div className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
