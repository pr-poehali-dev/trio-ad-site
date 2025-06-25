import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-purple-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-300/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/15 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 animate-fade-in">
            РЕКЛАМНОЕ
            <br />
            <span className="text-primary">АГЕНТСТВО</span>
            <br />
            ТРИО
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-300">
            Создаем яркие кампании, которые запоминаются и работают
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <button
              onClick={scrollToWorks}
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Посмотреть работы
              <Icon name="ArrowRight" size={20} />
            </button>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
                title="Instagram"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
                title="Behance"
              >
                <Icon name="Globe" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
                title="VK"
              >
                <Icon name="Share2" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
