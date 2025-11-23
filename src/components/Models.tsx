import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import construction1 from "@/assets/construction-1.jpg";
import construction2 from "@/assets/construction-2.webp";
import construction3 from "@/assets/construction-3.jpg";

const Models = () => {
  const models = [
    {
      title: "Модел Икономик",
      area: "60-80м²",
      description: "Компактна еднофамилна къща с оптимално разпределение на пространството. Идеална за малки семейства или ваканционни имоти.",
      features: ["2 спални", "1 баня", "Отворена кухня", "Тераса"],
      image: construction1
    },
    {
      title: "Модел Стандарт",
      area: "100-120м²",
      description: "Балансирано решение съчетаващо комфорт и функционалност. Подходяща за семейства търсещи просторен и модерен дом.",
      features: ["3 спални", "2 бани", "Дневна", "Гараж"],
      image: construction2
    },
    {
      title: "Модел Премиум",
      area: "140-180м²",
      description: "Луксозна къща с изискан дизайн и висококачествени материали. Предлага максимален комфорт и простор за цялото семейство.",
      features: ["4 спални", "3 бани", "Кабинет", "Гараж за 2 коли"],
      image: construction3
    },
  ];

  const scrollToPlans = () => {
    const element = document.querySelector("#plans");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="models" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Модели къщи</h2>
          <p className="text-lg text-muted-foreground">
            Предлагаме разнообразие от модели, всеки проектиран да отговаря на различни нужди и бюджети
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl font-bold text-white drop-shadow-lg">
                    {model.area}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                  <p className="text-muted-foreground">{model.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary">Характеристики:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {model.features.map((feature, i) => (
                      <div key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:border-primary" onClick={scrollToPlans}>
                  Виж повече
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
