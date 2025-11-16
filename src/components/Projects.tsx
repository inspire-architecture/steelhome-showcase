import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      location: "София, Драгалевци",
      area: "120м²",
      type: "Еднофамилна къща",
      duration: "5 месеца",
      year: "2023"
    },
    {
      location: "Пловдив, Коматево",
      area: "85м²",
      type: "Ваканционна къща",
      duration: "3 месеца",
      year: "2023"
    },
    {
      location: "Варна, к.к. Златни пясъци",
      area: "150м²",
      type: "Къща за гости",
      duration: "6 месеца",
      year: "2022"
    },
    {
      location: "Банско",
      area: "95м²",
      type: "Планинска къща",
      duration: "4 месеца",
      year: "2024"
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Реализирани обекти</h2>
          <p className="text-lg text-muted-foreground">
            Погледнете някои от нашите успешно завършени проекти в цяла България
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Локация</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Площ</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Тип</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Срок</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Година</th>
                  <th className="py-4 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b border-border hover:bg-card/50 transition-colors group">
                    <td className="py-4 px-4 font-medium">{project.location}</td>
                    <td className="py-4 px-4 text-muted-foreground">{project.area}</td>
                    <td className="py-4 px-4 text-muted-foreground">{project.type}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {project.duration}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{project.year}</td>
                    <td className="py-4 px-4">
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{project.location}</h3>
                  <ExternalLink size={16} className="text-primary" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Площ: </span>
                    <span>{project.area}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Тип: </span>
                    <span>{project.type}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Срок: </span>
                    <span className="text-primary">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Година: </span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
