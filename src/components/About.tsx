import { Database, Code, BarChart, Activity, Waves } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const interests = [
    {
      title: "Data Cleaning & Transformation",
      description: "Transforming raw data into meaningful insights, ensuring accuracy and reliability for robust decision-making.",
      icon: <Database className="h-10 w-10 text-portfolio-purple" />
    },
    {
      title: "Data Analysis & Visualization",
      description: "Uncovering hidden patterns and telling compelling stories through data with Power BI and advanced analytics.",
      icon: <BarChart className="h-10 w-10 text-portfolio-purple" />
    },
    {
      title: "Full Stack Web Development",
      description: "Creating seamless, responsive web applications using the MERN stack, bridging design and functionality.",
      icon: <Code className="h-10 w-10 text-portfolio-purple" />
    },
    {
      title: "Cross-Platform App Development",
      description: "Building versatile mobile applications with React Native, ensuring consistent experience across different platforms.",
      icon: <Activity className="h-10 w-10 text-portfolio-purple" />
    },
    {
      title: "Swimming",
      description: "Keeps my mind fresh, body active, and helps me generate creative ideas through disciplined training.",
      icon: <Waves className="h-10 w-10 text-portfolio-purple" />
    }
  ];

  return <section id="about" className="section-padding bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="section-title">About Me</h2>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700 font-normal">I'm all about creating smart, seamless experiences that blend creativity with technology. I build modern web and cross-platform apps, using AI and the latest tech to make sure users never waste a second waiting. Whether it's HTML, CSS, React, PHP, Python or diving into data with tools like Power BI. I love bringing ideas to life and uncovering insights that lead to better decisions and even better products.</p>
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

      <div className="mt-16 bg-portfolio-purple bg-opacity-5 p-8 rounded-xl border border-portfolio-purple border-opacity-20 reveal hover:bg-opacity-10 transition-all duration-300">
        <h3 className="text-xl font-bold mb-4 text-center">My Journey</h3>
        <p className="text-gray-700 leading-relaxed">
          When I first started my Bachelor's in Computer Science, coding wasn't really my thing. I was way more fascinated by data how you can dig into numbers and uncover real stories. So naturally, I spent more time exploring data analysis than writing lines of code.
          <br /><br />
          But over the years, working with languages like C++, C#, Java, JavaScript, React, Python, XML, XAML and much more something clicked. I realized development is the real crux of tech and if I truly wanted to build meaningful solutions, I had to master both worlds.
          <br /><br />
          Today, I design and develop web apps and cross-platform apps, handling complete frontend and backend workflows. I love blending creativity with AI to work smarter, getting the most out of every project in less time. And even now, my passion for playing with data and extracting meaningful insights hasn't gone anywhere it's just evolved alongside everything else I've learned.
          <br /><br />
          Always building, always learning and always excited for what's next.
        </p>
      </div>

      <div className="mt-12 p-8 bg-portfolio-purple-light bg-opacity-30 rounded-xl text-center reveal">
        <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
        <p className="text-gray-700 mb-5">
          I believe in continuous professional development and regularly update my skills with the latest industry certifications and courses.
        </p>
      </div>
    </div>
  </section>;
};

export default About;
