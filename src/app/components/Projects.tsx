import React from "react";
import { motion } from "motion/react";
import { Github, Play, Apple } from "lucide-react";
import { useInView } from "./useInView";
import houldaImage from "../../assets/HOULDA.png";
import zakhamImage from "../../assets/ZAKHAM.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  // Leave a link empty to hide its button.
  playStoreUrl: string;
  appStoreUrl: string;
  githubUrl: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Citadel – Clinic Booking App",
    description:
      "Clinic app built end to end as the sole mobile developer: browse services and doctors, see available slots, and book appointments. Live on the App Store and Google Play.",
    techStack: ["Flutter", "BLoC", "Dio", "REST APIs", "Firebase"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.citadeldev.citadel",
    appStoreUrl: "https://apps.apple.com/app/id6805188806",
    githubUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Houlda – Multi-Brand Food Ordering",
    description:
      "Multi-brand food ordering with category filters, local search, cart, coupons and checkout. Google Maps branch routing, QR dine-in ordering at the table, and Tabby and MyFatoorah payments.",
    image: houldaImage,
    techStack: ["Flutter", "BLoC", "Google Maps", "QR", "Tabby", "MyFatoorah"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.zakham.hulda_app",
    appStoreUrl: "https://apps.apple.com/us/app/id6761376628",
    githubUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Falafina – Restaurant Ordering",
    description:
      "Restaurant ordering app with menu, cart and order tracking over REST APIs, built with Cubit.",
    techStack: ["Flutter", "Cubit", "REST APIs"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.zakham.falafina",
    appStoreUrl: "https://apps.apple.com/sa/app/%D9%81%D9%84%D8%A7%D9%81%D9%8A%D9%86%D8%A7/id6747638023",
    githubUrl: "",
    featured: false,
  },
  {
    id: 4,
    title: "Zakham Invitations",
    description:
      "Digital invitations with QR event cards, one-tap WhatsApp sharing, and QR guest check-in at the event.",
    image: zakhamImage,
    techStack: ["Flutter", "QR", "WhatsApp"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.zakham.invitation",
    appStoreUrl: "https://apps.apple.com/us/app/%D8%B2%D8%AE%D9%85-%D9%84%D9%84%D8%AF%D8%B9%D9%88%D8%A7%D8%AA/id6748680538",
    githubUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "duo-adapt",
    description:
      "Open-source Claude Code plugin that adapts Flutter apps for tablets, foldables and iPhone Duo without changing the phone layout.",
    techStack: ["Flutter", "Responsive UI", "Claude Code", "Open Source"],
    playStoreUrl: "",
    appStoreUrl: "",
    githubUrl: "https://github.com/islam-diab/duo-adapt",
    featured: false,
  },
  {
    id: 6,
    title: "Guide My",
    description:
      "Nearby places finder (supermarkets, hospitals) with user-added locations, Google Maps and search.",
    techStack: ["Flutter", "Google Maps", "Search"],
    playStoreUrl: "",
    appStoreUrl: "",
    githubUrl: "https://github.com/islam-diab/guide_my",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
          Featured
        </div>
      )}

      <div className="relative h-64 overflow-hidden bg-secondary">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/30 via-secondary to-blue-500/20">
            <span className="text-3xl font-bold text-foreground/80 px-6 text-center">
              {project.title.split(" – ")[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.playStoreUrl || project.appStoreUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Play className="w-4 h-4" />
                Google Play
              </a>
            )}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-all duration-200 border border-border hover:border-purple-500/50"
              >
                <Apple className="w-4 h-4" />
                App Store
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-all duration-200 border border-border hover:border-purple-500/50"
              >
                <Github className="w-4 h-4" />
                {!project.playStoreUrl && !project.appStoreUrl && "View on GitHub"}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold mb-2 block">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production Flutter apps live on the App Store and Google Play, from clinic booking and food ordering to digital invitations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
