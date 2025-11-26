import { Clock, Zap, DollarSign, Shield, Leaf, Home, CheckCircle2, TrendingUp } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Бързо строителство",
      description: "Строителството отнема 4-6 месеца, спестявайки ви време и пари за наем."
    },
    {
      icon: Zap,
      title: "Енергийна ефективност",
      description: "До 40% по-ниски разходи за отопление и охлаждане благодарение на отличната изолация."
    },
    {
      icon: DollarSign,
      title: "Прозрачна цена",
      description: "Предварително фиксирана цена без скрити разходи и неочаквани доплащания."
    },
    {
      icon: Shield,
      title: "Сеизмична устойчивост",
      description: "Конструкцията е проектирана да издържа на земетресения до 9 степен."
    },
    {
      icon: Leaf,
      title: "Екологичност",
      description: "Използваме рециклируеми материали и минимизираме отпадъците."
    },
    {
      icon: Home,
      title: "Модерен дизайн",
      description: "Съвременна архитектура с възможност за пълна персонализация."
    },
    {
      icon: CheckCircle2,
      title: "Гаранция за качество",
      description: "5 години гаранция на конструкцията и 2 години на инсталациите."
    },
    {
      icon: TrendingUp,
      title: "Добра инвестиция",
      description: "Високо качество на строителството осигурява отлична пазарна стойност."
    },
  ];

  return (
    <section id="advantages" className="py-20 lg:py-32 bg-[hsl(222,47%,11%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Предимства</h2>
          <p className="text-lg text-white/70">
            Защо да изберете къща от лека стоманена конструкция
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-6 bg-white/10 border border-white/20 rounded-xl hover:border-primary/50 hover:shadow-xl transition-all"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                  <advantage.icon size={28} />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">{advantage.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
