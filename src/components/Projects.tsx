
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS showcasing projects and skills.",
      image: "bg-gradient-to-br from-blue-400 to-purple-500",
      tags: ["React", "Tailwind CSS", "UI/UX"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A full-stack task management application with user authentication and real-time updates.",
      image: "bg-gradient-to-br from-green-400 to-teal-500",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "An e-commerce platform with product management, shopping cart, and payment integration.",
      image: "bg-gradient-to-br from-orange-400 to-pink-500",
      tags: ["React", "Express", "Stripe"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg card-hover reveal"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-white text-lg font-medium">Project Image</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-purple-dark">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-portfolio-purple bg-opacity-10 text-portfolio-purple-dark text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
                  asChild
                >
                  <a href={project.link}>View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <Button className="button-gradient">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
