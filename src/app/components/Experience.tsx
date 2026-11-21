import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { useInView } from "./useInView";
import React from "react";

const experience = [
  {
    role: "Flutter Developer",
    company: "Duma Digital Solutions",
    period: "09/2026 – Present",
    points: [
      "Built Citadel, a clinic app (services, doctors, available slots, booking) end to end as the sole mobile developer; live on the App Store and Google Play.",
      "Stack: BLoC, Dio (REST APIs), Firebase.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Zakham Dev",
    period: "03/2025 – 09/2026",
    points: [
      "Houlda (multi-brand food ordering, BLoC): category filters, local search, cart, coupons, checkout, Google Maps branch routing, QR dine-in ordering, Tabby and MyFatoorah payments.",
      "Falafina (restaurant ordering, Cubit): menu, cart and order tracking over REST APIs.",
      "Zakham Invitations: QR event cards, one-tap WhatsApp sharing and QR guest check-in.",
    ],
  },
  {
    role: "Flutter Developer (Contract)",
    company: "BayanatZ",
    period: "02/2025 – 03/2025",
    points: ["Developed features for a task management app in Flutter."],
  },
];

const education = {
  degree: "B.Sc. in Computer Science",
  school: "Higher Institute of Computer Science, City of Culture and Science, 6th of October City",
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
