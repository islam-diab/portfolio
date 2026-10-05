import { motion } from "motion/react";
import { Code, Award, Rocket } from "lucide-react";
import { useInView } from "./useInView";
import React from "react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Code,
      title: "2 Years Experience",
      description: "Specializing in Flutter development for enterprise applications",
    },
    {
      icon: Award,
      title: "Clean Architecture",
      description: "Building maintainable and scalable applications with best practices",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient development process with attention to detail",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold mb-2 block">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Professional Background</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Cairo-based Flutter developer with 2 years of experience building
                high-quality mobile applications. My expertise lies in creating robust POS systems
                and e-commerce solutions that help businesses scale efficiently.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in implementing clean architecture patterns, ensuring my applications
                are maintainable, testable, and scalable. From state management with BLoC to
                integrating complex payment gateways, I deliver solutions that meet real-world
                business needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus is on writing clean, efficient code and creating seamless user experiences.
                I'm constantly learning and staying up-to-date with the latest Flutter developments
                to provide the best solutions for my clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
