import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { useInView } from "./useInView";
import React from "react";

const experience = [
  {
    role: "Flutter Developer",
    company: "Zkham Dev",
    period: "03/2025 – Present",
    points: [
      "Delivered features integrating Google Maps, Firebase Notifications, and REST APIs.",
      "Applied Cubit state management to build scalable, testable, and maintainable codebases.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "BayanatZ",
    period: "02/2025 – 03/2025",
    points: [
      "Developed and maintained a task management mobile application using Flutter.",
      "Conducted code reviews and mentoring, increasing team code quality and reducing bugs.",
      "Drove efficient team communication and task management, improving team velocity.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "CodeAlpha",
    period: "",
    points: [
      "Language Learning App: Japanese vocabulary and phrases in categorized lists, with quizzes to track progress.",
      "Flashcard Quiz App: create and study custom flashcards, with score tracking.",
    ],
  },
];

const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "City of Culture and Science, Higher Institute of Computer Science",
  period: "2018 – 2022",
};

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold mb-2 block">Career</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-xl shrink-0">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="text-xl font-semibold">
                      {job.role} <span className="text-purple-400">· {job.company}</span>
                    </h3>
                    {job.period && <span className="text-sm text-muted-foreground">{job.period}</span>}
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: experience.length * 0.1 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl shrink-0">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-muted-foreground">{education.school}</p>
                </div>
                <span className="text-sm text-muted-foreground">{education.period}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
