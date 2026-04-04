import { motion } from "motion/react";
import { Code, Database, CreditCard, MapPin, Package, Layout } from "lucide-react";
import { useInView } from "./useInView";
import React from "react";

const skills = [
  { name: "Flutter", icon: Code },
  { name: "Dart", icon: Code },
  { name: "BLoC", icon: Package },
  { name: "REST APIs", icon: Database },
  { name: "Payment Integration", icon: CreditCard },
  { name: "Google Maps", icon: MapPin },
  { name: "MyFatoorah", icon: CreditCard },
  { name: "Tabby", icon: CreditCard },
  { name: "Tamara", icon: CreditCard },
  { name: "Clean Architecture", icon: Layout },
  { name: "State Management", icon: Package },
  { name: "Firebase", icon: Database },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold mb-2 block">Technical Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern Flutter development and integrated payment solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-center font-medium group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
