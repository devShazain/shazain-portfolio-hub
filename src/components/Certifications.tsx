
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Web Development Mastery",
      issuer: "Tech Academy",
      date: "April 2023",
      description: "Advanced web development techniques including frontend frameworks and responsive design.",
      link: "#",
    },
    {
      title: "UI/UX Design Certification",
      issuer: "Design Institute",
      date: "January 2023",
      description: "Comprehensive training in user experience design, wireframing, and prototyping.",
      link: "#",
    },
    {
      title: "Data Science Fundamentals",
      issuer: "Data Analytics Pro",
      date: "October 2022",
      description: "Foundations of data analysis, visualization, and machine learning algorithms.",
      link: "#",
    },
    {
      title: "Project Management Professional",
      issuer: "PM Institute",
      date: "June 2022",
      description: "Advanced project management methodologies, risk assessment, and team leadership.",
      link: "#",
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
                <Button variant="link" className="px-0 text-portfolio-purple hover:text-portfolio-purple-dark" asChild>
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
          <Button className="button-gradient">
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
