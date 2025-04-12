"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    {
        name: "Next.js",
        icon: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
    },
    {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
    },
    {
        name: "Tailwind CSS",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    },
    {
        name: "shadcn/ui",
        icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", // unofficial logo
    },
    {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
    },
    {
        name: "Convex",
        icon: "https://avatars.githubusercontent.com/u/81530787?v=4",
    },
    {
        name: "Firebase",
        icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    },
    {
        name: "Vapi",
        icon: "https://vapi.ai/favicon.ico", // or alternative if you have a better one
    },
    {
        name: "Lemon Squeezy",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWm8Ii4M4dO3OkunUpQf1M1G_6_z6jlVzyQ&",
    },
    {
        name: "GetStream.io",
        icon: "https://assets.eaglestatus.io/services/getstream-io.png",
    },
    {
        name: "Google Gemini AI",
        icon: "https://logowik.com/content/uploads/images/google-ai-gemini91216.logowik.com.webp",
    },
    {
        name: "Clerk",
        icon: "https://pipedream.com/s.v0/app_dBhw8k/logo/orig",
    },
    {
        name: "Framer Motion",
        icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png",
    },
];

export function TechStack() {
    return (
        <section id="tech-stack" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Powered by Modern Technology
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Built with the latest and most reliable technologies to ensure the best
                        learning experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 rounded-lg bg-muted/50 group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        >
                            <div className="relative w-16 h-16 mb-4">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-center">{tech.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}