
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleAdminAccess = () => {
    navigate('/auth');
    setIsOpen(false);
  };

  const handleScheduleCall = () => {
    window.open('tel:+233546906739', '_self');
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Apply", id: "apply" },
    { label: "Team", id: "team" },
    { label: "Expertise", id: "services" },
    { label: "Track Record", id: "track-record" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-white/10 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-display font-bold text-white">
          <span className="gradient-text">Phaemos</span> Technologies
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
          <Button 
            className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white font-semibold px-6 py-2 rounded-xl shadow-lg glow-primary transform hover:scale-105 transition-all duration-200"
            onClick={() => scrollToSection("apply")}
          >
            Join Network
          </Button>
          <Button
            onClick={handleScheduleCall}
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-4 py-2 rounded-xl"
          >
            📞 Schedule Call
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAdminAccess}
            className="text-gray-300 hover:text-blue-400"
            title="Admin Login"
          >
            <Settings className="h-5 w-5" />
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
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white mt-4 rounded-xl"
                onClick={() => scrollToSection("apply")}
              >
                Join Network
              </Button>
              <Button
                onClick={handleScheduleCall}
                className="bg-secondary hover:bg-secondary/90 text-white rounded-xl"
              >
                📞 Schedule Call
              </Button>
              <Button
                variant="ghost"
                onClick={handleAdminAccess}
                className="text-gray-300 hover:text-blue-400 justify-start"
              >
                <Settings className="h-5 w-5 mr-2" />
                Admin Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
