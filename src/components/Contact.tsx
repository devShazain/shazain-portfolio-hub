
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-portfolio-purple" />,
      title: "Email",
      value: "bmwman435@example.com",
      link: "mailto:bmwman435@example.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-portfolio-purple" />,
      title: "Phone",
      value: "+92 (313) 5359040",
      link: "tel:+923135359040",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-portfolio-purple" />,
      title: "Social",
      value: "@shazain",
      link: "https://www.linkedin.com/in/malikshazain/",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-md reveal">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="button-gradient w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 reveal">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to contact me through any of these methods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-portfolio-purple hover:bg-white transition-all"
                    >
                      <div className="mr-3">{method.icon}</div>
                      <div>
                        <p className="font-medium text-gray-900">{method.title}</p>
                        <p className="text-sm text-gray-600">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-portfolio-purple bg-opacity-10 border-portfolio-purple border-opacity-20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="font-medium text-lg text-portfolio-purple-dark mb-2">
                    Available for Freelance
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Currently accepting new projects and collaborations.
                  </p>
                  <Button className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white">
                    Let's Work Together
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
