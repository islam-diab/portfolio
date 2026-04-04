import { motion } from "motion/react";
import { ShoppingCart, CreditCard, Smartphone } from "lucide-react";
import { useInView } from "./useInView";
import React from "react";

const specializations = [
  {
    icon: Smartphone,
    title: "POS Systems",
    description: "Building robust point-of-sale systems with inventory management, sales tracking, and multi-payment support for retail businesses.",
    features: ["Inventory Management", "Sales Analytics", "Receipt Printing", "Multi-Payment"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Apps",
    description: "Creating scalable multi-brand e-commerce applications with smooth UX, real-time updates, and comprehensive shopping features.",
    features: ["Product Catalog", "Shopping Cart", "Order Tracking", "Multi-Brand Support"],
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Seamless integration of multiple payment gateways including MyFatoorah, Tabby, and Tamara for secure transactions.",
    features: ["MyFatoorah", "Tabby BNPL", "Tamara", "Secure Checkout"],
  },
];

export function Specialization() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="specialization" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold mb-2 block">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What I Do Best</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized solutions for modern business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {spec.description}
                </p>

                <ul className="space-y-2">
                  {spec.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
