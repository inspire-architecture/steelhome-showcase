import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[hsl(222,47%,11%)] border border-white/10 rounded-xl p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">Поверителност</h3>
              <p className="text-sm text-white/70">
                Използваме бисквитки, за да подобрим вашето изживяване на сайта. 
                Научете повече в нашата{" "}
                <Link to="/cookies-policy" className="text-primary hover:underline">
                  Политика за бисквитки
                </Link>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="flex-1 md:flex-none border-white/20 text-white hover:bg-white/10"
              >
                Отказвам
              </Button>
              <Button
                variant="cta"
                size="sm"
                onClick={handleAccept}
                className="flex-1 md:flex-none"
              >
                Приемам
              </Button>
            </div>
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 md:static text-white/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
