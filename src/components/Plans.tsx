import { Check, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      name: "ИКОНОМИК",
      subtitle: "Оптимално решение",
      features: [
        "Площ: 60-80м²",
        "2 спални, 1 баня",
        "Стандартна изолация",
        "Базови довършителни работи",
        "PVC дограма",
        "Метална входна врата",
        "Стандартна покривна конструкция",
        "Основни ел. и ВиК инсталации",
      ],
      highlight: false
    },
    {
      name: "СТАНДАРТ",
      subtitle: "Най-популярен",
      features: [
        "Площ: 100-120м²",
        "3 спални, 2 бани",
        "Подобрена изолация",
        "Качествени довършителни работи",
        "Алуминиева дограма",
        "Блиндирана врата",
        "Керемиден покрив",
        "Пълни ел., ВиК и отоплителни инсталации",
        "Изграден гараж",
      ],
      highlight: true
    },
    {
      name: "ПРЕМИУМ",
      subtitle: "Висок клас",
      features: [
        "Площ: 140-180м²",
        "4 спални, 3 бани",
        "Премиум изолация",
        "Луксозни довършителни работи",
        "Алуминиева дограма - топ качество",
        "Премиум входна врата",
        "Керемиден покрив с хидроизолация",
        "Пълни инсталации + климатизация",
        "Гараж за 2 коли",
        "Довършена тераса/веранда",
      ],
      highlight: false
    },
    {
      name: "ВИП",
      subtitle: "Индивидуален проект",
      features: [
        "Площ: по желание",
        "Брой стаи: по проект",
        "Максимална изолация",
        "Ексклузивни материали",
        "Индивидуален дизайн",
        "Smart home система",
        "Енергия от възобновяеми източници",
        "Озеленяване и ландшафт",
        "Басейн (опция)",
        "Пълно проектно управление",
      ],
      highlight: false
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="plans" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Избери план</h2>
          <p className="text-lg text-muted-foreground">
            Изберете пакет, който отговаря на вашите нужди и бюджет
          </p>
        </div>

        {/* Technical Specifications Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border-2 border-primary/20 rounded-xl p-8 shadow-xl">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-2">План Оптимик</h3>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Технически спецификации</h4>
                <p className="text-muted-foreground">Пълна информация за материали, конструкция и етапи на изграждане</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">Пълен проект с всички части</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">Метална поцинкована конструкция</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">Външни стени 330мм с изолация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">Покрив с мълниезащита</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">ПВЦ/Алуминиева дограма</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">Пълни ел., ВиК и канализация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">5 етапа на плащане</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">Включен фундамент до 30км от София</span>
                </div>
              </div>
            </div>

            <Button 
              variant="default" 
              size="lg"
              className="w-full md:w-auto gap-2"
              onClick={() => window.open('/specifications.html', '_blank')}
            >
              <Download size={20} />
              Изтегли пълните спецификации
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl transition-all ${
                plan.highlight
                  ? "bg-primary/10 border-2 border-primary shadow-2xl scale-105"
                  : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Препоръчан
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={18} className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? "default" : "outline"} 
                className="w-full"
                onClick={scrollToContact}
              >
                Изпрати запитване
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
