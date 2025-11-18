import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
const Plans = () => {
  const plans = [{
    name: "Вип",
    subtitle: "Най-популярен",
    features: ["Площ: 100-120м²", "3 спални, 2 бани", "Подобрена изолация", "Качествени довършителни работи", "Алуминиева дограма", "Блиндирана врата", "Керемиден покрив", "Пълни ел., ВиК и отоплителни инсталации", "Изграден гараж"],
    highlight: true
  }, {
    name: "Премиум",
    subtitle: "Висок клас",
    features: ["Площ: 140-180м²", "4 спални, 3 бани", "Премиум изолация", "Луксозни довършителни работи", "Алуминиева дограма - топ качество", "Премиум входна врата", "Керемиден покрив с хидроизолация", "Пълни инсталации + климатизация", "Гараж за 2 коли", "Довършена тераса/веранда"],
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
          <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-xl">
...
            <Button variant="default" size="default" className="w-full gap-2" onClick={() => window.open('/specifications-standard.html', '_blank')}>
              <Download size={18} />
              Изтегли спецификации
            </Button>
          </div>

          {/* Plan Вип */}
          {plans.map((plan, index) => (
            <div key={index} className={`relative p-6 rounded-xl transition-all ${plan.highlight ? "bg-primary/10 border-2 border-primary shadow-2xl" : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"}`}>
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

              {index === 0 ? (
                <Button variant="default" size="default" className="w-full gap-2" onClick={() => window.open('/specifications-vip-premium.html', '_blank')}>
                  <Download size={18} />
                  Изтегли спецификации
                </Button>
              ) : index === 1 ? (
                <Button variant="default" size="default" className="w-full gap-2" onClick={() => window.open('/specifications-premium.html', '_blank')}>
                  <Download size={18} />
                  Изтегли спецификации
                </Button>
              ) : (
                <Button variant={plan.highlight ? "default" : "outline"} className="w-full" onClick={scrollToContact}>
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