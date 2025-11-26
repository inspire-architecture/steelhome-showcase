import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-[hsl(222,47%,11%)] border-t border-white/10 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/prefabrik-house-logo.png" alt="Prefabrik House" className="h-24 mb-4" />
            <p className="text-sm text-white/70">
              Проектиране и строителство на енергийно ефективни къщи от лека стоманена конструкция.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Бързи връзки</h3>
            <ul className="space-y-2 text-sm">
              {[{
              label: "За нас",
              href: "#about"
            }, {
              label: "Технология",
              href: "#technology"
            }, {
              label: "Модели",
              href: "#models"
            }, {
              label: "Процес",
              href: "#process"
            }].map(link => <li key={link.href}>
                  <button onClick={() => scrollToSection(link.href)} className="text-white/70 hover:text-primary transition-colors">
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Контакти</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-semibold text-base text-white">+359 885 63 91 36</li>
              <li className="font-semibold text-base text-white">+359 894 40 30 69</li>
              <li className="text-white/70 mt-4">info@prefabrikbg.com</li>
              <li className="text-white/70">гр. София, ул. Асен Йорданов 12</li>
              <li className="text-white/70">гр. Пловдив, ул. Георги Бенковски 35</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Prefabrik House. Всички права запазени.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Лични данни
            </Link>
            <Link to="/cookies-policy" className="hover:text-primary transition-colors">
              Политика за бисквитки
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;