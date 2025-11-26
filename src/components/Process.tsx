import { ArrowRight, ArrowDown } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Консултация",
      description: "Първоначална среща за обсъждане на вашите нужди, предпочитания и бюджет. Оглед на терена и оценка на възможностите."
    },
    {
      number: "02",
      title: "Оферта и договор",
      description: "Получавате детайлна оферта с фиксирана цена. След одобрение подписваме договор с ясни срокове и условия."
    },
    {
      number: "03",
      title: "Проектиране",
      description: "Разработване на архитектурен и конструктивен проект съобразен с вашите изисквания. Избор на материали и довършителни работи."
    },
    {
      number: "04",
      title: "Производство",
      description: "Елементите на конструкцията се произвеждат в нашия завод под строг контрол на качеството."
    },
    {
      number: "05",
      title: "Монтаж",
      description: "Бързо и прецизно изграждане на конструкцията на вашия терен. Монтажът обикновено отнема 2-3 седмици."
    },
    {
      number: "06",
      title: "Довършителни работи",
      description: "Изпълнение на довършителни работи, инсталации и предаване на ключ на готовата къща."
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Процес</h2>
          <p className="text-lg text-muted-foreground">
            От идеята до ключа - прост и прозрачен процес в 6 стъпки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="h-full p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wide text-primary pt-3">
                    Стъпка {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow between steps - horizontal for desktop */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop: horizontal arrows (not on last column) */}
                  {(index % 3 !== 2) && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight size={32} className="text-primary animate-pulse" />
                    </div>
                  )}
                  
                  {/* Desktop: down arrows at end of row */}
                  {(index === 2) && (
                    <div className="hidden lg:flex absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                      <ArrowDown size={32} className="text-primary animate-pulse" />
                    </div>
                  )}
                  
                  {/* Tablet: horizontal arrows (not on last column of 2-col grid) */}
                  {(index % 2 !== 1) && (
                    <div className="hidden md:flex lg:hidden absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight size={32} className="text-primary animate-pulse" />
                    </div>
                  )}
                  
                  {/* Tablet: down arrows at end of row */}
                  {(index === 1 || index === 3) && (
                    <div className="hidden md:flex lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                      <ArrowDown size={32} className="text-primary animate-pulse" />
                    </div>
                  )}
                  
                  {/* Mobile: down arrows */}
                  <div className="flex md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <ArrowDown size={32} className="text-primary animate-pulse" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
