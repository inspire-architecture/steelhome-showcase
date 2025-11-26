import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    gdpr: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdpr) {
      toast.error("Моля, приемете условията за обработка на лични данни");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message
        }
      });

      if (error) {
        console.error("Error sending email:", error);
        toast.error("Възникна грешка при изпращането. Моля, опитайте отново.");
        return;
      }

      toast.success("Вашето запитване е изпратено успешно! Ще се свържем с вас скоро.");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        gdpr: false
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Възникна грешка при изпращането. Моля, опитайте отново.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Контакти</h2>
          <p className="text-lg text-muted-foreground">
            Свържете се с нас за безплатна консултация и оферта
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-6">Изпратете запитване</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Име *
                </label>
                <Input id="name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required placeholder="Вашето име" disabled={isSubmitting} />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон *
                </label>
                <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} required placeholder="+359 ..." disabled={isSubmitting} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Имейл *
                </label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required placeholder="example@email.com" disabled={isSubmitting} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Съобщение
                </label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} placeholder="Опишете вашия проект..." rows={5} disabled={isSubmitting} />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox id="gdpr" checked={formData.gdpr} onCheckedChange={checked => setFormData({
                ...formData,
                gdpr: checked as boolean
              })} disabled={isSubmitting} />
                <label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Съгласен съм моите лични данни да бъдат обработени съгласно GDPR *
                </label>
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Изпращане...
                  </>
                ) : (
                  "Изпрати запитване"
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Телефон
              </h3>
              <div className="space-y-2 mb-6">
                <a href="tel:+359885639136" className="block text-foreground hover:text-primary transition-colors">
                  +359 885 63 91 36
                </a>
                <a href="tel:+359894403069" className="block text-foreground hover:text-primary transition-colors">
                  +359 894 40 30 69
                </a>
              </div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Имейл
              </h3>
              <a href="mailto:info@prefabrikbg.com" className="text-foreground hover:text-primary transition-colors">
                info@prefabrikbg.com
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Адрес
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">София</p>
                  <p className="text-muted-foreground">ул. Асен Йорданов 12</p>
                </div>
                <div>
                  <p className="font-medium">Пловдив</p>
                  <p className="text-muted-foreground">ул. Георги Бенковски 35</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-4">Работно време</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Понеделник - Петък</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Събота</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Неделя</span>
                  <span className="font-medium">Почивен ден</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
