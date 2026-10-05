import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "./useInView";
import houldaImage from "../../assets/HOULDA.png";
import zakhamImage from "../../assets/ZAKHAM.png";

const projects = [
  {
    id: 1,
    title: "Houlda – Multi-Brand Food Ordering App",
    description:
      "Multi-brand food ordering: customers choose a brand, then browse with category filtering and local search powered by BLoC. Full checkout with cart management, coupon validation, and order processing. Google Maps for location selection and branch-based routing; QR-based dine-in ordering at the table; payment integrations including Tabby and MyFatoorah.",
    image: houldaImage,
    techStack: ["Flutter", "BLoC", "Google Maps", "QR", "Tabby", "MyFatoorah"],
    // Leave a link empty to hide its button.
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Falafina – Restaurant Ordering App",
    description:
      "Complete food ordering mobile app for a local restaurant in Flutter. Item browsing, cart management, and order tracking with RESTful APIs for dynamic menu and orders. Clean, responsive UI with consistent theming and Cubit state management for scalability.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    techStack: ["Flutter", "Cubit", "REST APIs"],
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Zakham – Digital Invitation",
    description:
      "Digital invitation app that generates elegant event cards with integrated QR codes. WhatsApp sharing for one-tap delivery to guests; QR scanning for automated attendance and real-time verification. Clean, responsive UI with an optimized event management flow.",
    image: zakhamImage,
    techStack: ["Flutter", "QR", "WhatsApp"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: 4,
    title: "Guide My",
    description:
      "Discover nearby supermarkets, hospitals, and more. Users can add new locations when missing, expanding the database dynamically. Rich place details—name, image, type, contact, and Google Maps location—with advanced, user-friendly search.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop",
    techStack: ["Flutter", "Google Maps", "Search"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Payment Gateway Integration",
    description:
      "Comprehensive payment solution integrating multiple payment providers for seamless transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    techStack: ["Flutter", "MyFatoorah", "Tabby", "Tamara"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
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

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-200 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
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
            Showcasing Flutter apps from multi-brand ordering and restaurant platforms to invitations and location discovery
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
