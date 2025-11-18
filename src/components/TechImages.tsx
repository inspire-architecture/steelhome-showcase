import tech1 from "@/assets/tech-1.jpg";
import tech2 from "@/assets/tech-2.png";
import tech3 from "@/assets/tech-3.png";

const TechImages = () => {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <img 
              src={tech1} 
              alt="Лека стоманена конструкция" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <img 
              src={tech2} 
              alt="Детайли на конструкцията" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
            <img 
              src={tech3} 
              alt="Изграждане на къща" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechImages;
