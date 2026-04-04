import { Github, Linkedin, Mail, Heart } from "lucide-react";
import React from "react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-2">Islam Diab</h3>
            <p className="text-muted-foreground text-sm">
              Flutter Developer specializing in POS & E-commerce Apps
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-purple-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-purple-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-purple-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-purple-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/islam-diab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-purple-500/20 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/islamdiab07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-purple-500/20 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="mailto:islamdiab304@gmail.com"
                className="p-2 bg-secondary hover:bg-purple-500/20 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Islam Diab. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-purple-400 fill-purple-400" /> using Flutter & React
          </p>
        </div>
      </div>
    </footer>
  );
}
