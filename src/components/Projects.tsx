
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "SkillShare",
      description:
        "Engineered a peer-to-peer skill-sharing platform with Firebase-based auth, live chat via Realtime DB, skill matchmaking, and a responsive Tailwind CSS UI. Perfect for connecting learners.",
      image: "bg-gradient-to-br from-blue-400 to-purple-500",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Feedback Portal",
      description:
        "Built a full-stack feedback portal using Django and AngularJS with real-time validation, dynamic previews, CRUD operations, and course-wise grouped report analysis.",
      image: "bg-gradient-to-br from-green-400 to-teal-500",
      tags: ["Django", "AngularJS", "Bootstrap 5"],
      link: "#",
    },
    {
      title: "Google Events Management App",
      description:
        "Developed a seamless event manager with Google Sheets & Calendar API integration, featuring Google Sign-In, full calendar CRUD, and a polished UI for synced event management.",
      image: "bg-gradient-to-br from-orange-400 to-pink-500",
      tags: ["ReactJS", "Google APIs", "Bootstrap 5"],
      link: "#",
    },
    {
      title: "Live MySQL Table Viewer",
      description:
        "Built a real-time React dashboard that auto-refreshes data from MySQL tables every 4 seconds using Fetch API and setInterval for seamless monitoring.",
      image: "bg-gradient-to-br from-purple-400 to-indigo-500",
      tags: ["ReactJS", "MySQL", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Book Store App",
      description:
        "Developed a C# desktop app with full user authentication, book catalog, and admin management features.",
      image: "bg-gradient-to-br from-red-400 to-pink-500",
      tags: ["C#", "XAML"],
      link: "#",
    },
    {
      title: "Property and Land Locator",
      description:
        "Developed a Spring Boot–powered smart land cost estimator that dynamically calculates property prices based on area type and size for accurate buyer insights.",
      image: "bg-gradient-to-br from-cyan-400 to-blue-500",
      tags: ["Java", "Spring Boot"],
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
