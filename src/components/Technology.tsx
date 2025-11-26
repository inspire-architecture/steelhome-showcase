import { Hammer, Zap, Shield, Snowflake, Clock, Leaf } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Hammer,
      title: "Лека стоманена конструкция (ЛСК)",
      description: "Модерна система от студенопрофилирани стоманени профили, обезпечаваща висока якост при минимално тегло.",
      tag: "Основна технология"
    },
    {
      icon: Zap,
      title: "Енергийна ефективност",
      description: "Многослойна изолация с минерална вата и полистирен осигурява изключителни топлоизолационни характеристики.",
      tag: "Икономия на енергия"
    },
    {
      icon: Shield,
      title: "Сеизмична устойчивост",
      description: "Конструкцията е проектирана да издържа на високи сеизмични натоварвания благодарение на гъвкавостта на стоманата.",
      tag: "Безопасност"
    },
    {
      icon: Snowflake,
      title: "Термо комфорт",
      description: "Непрекъсната топлоизолация без термомостове гарантира еднаква температура в цялото помещение.",
      tag: "Комфорт"
    },
    {
      icon: Clock,
      title: "Бързо строителство",
      description: "Префабрикацията на елементите в завода позволява монтаж на обекта до 5 пъти по-бързо от традиционното строителство.",
      tag: "Ефективност"
    },
    {
      icon: Leaf,
      title: "Екологичност",
      description: "Използваме рециклируеми материали и минимизираме строителните отпадъци, опазвайки околната среда.",
      tag: "Зелено строителство"
    },
  ];

  return (
    <section id="technology" className="py-20 lg:py-32 bg-[hsl(222,47%,11%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Технология</h2>
          <p className="text-lg text-white/70">
            Използваме най-модерните строителни технологии за създаване на дълготрайни и енергийно ефективни жилища
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 bg-white/10 border border-white/20 rounded-xl hover:border-primary/50 hover:shadow-xl transition-all duration-500 animate-fade-in hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                  <tech.icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wide group-hover:tracking-wider transition-all">
                    {tech.tag}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-primary transition-colors">{tech.title}</h3>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
