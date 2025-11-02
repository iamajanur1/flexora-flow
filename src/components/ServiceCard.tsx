import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Link to={href}>
        <div className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border overflow-hidden">
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
              <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>

            {/* Content */}
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
