
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "SkillShare",
      description:
        "Engineered a peer-to-peer skill-sharing platform with Firebase-based auth, live chat via Realtime DB, skill matchmaking, and a responsive Tailwind CSS UI. Perfect for connecting learners.",
      image: "/images/skillshare.jpeg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/devShazain/skill-share",
    },
    {
      title: "Feedback Portal",
      description:
        "Built a full-stack feedback portal using Django and AngularJS with real-time validation, dynamic previews, CRUD operations, and course-wise grouped report analysis.",
      image: "/images/student_feedback_portal.jpeg",
      tags: ["Django", "AngularJS", "Bootstrap 5"],
      link: "https://github.com/devShazain/student_feedback_portal",
    },
    {
      title: "Google Events Management App",
      description:
        "Developed a seamless event manager with Google Sheets & Calendar API integration, featuring Google Sign-In, full calendar CRUD, and a polished UI for synced event management.",
      image: "/images/google-events-app.jpeg",
      tags: ["ReactJS", "Google APIs", "Bootstrap 5"],
      link: "https://github.com/devShazain/google-events-app",
    },
    {
      title: "Live MySQL Table Viewer",
      description:
        "Built a real-time React dashboard that auto-refreshes data from MySQL tables every 4 seconds using Fetch API and setInterval for seamless monitoring.",
      image: "/images/LiveMySQLTable.jpeg",
      tags: ["ReactJS", "MySQL", "Tailwind CSS"],
      link: "https://github.com/devShazain/react-mysql-viewer",
    },
    {
      title: "Book Store App",
      description:
        "Developed a C# desktop app with full user authentication, book catalog, and admin management features.",
      image: "/images/bookstore.jpeg",
      tags: ["C#", "XAML"],
      link: "#",
    },
    {
      title: "Property and Land Locator",
      description:
        "Developed a Spring Boot–powered smart land cost estimator that dynamically calculates property prices based on area type and size for accurate buyer insights.",
      image: "/images/PropertyAndLand.jpeg",
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
              <div className="h-53 flex items-center justify-center bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-full w-full"
                />
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
