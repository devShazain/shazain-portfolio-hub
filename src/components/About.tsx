import { Award, BarChart, Code, Droplet, RefreshCcw } from "lucide-react"; // Replaced Pool with Droplet
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ShazBot from "./ShazBot"; // <-- Import at the top

const About = () => {
  const interests = [
    {
      title: "Data Cleaning & Transformation",
      description: "Mastering the art of cleaning and transforming data into valuable insights.",
      icon: <RefreshCcw className="h-10 w-10 text-portfolio-purple" />,
    },
    {
      title: "Data Analysis & Visualization",
      description: "Turning raw data into visual stories that drive informed decisions.",
      icon: <BarChart className="h-10 w-10 text-portfolio-purple" />,
    },
    {
      title: "Full Stack Development",
      description: "Building end-to-end solutions, from front-end interfaces to back-end systems.",
      icon: <Code className="h-10 w-10 text-portfolio-purple" />,
    },
    {
      title: "Cross Platform Apps",
      description: "Creating seamless experiences across all devices with cross-platform apps.",
      icon: <Code className="h-10 w-10 text-portfolio-purple" />,
    },
    {
      title: "Swimming",
      description: "A refreshing way to stay fit and clear my mind.",
      icon: <Droplet className="h-10 w-10 text-portfolio-purple" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700 font-normal">
            I'm all about creating smart, seamless experiences that blend creativity with technology. I build modern web and cross-platform apps, using AI and the latest tech to make sure users never waste a second waiting. Whether it's HTML, CSS, React, PHP, Python or diving into data with tools like Power BI. I love bringing ideas to life and uncovering insights that lead to better decisions and even better products.
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

        {/* 👇 Add ShazBot here after About content */}
        <div className="mt-20">
          <ShazBot />
        </div>
      </div>
    </section>
  );
};

export default About;
