import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
const Plans = () => {
  const plans = [{
    name: "Вип",
    subtitle: "Най-популярен",
    features: [
      "Първи етаж: циментова замазка до 5 см, XPS 5 см",
      "Външни стени 330мм: латекс, гипсокартон 25мм, фасадна силиконова мазилка",
      "Вътрешни стени 139мм: латекс, гипсокартон 25мм",
      "Таван: латекс, окачен гипсокартон 12.5мм, минерална вата 25см",
      "Покрив до 20° със стрехи до 70см",
      "Мокри помещения: влагоустойчив гипсокартон, хидроизолация",
      "Алуминиева дограма с троен стъклопакет",
      "Блиндирана входна врата, МДФ интериорни врати",
      "Обзавеждане с мебели по поръчка",
      "Включен бетонов фундамент"
    ],
    highlight: true
  }, {
    name: "Премиум",
    subtitle: "Висок клас",
    features: [
      "Първи етаж: циментова замазка до 5 см, XPS 5 см",
      "Външни стени 330мм: латекс, гипсокартон 25мм, фасадна силиконова мазилка",
      "Вътрешни стени 139мм: латекс, гипсокартон 25мм",
      "Таван: латекс, окачен гипсокартон 12.5мм, минерална вата 25см",
      "Покрив до 20° със стрехи до 70см",
      "Мокри помещения: влагоустойчив гипсокартон, хидроизолация",
      "Алуминиева дограма с троен стъклопакет",
      "Блиндирана входна врата, МДФ интериорни врати",
      "Включен бетонов фундамент"
    ],
    highlight: false
  }];
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="plans" className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Избери план</h2>
          <p className="text-lg text-muted-foreground">
            Изберете пакет, който отговаря на вашите нужди и бюджет
          </p>
        </div>

        {/* Technical Specifications Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {/* Plan Optimik */}
          <div className="bg-card border-2 border-primary/20 rounded-xl p-4 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-1">Икономик</h3>
              <p className="text-xs text-muted-foreground">Бюджетен вариант</p>
            </div>
            <div className="flex items-start gap-3 mb-4">
              
              <div>
                <h4 className="text-base font-bold mb-1">Технически спецификации</h4>
                <p className="text-xs text-muted-foreground">
              </p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Първи етаж: циментова замазка до 5 см, XPS 5 см</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Външни стени 330мм: латекс, гипсокартон 25мм, фасадна силиконова мазилка</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Вътрешни стени 139мм: латекс, гипсокартон 25мм</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Таван: латекс, окачен гипсокартон 12.5мм, минерална вата 25см</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Покрив до 20° със стрехи до 70см</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Мокри помещения: влагоустойчив гипсокартон, хидроизолация</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Алуминиева дограма с троен стъклопакет</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Блиндирана входна врата, МДФ интериорни врати</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Включен бетонов фундамент</span>
              </div>
              
            </div>

            <Button variant="default" size="sm" className="w-full gap-2" onClick={() => window.open('/specifications.html', '_blank')}>
              <Download size={16} />
              Изтегли спецификации
            </Button>
          </div>

          {/* Plan Standard */}
          <div className="bg-card border-2 border-primary rounded-xl p-4 shadow-xl relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              Препоръчан
            </div>
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold mb-1">Стандарт</h3>
              <p className="text-xs text-muted-foreground">Основен вариант</p>
            </div>
            <div className="flex items-start gap-3 mb-4">
              
              <div>
                
                
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Първи етаж: циментова замазка до 5 см, XPS 5 см</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Външни стени 330мм: латекс, гипсокартон 25мм, фасадна силиконова мазилка</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Вътрешни стени 139мм: латекс, гипсокартон 25мм</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Таван: латекс, окачен гипсокартон 12.5мм, минерална вата 25см</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Покрив до 20° със стрехи до 70см</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Мокри помещения: влагоустойчив гипсокартон, хидроизолация</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Алуминиева дограма с троен стъклопакет</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Блиндирана входна врата, МДФ интериорни врати</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary flex-shrink-0" />
                <span className="text-xs">Включен бетонов фундамент</span>
              </div>
            </div>

            <Button variant="default" size="sm" className="w-full gap-2" onClick={() => window.open('/specifications-standard.html', '_blank')}>
              <Download size={16} />
              Изтегли спецификации
            </Button>
          </div>

          {/* Plan Вип */}
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${plan.highlight ? "bg-primary/10 border-2 border-primary shadow-2xl" : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"}`}
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Препоръчан
                </div>
              )}
              
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={14} className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className="text-xs leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {index === 0 ? (
                <Button variant="default" size="sm" className="w-full gap-2" onClick={() => window.open('/specifications-vip-premium.html', '_blank')}>
                  <Download size={16} />
                  Изтегли спецификации
                </Button>
              ) : index === 1 ? (
                <Button variant="default" size="sm" className="w-full gap-2" onClick={() => window.open('/specifications-premium.html', '_blank')}>
                  <Download size={16} />
                  Изтегли спецификации
                </Button>
              ) : (
                <Button variant={plan.highlight ? "default" : "outline"} size="sm" className="w-full" onClick={scrollToContact}>
                  Изпрати запитване
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Plans;