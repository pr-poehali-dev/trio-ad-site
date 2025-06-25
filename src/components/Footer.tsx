import Icon from "@/components/ui/icon";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">ТРИО</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Рекламное агентство полного цикла. Создаем кампании, которые
              работают и запоминаются.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200"
              >
                <Icon name="Globe" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200"
              >
                <Icon name="Share2" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200"
              >
                <Icon name="Send" size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Брендинг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Цифровая реклама
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Наружная реклама
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SMM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Event Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                hello@trio-agency.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Тверская, 15
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 ТРИО. Все права защищены.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Icon name="ArrowUp" size={20} />
            Наверх
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
