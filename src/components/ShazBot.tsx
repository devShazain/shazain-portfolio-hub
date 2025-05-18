
"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const ShazBot = () => {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
        { sender: "bot", text: "Hello! I'm ShazBot. Feel free to ask me anything about Shazain!" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // to control visibility of ShazBot

    const predefinedQA: { question: string; answer: string }[] = [
        { question: "hi", answer: "Hello there! 👋 How can I assist you today?" },
        { question: "hello", answer: "Hi! Feel free to ask me anything about Shazain." },
        { question: "how are you", answer: "I'm doing great, thanks for asking! How can I help you?" },
        { question: "what do you do", answer: "Shazain builds smart web and cross-platform apps, blending creativity with AI and the latest tech trends." },
        { question: "what languages do you know", answer: "I've worked with C++, Java, JavaScript, React, Python, Node.js, AngularJS, and more. But honestly, what's more important is how you express a problem — I'm here to craft the solution." },
        { question: "what frameworks do you use", answer: "From React and Node.js to AngularJS and beyond — Shazain loves using the right tools to fit the project needs." },
        { question: "what is your expertise", answer: "My expertise spans full-stack web development, cross-platform apps, data analysis, and leveraging AI for smarter solutions." },
        { question: "what language do you prefer", answer: "I enjoy using JavaScript for front-end, Python for back-end, and C++ when I need performance." },
        { question: "what languages have you worked with", answer: "I have worked with JavaScript, Python, C++, Java, Node.js, React, Angular, and more depending on the project needs." },
        { question: "do you do data analysis", answer: "Absolutely! Cleaning data, transforming it, visualizing trends — I enjoy making data tell its story." },
        { question: "do you know power bi", answer: "Yes! Power BI is a great tool for creating intuitive data visualizations and uncovering insights." },
        { question: "do you build apps", answer: "Yes, I build web apps and cross-platform apps that run seamlessly across devices, combining performance with clean design." },
        { question: "what makes you different", answer: "I don’t just write code — I think about the user experience, the business impact, and the future growth of every project I touch." },
        { question: "do you use ai", answer: "Yes, I blend AI into my work to create smarter, faster, and more personalized experiences." },
        { question: "do you work with python", answer: "Definitely! Python is one of my favorite languages for backend development and data tasks." },
        { question: "how do you approach new technologies", answer: "I stay curious, adaptable, and dive deep into understanding how new tech can solve real problems." },
        { question: "do you have experience with c#", answer: "Yes, I have worked with C# on different projects — it's a powerful language especially for backend systems and desktop apps." },
        { question: "what about java", answer: "Java has been a strong foundation for me in object-oriented programming and building robust applications." },
        { question: "what type of projects have you worked on", answer: "From portfolio websites to data-driven dashboards to cross-platform apps — I love taking ideas from scratch to real, usable products." },
        { question: "can you do freelance work", answer: "Absolutely! While being a full-time university student keeps me busy, I'm fully open to freelance and part-time opportunities. I’m committed to delivering professional, reliable results." },
        { question: "are you available for projects", answer: "Yes, I am! Feel free to reach out and discuss what you have in mind." },
        { question: "what motivates you", answer: "Problem-solving, creativity, and the chance to build things that make people's lives easier — that’s what keeps me excited every day." },
        { question: "what is your biggest strength", answer: "Combining technical skills with a strong sense of design and empathy for users — I bridge the gap between code and real-world needs." },
        { question: "what industries are you interested in", answer: "I'm passionate about tech, education, health, and any sector where innovation can create real impact." },
        { question: "can you handle multiple technologies", answer: "Yes! I love connecting different technologies and making them work together smoothly for the best solution." },
        { question: "do you work on side projects", answer: "Always! Personal projects are where I experiment, learn faster, and stay ahead in this ever-evolving tech world." },
    ];

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const userInput = newMessage.text.toLowerCase();
            const match = predefinedQA.find((qa) => userInput.includes(qa.question));
            if (match) {
                setMessages((prev) => [...prev, { sender: "bot", text: match.answer }]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { sender: "bot", text: "I'm not sure about that. You can email Shazain directly at " },
                    { sender: "bot", text: <a href="mailto:your-email@example.com" className="text-portfolio-purple hover:underline">your-email@example.com</a> as any }, // Update email
                ]);
            }
            setIsTyping(false);
        }, 800);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    const toggleChatVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-portfolio-purple text-white flex items-center justify-center cursor-pointer z-50" onClick={toggleChatVisibility}>
                <span className="text-3xl">💬</span>
            </div>
            {isVisible && (
                <div className="fixed bottom-10 right-10 w-80 bg-white shadow-lg rounded-xl overflow-hidden border border-gray-300 z-50">
                    <div className="bg-portfolio-purple text-white text-center py-3 font-bold relative">
                        ShazBot
                        <button 
                            onClick={toggleChatVisibility} 
                            className="absolute right-2 top-2.5 text-white hover:text-gray-200 transition-colors"
                            aria-label="Close chat"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="p-4 h-96 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <Card className={`p-2 max-w-xs ${msg.sender === "user" ? "bg-portfolio-purple-light text-white" : "bg-gray-100 text-gray-800"}`}>
                                    {msg.text}
                                </Card>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex items-center space-x-1 text-gray-400 text-sm">
                                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.15s]"></div>
                                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.30s]"></div>
                            </div>
                        )}
                    </div>

                    <div className="p-2 border-t flex">
                        <input
                            className="flex-1 px-3 py-2 text-sm border rounded-l focus:outline-none"
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className="bg-portfolio-purple text-white px-4 rounded-r hover:bg-portfolio-purple-light transition-colors"
                            onClick={handleSend}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ShazBot;
