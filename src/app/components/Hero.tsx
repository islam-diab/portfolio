import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full"
          >
            <span className="text-purple-400 text-sm font-medium">Available for freelance work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            Islam Diab
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-400 mb-2">
              Flutter Developer
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              POS & E-commerce Apps Specialist
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Building scalable, high-performance mobile applications with Flutter.
            Specialized in POS systems and multi-brand e-commerce solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-all duration-200 border border-border hover:border-purple-500/50 hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="/Islam-Salama-Diab.pdf"
              download
              className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-all duration-200 border border-border hover:border-purple-500/50 hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/islam-diab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/islamdiab07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:islamdiab304@gmail.com"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
