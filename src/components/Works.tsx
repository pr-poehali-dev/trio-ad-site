import Icon from "@/components/ui/icon";

const Works = () => {
  const works = [
    {
      title: "Кампания для TechStart",
      category: "Цифровая реклама",
      description: "Увеличили конверсию на 300% через креативную видеорекламу",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      socialStats: {
        likes: "24.5K",
        shares: "1.2K",
        comments: "856",
      },
      platform: "Instagram",
    },
    {
      title: "Ребрендинг FoodChain",
      category: "Брендинг",
      description:
        "Полная трансформация визуальной идентичности сети ресторанов",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      socialStats: {
        likes: "18.2K",
        shares: "945",
        comments: "634",
      },
      platform: "Behance",
    },
    {
      title: "Outdoor для AutoPro",
      category: "Наружная реклама",
      description: "Серия билбордов, которая стала вирусной в соцсетях",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      socialStats: {
        likes: "31.7K",
        shares: "2.1K",
        comments: "1.2K",
      },
      platform: "VK",
    },
    {
      title: "Интеграция для BeautyBrand",
      category: "Influencer Marketing",
      description: "Коллаборация с 15 блогерами и 5M+ охват аудитории",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
      socialStats: {
        likes: "42.3K",
        shares: "3.5K",
        comments: "2.1K",
      },
      platform: "TikTok",
    },
    {
      title: "Event для SportClub",
      category: "Event Marketing",
      description: "Организация и продвижение спортивного мероприятия",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      socialStats: {
        likes: "15.8K",
        shares: "892",
        comments: "543",
      },
      platform: "YouTube",
    },
    {
      title: "Digital для EcoStore",
      category: "Контент-маркетинг",
      description: "Экологичный контент, который увеличил продажи на 250%",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      socialStats: {
        likes: "27.1K",
        shares: "1.8K",
        comments: "967",
      },
      platform: "Instagram",
    },
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram":
        return "Instagram";
      case "Behance":
        return "Globe";
      case "VK":
        return "Share2";
      case "TikTok":
        return "Video";
      case "YouTube":
        return "Play";
      default:
        return "Globe";
    }
  };

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый проект — это история успеха, подкрепленная цифрами из
            социальных сетей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {work.category}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Icon
                    name={getPlatformIcon(work.platform) as any}
                    size={16}
                    className="text-white"
                  />
                  <span className="text-white text-sm font-medium">
                    {work.platform}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4">{work.description}</p>

                {/* Social Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Icon name="Heart" size={14} />
                    <span>{work.socialStats.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Share" size={14} />
                    <span>{work.socialStats.shares}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MessageCircle" size={14} />
                    <span>{work.socialStats.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Посмотреть все проекты
            <Icon name="ExternalLink" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
