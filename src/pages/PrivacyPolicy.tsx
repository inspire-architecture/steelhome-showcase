import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад към началната страница
          </Button>
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold mb-8">Политика за защита на личните данни</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Въведение</h2>
            <p>
              Prefabrik House се ангажира да защитава личните данни на своите клиенти и посетители на уебсайта. 
              Тази политика обяснява как събираме, използваме и защитаваме вашата лична информация в съответствие 
              с Общия регламент за защита на данните (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Какви данни събираме</h2>
            <p>Може да събираме следните видове лични данни:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Име и фамилия</li>
              <li>Телефонен номер</li>
              <li>Имейл адрес</li>
              <li>Адрес за кореспонденция</li>
              <li>Информация за запитвания и проекти</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Как използваме данните</h2>
            <p>Използваме вашите лични данни за:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Обработка на вашите запитвания и заявки</li>
              <li>Предоставяне на оферти и консултации</li>
              <li>Комуникация относно нашите услуги</li>
              <li>Подобряване на нашия уебсайт и услуги</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Съхранение на данните</h2>
            <p>
              Съхраняваме вашите лични данни само за периода, необходим за изпълнение на целите, за които са събрани, 
              или за спазване на законовите изисквания.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Вашите права</h2>
            <p>Имате право на:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Достъп до вашите лични данни</li>
              <li>Коригиране на неточни данни</li>
              <li>Изтриване на данните ("право да бъдеш забравен")</li>
              <li>Ограничаване на обработката</li>
              <li>Преносимост на данните</li>
              <li>Възражение срещу обработката</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Контакт</h2>
            <p>
              За въпроси относно защитата на личните данни, моля свържете се с нас на:
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

export default PrivacyPolicy;
