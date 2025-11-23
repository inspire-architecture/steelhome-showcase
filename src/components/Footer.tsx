const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/prefabrik-house-logo.png" alt="Prefabrik House" className="h-24 mb-4" />
            <p className="text-sm text-muted-foreground">
              Проектиране и строителство на енергийно ефективни къщи от лека стоманена конструкция.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Бързи връзки</h3>
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
                  <button onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">+359 885 6391 36    </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+359 894 40 30 69     </li>
              <li>info@prefabrikbg.com</li>
              <li>гр. София ул. Асен Йорданов 12
гр. Пловдив, ул. Георги Бенковски 35     

    </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prefabrik House. Всички права запазени.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;