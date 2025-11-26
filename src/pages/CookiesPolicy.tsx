import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад към началната страница
          </Button>
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Политика за бисквитки</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Какво са бисквитките?</h2>
            <p>
              Бисквитките (cookies) са малки текстови файлове, които се съхраняват на вашето устройство, 
              когато посещавате нашия уебсайт. Те ни помагат да осигурим по-добро потребителско изживяване 
              и да анализираме как се използва сайтът.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Видове бисквитки, които използваме</h2>
            
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Необходими бисквитки</h3>
            <p>
              Тези бисквитки са необходими за функционирането на уебсайта. Без тях сайтът не може да работи правилно.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Аналитични бисквитки</h3>
            <p>
              Използваме аналитични бисквитки, за да разберем как посетителите използват нашия уебсайт. 
              Това ни помага да подобрим съдържанието и функционалността на сайта.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Функционални бисквитки</h3>
            <p>
              Тези бисквитки позволяват на уебсайта да запомни вашите предпочитания и да ви предостави 
              персонализирани функции.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Как да управлявате бисквитките</h2>
            <p>
              Можете да контролирате и/или изтривате бисквитките по ваше желание. Повечето уеб браузъри 
              автоматично приемат бисквитки, но можете да промените настройките на браузъра си, за да 
              откажете бисквитките, ако предпочитате.
            </p>
            <p className="mt-2">
              Имайте предвид, че деактивирането на бисквитките може да повлияе на функционалността на 
              уебсайта и да ограничи достъпа ви до някои функции.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Бисквитки на трети страни</h2>
            <p>
              В някои случаи използваме бисквитки от трети страни за анализ и маркетинг. Тези бисквитки 
              се управляват от съответните трети страни и са предмет на техните политики за поверителност.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Контакт</h2>
            <p>
              Ако имате въпроси относно нашата политика за бисквитки, моля свържете се с нас на:
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Имейл:</strong> info@prefabrikbg.com<br />
              <strong className="text-foreground">Телефон:</strong> +359 885 63 91 36
            </p>
          </section>

          <p className="text-sm mt-8">
            Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
