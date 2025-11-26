import { Building2, Users, Award, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[hsl(210,20%,92%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">За нас</h2>
          <p className="text-lg text-muted-foreground">
            Специализирани сме в проектирането и строителството на енергийно ефективни къщи от лека стоманена конструкция
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              С над 10 години опит в строителната индустрия, ние предлагаме иновативни решения за бързо и качествено строителство. Нашият екип от професионалисти работи с най-модерните технологии и материали, за да осигури дълготраен и енергийно ефективен дом.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Всеки проект е внимателно планиран и изпълнен според най-високите стандарти за качество и безопасност. Специализираме се в изграждането на еднофамилни къщи, които съчетават модерен дизайн, функционалност и устойчивост.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <Building2 className="text-primary mb-2" size={32} />
                <div className="text-2xl font-bold">60+</div>
                <div className="text-sm text-muted-foreground">Реализирани проекта</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <Users className="text-primary mb-2" size={32} />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-muted-foreground">Доволни клиенти</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: Award, title: "Сертифициран екип", desc: "Лицензирани специалисти с богат опит" },
              { icon: CheckCircle2, title: "Гаранция за качество", desc: "5 години гаранция на конструкцията" },
              { icon: Building2, title: "Модерни материали", desc: "Използваме най-качествените материали" },
              { icon: Users, title: "Индивидуален подход", desc: "Персонализирани решения за всеки клиент" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
