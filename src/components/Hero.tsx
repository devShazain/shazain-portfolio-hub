"use client";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-portfolio-purple">Shazain!</span>
            </h1>
            <p className="text-xl text-gray-700 font-medium">
              Building cool web apps using AI and data so you can get things done faster and smarter.
            </p>
            <div className="flex gap-4 pt-2">
              <Button className="button-gradient" asChild>
                <a href="#projects">My Work</a>
              </Button>
              <Button
                variant="outline"
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 animate-float">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-purple shadow-lg">
              <img
                src="/me.jpg"
                alt="Shazain's Photo"
                className="object-cover w-full h-full animate-float rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-portfolio-peach rounded-full opacity-30 animate-pulse-subtle"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-portfolio-blue rounded-full opacity-30 animate-pulse-subtle"></div>
      </div>
    </section>
  );
};

export default Hero;
