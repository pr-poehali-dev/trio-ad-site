import Icon from "@/components/ui/icon";

const About = () => {
  const team = [
    {
      name: "Анна Козлова",
      role: "Креативный директор",
      experience: "8 лет",
      icon: "Palette",
    },
    {
      name: "Михаил Петров",
      role: "Стратег",
      experience: "6 лет",
      icon: "Target",
    },
    {
      name: "София Иванова",
      role: "Дизайнер",
      experience: "4 года",
      icon: "Sparkles",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            О нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда креативных профессионалов, которые превращают идеи в
            мощные рекламные кампании
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Наш подход
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Креативность
                  </h4>
                  <p className="text-gray-600">
                    Нестандартные решения для каждого проекта
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Результат
                  </h4>
                  <p className="text-gray-600">
                    Фокус на KPI и бизнес-цели клиента
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Партнерство
                  </h4>
                  <p className="text-gray-600">
                    Долгосрочные отношения с клиентами
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-purple-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-gray-600 mb-4">успешных проектов</div>

              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 mb-4">довольных клиентов</div>

              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">лет на рынке</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Команда</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-primary/10 to-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={member.icon as any}
                  size={32}
                  className="text-primary"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h4>
              <p className="text-primary font-medium mb-1">{member.role}</p>
              <p className="text-gray-600 text-sm">Опыт: {member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
