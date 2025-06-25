import Icon from "@/components/ui/icon";

const Clients = () => {
  const clients = [
    { name: "TechStart", logo: "💻", color: "bg-blue-100 text-blue-600" },
    { name: "FoodChain", logo: "🍕", color: "bg-orange-100 text-orange-600" },
    { name: "AutoPro", logo: "🚗", color: "bg-gray-100 text-gray-600" },
    { name: "BeautyBrand", logo: "💄", color: "bg-pink-100 text-pink-600" },
    { name: "SportClub", logo: "⚽", color: "bg-green-100 text-green-600" },
    { name: "EcoStore", logo: "🌱", color: "bg-emerald-100 text-emerald-600" },
    { name: "FinanceBank", logo: "💳", color: "bg-indigo-100 text-indigo-600" },
    { name: "HealthCare", logo: "🏥", color: "bg-red-100 text-red-600" },
    { name: "EduTech", logo: "📚", color: "bg-purple-100 text-purple-600" },
    { name: "TravelCo", logo: "✈️", color: "bg-cyan-100 text-cyan-600" },
    { name: "RealEstate", logo: "🏢", color: "bg-yellow-100 text-yellow-600" },
    { name: "MediaGroup", logo: "📺", color: "bg-rose-100 text-rose-600" },
  ];

  const testimonials = [
    {
      text: "ТРИО превратили нашу идею в вирусную кампанию. Результат превзошел все ожидания!",
      author: "Анна Смирнова",
      company: "TechStart",
      rating: 5,
    },
    {
      text: "Профессиональный подход и креативные решения. Рекомендуем всем!",
      author: "Михаил Козлов",
      company: "AutoPro",
      rating: 5,
    },
    {
      text: "Благодаря ТРИО наш бренд стал узнаваемым в соцсетях за 2 месяца.",
      author: "София Петрова",
      company: "BeautyBrand",
      rating: 5,
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши клиенты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 50 компаний доверили нам свои проекты и остались довольны
            результатом
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`${client.color} rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 cursor-pointer group`}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {client.logo}
              </div>
              <div className="text-sm font-medium opacity-80">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Отзывы клиентов
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-purple-50 to-primary/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Готовы стать нашим следующим успешным кейсом?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами и обсудим ваш проект
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Обсудить проект
            <Icon name="ArrowRight" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
