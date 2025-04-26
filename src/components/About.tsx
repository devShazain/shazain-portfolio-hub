
import { Award, Book, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const interests = [
    {
      title: "Technology",
      description: "Passionate about the latest tech trends, software development, and innovative solutions.",
      icon: <Briefcase className="h-10 w-10 text-portfolio-purple" />,
    },
    {
      title: "Education",
      description: "Committed to continuous learning and sharing knowledge with the community.",
      icon: <Book className="h-10 w-10 text-portfolio-purple" />,
    },
    {
      title: "Excellence",
      description: "Strive for excellence in every project and challenge I take on.",
      icon: <Award className="h-10 w-10 text-portfolio-purple" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700">
            I'm a passionate professional dedicated to creating meaningful digital experiences.
            With expertise in multiple disciplines, I bring a unique perspective to every project.
            My goal is to combine creativity with technical skills to deliver exceptional results.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-center mb-10">My Interests</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="card-hover border-portfolio-purple-light border-opacity-40 reveal">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4">{interest.icon}</div>
                <CardTitle>{interest.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-portfolio-purple bg-opacity-5 p-8 rounded-xl border border-portfolio-purple border-opacity-20 reveal">
          <h3 className="text-xl font-bold mb-4 text-center">My Journey</h3>
          <p className="text-gray-700">
            Throughout my professional journey, I've been driven by curiosity and a desire to create impact.
            I've developed a diverse skill set that allows me to approach problems from multiple angles.
            Whether it's developing innovative solutions or exploring creative concepts, I bring dedication and expertise to everything I do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
