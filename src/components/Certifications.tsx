import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co",
      date: "July 01, 2025",
      description: "Completed hands-on simulation covering project setup, Kafka messaging integration, H2 database configuration, REST API development, and controller implementation.",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_cxSftNyY8gkhcpEb4_1751373437786_completion_certificate.pdf",
    },
    {
      title: "Professional Certificate in DevOps",
      issuer: "MTF",
      date: "July 12, 2025",
      description: "Completed a Professional Certificate in DevOps from MTF Institute, covering core principles of CI/CD, Git Version Control, Conatiners, Configuration Management and Cloud.",
      link: "https://www.udemy.com/certificate/UC-68680607-5184-4a92-8fbd-a20018e70c4c/",
    },
    {
      title: "Preparing Data for Analysis",
      issuer: "Microsoft",
      date: "June 26, 2024",
      description: "Built a strong foundation in preparing, cleaning, and organizing data using Microsoft Excel.",
      link: "https://coursera.org/share/17a17f1e429cad18c9544dfb462a373a",
    },
    {
      title: "Harnessing the Power of Data",
      issuer: "Microsoft",
      date: "Jul 04, 2024",
      description: "Gained hands-on experience in transforming raw data into actionable insights using advanced features in Power BI.",
      link: "https://coursera.org/share/dd0d7bf235a43e08c4dc9e83d5eade94",
    },
    {
      title: "Extract, Transform and Load Data",
      issuer: "Microsoft",
      date: "Jul 17, 2024",
      description: "Gained practical skills in importing, transforming, and preparing data from multiple sources for insightful analysis.",
      link: "https://coursera.org/share/a0a17cd1718dc96d5cc05269a401809d",
    },
    {
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "IBM",
      date: "Jan 30, 2025",
      description: "Gained skills to design effective prompts that generate accurate, relevant, and creative AI-driven outputs with large language models.",
      link: "https://coursera.org/share/fac9ae835c446ce03c7e6d7dc9d3f70e",
    },
    {
      title: "Retrieval Augmented Generation (RAG)",
      issuer: "Coursera Instructor Network",
      date: "jan 30, 2025",
      description: "Core concepts of Retrieval Augmented Generation (RAG) to enhance AI responses with real-time data.",
      link: "https://coursera.org/share/26437fca359bb1c96878b165bdd0db86",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover reveal">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-portfolio-purple-dark">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-portfolio-purple bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-purple">
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                      <line x1="7" y1="2" x2="7" y2="22"></line>
                      <line x1="17" y1="2" x2="17" y2="22"></line>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{cert.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="button-gradient w-full"
                  asChild
                >
                  <a href={cert.link}>View Certificate</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-portfolio-purple-light bg-opacity-30 rounded-xl text-center reveal">
          <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
          <p className="text-gray-700 mb-5">
            I believe in continuous professional development and regularly update my skills with the latest industry certifications and courses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
