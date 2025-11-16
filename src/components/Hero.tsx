import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24 pb-12 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50 -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Бърза, устойчива и енергийно ефективна къща за{" "}
                <span className="text-primary">месеци</span>, не за години.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Цялостна услуга - проектиране, изграждане на фундамент, производство и монтаж на къщи и модулни сгради от лека стоманена конструкция (ЛСК).
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Clock, text: "До 5 пъти по-бързо строителство" },
                { icon: TrendingUp, text: "Висока енергийна ефективност" },
                { icon: Award, text: "Точна цена без скрити разходи" },
                { icon: CheckCircle2, text: "Дълъг живот, минимална поддръжка" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <span className="text-foreground pt-2">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" onClick={() => scrollToSection("#models")}>
                Разгледай проекти
              </Button>
              <Button size="lg" variant="cta" onClick={() => scrollToSection("#contact")}>
                Изпрати запитване
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-border">
              {[
                { value: "10+", label: "г. опит" },
                { value: "60+", label: "къщи" },
                { value: "30-40%", label: "по-ниски сметки" },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Modern Prefab House" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Info tags */}
              <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                <div className="text-xs text-muted-foreground">Модел</div>
                <div className="font-semibold">Премиум 120м²</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
                <div className="text-xs text-muted-foreground">Срок</div>
                <div className="font-semibold text-primary">4-6 месеца</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
