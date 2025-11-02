import { motion } from "framer-motion";
import { Activity, Brain, Bone, Zap, Target, User, Dumbbell, Stethoscope } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  const iconMap: Record<string, any> = {
    brain: Brain,
    bone: Bone,
    zap: Zap,
    target: Target,
    user: User,
    dumbbell: Dumbbell,
    tennis: Activity,
    spine: Stethoscope,
    golf: Activity,
    "bone-break": Bone,
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', 
            backgroundSize: '40px 40px',
            color: 'hsl(var(--primary))'
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Floating Icons */}
            <div className="flex justify-center gap-4 mb-8">
              {[Activity, Heart, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: index * 0.3,
                    repeat: Infinity 
                  }}
                  className="p-3 bg-primary/10 rounded-xl"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
              ))}
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive physiotherapy and rehabilitation solutions tailored to your recovery needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                icon={iconMap[service.icon] || Activity}
                href={`/services/${service.id}`}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Flexora?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in health and recovery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Evidence-Based Treatment",
                description: "All our therapies are backed by the latest research and proven clinical outcomes.",
              },
              {
                title: "Modern Equipment",
                description: "State-of-the-art facilities with advanced therapeutic equipment.",
              },
              {
                title: "Personalized Care",
                description: "Every treatment plan is customized to your specific condition and goals.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-card text-center"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white shadow-glow relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
                backgroundSize: '30px 30px' 
              }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book a consultation with our experts, and we'll help you find the right treatment plan
              </p>
              <a href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
                >
                  Book Free Consultation
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Heart = Activity;

export default Services;
