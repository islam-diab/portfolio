import { motion } from "motion/react";
import { Code, Award, Rocket } from "lucide-react";
import { useInView } from "./useInView";
import React from "react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Code,
      title: "4 Apps in Production",
      description: "Citadel, Houlda, Falafina and Zakham, live on the App Store and Google Play",
    },
    {
      icon: Award,
      title: "Clean Architecture",
      description: "Building maintainable and scalable applications with best practices",
    },
    {
      icon: Rocket,
      title: "End-to-End Delivery",
      description: "From UI and state management to APIs, payments and store release",
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
                I'm a Cairo-based Flutter developer with about 2 years of experience shipping
                production apps to the App Store and Google Play in healthcare, food ordering and events.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Duma Digital Solutions I built Citadel, a clinic booking app, end to end as the sole
                mobile developer. Before that, at Zakham Dev, I worked on Houlda, a multi-brand food
                ordering app, Falafina, and Zakham Invitations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I work with BLoC/Cubit, Clean Architecture, Firebase, REST APIs and Gulf-market payment
                gateways like Tabby and MyFatoorah, with a focus on clean UI and maintainable code.
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
