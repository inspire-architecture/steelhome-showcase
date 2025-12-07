import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Контакти</h2>
          <p className="text-lg text-muted-foreground">
            Свържете се с нас за безплатна консултация и оферта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-[hsl(222,47%,11%)] border border-white/10 rounded-xl p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Phone className="w-5 h-5" />
              Телефон
            </h3>
            <div className="space-y-2 mb-6">
              <a href="tel:+359885639136" className="block text-white hover:text-primary transition-colors">
                +359 885 63 91 36
              </a>
              <a href="tel:+359894403069" className="block text-white hover:text-primary transition-colors">
                +359 894 40 30 69
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <Mail className="w-5 h-5" />
              Имейл
            </h3>
            <a href="mailto:info@prefabrikbg.com" className="text-white hover:text-primary transition-colors">
              info@prefabrikbg.com
            </a>
          </div>

          <div className="bg-[hsl(222,47%,11%)] border border-white/10 rounded-xl p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
              <MapPin className="w-5 h-5" />
              Адрес
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-white">София</p>
                <p className="text-white/70">ул. Асен Йорданов 12</p>
              </div>
              <div>
                <p className="font-medium text-white">Пловдив</p>
                <p className="text-white/70">ул. Георги Бенковски 35</p>
              </div>
            </div>
          </div>

          <div className="bg-[hsl(222,47%,11%)] border border-white/10 rounded-xl p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Работно време</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Понеделник - Петък</span>
                <span className="font-medium text-white">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Събота</span>
                <span className="font-medium text-white">10:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Неделя</span>
                <span className="font-medium text-white">Почивен ден</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
