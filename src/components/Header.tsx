import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">ТРИО</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Наши работы
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Клиенты
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-primary transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("works")}
                className="text-left text-gray-700 hover:text-primary transition-colors"
              >
                Наши работы
              </button>
              <button
                onClick={() => scrollToSection("clients")}
                className="text-left text-gray-700 hover:text-primary transition-colors"
              >
                Клиенты
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
