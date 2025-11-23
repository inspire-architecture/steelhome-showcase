import construction1 from "@/assets/construction-1.jpg";
import construction2 from "@/assets/construction-2.webp";
import construction3 from "@/assets/construction-3.jpg";
import construction4 from "@/assets/construction-4.png";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [{
    location: "София, Драгалевци",
    area: "120м²",
    type: "Еднофамилна къща",
    duration: "5 месеца",
    year: "2023",
    image: construction1
  }, {
    location: "Пловдив, Коматево",
    area: "85м²",
    type: "Ваканционна къща",
    duration: "3 месеца",
    year: "2023",
    image: construction2
  }, {
    location: "Варна, к.к. Златни пясъци",
    area: "150м²",
    type: "Къща за гости",
    duration: "6 месеца",
    year: "2022",
    image: construction3
  }, {
    location: "Банско",
    area: "95м²",
    type: "Планинска къща",
    duration: "4 месеца",
    year: "2024",
    image: construction4
  }];
  return <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Реализирани обекти</h2>
          <p className="text-lg text-muted-foreground">
            Погледнете някои от нашите успешно завършени проекти в цяла България
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.type} в ${project.location}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.location}</h3>
                  <p className="text-sm opacity-90">{project.type}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Площ: </span>
                    <span className="font-medium">{project.area}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Срок: </span>
                    <span className="font-medium text-primary">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Година: </span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;