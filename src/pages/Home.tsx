import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Target, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const featuredServices = services.slice(0, 4);

  const highlights = [
    {
      icon: Heart,
      title: "Pain Relief Experts",
      description: "Specialized in chronic pain management"
    },
    {
      icon: Target,
      title: "Personalized Recovery",
      description: "Customized treatment plans for every patient"
    },
    {
      icon: Shield,
      title: "Modern Therapy",
      description: "Latest techniques and equipment"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Excellent treatment for my back pain. The therapists are very professional and caring.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "Amazing results with shoulder therapy. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Singh",
      text: "Best physiotherapy center in the area. Very satisfied with the treatment.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-accent/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 text-white"
            >
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="font-medium">Grand Opening Celebration!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              A New Era of Care &<br />
              <span className="text-accent">Recovery Begins</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              Expert physiotherapy with modern care and personal attention
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/booking">
                <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                  Book Appointment
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16 text-white/70"
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, rotate: 1 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 bg-gradient-hero rounded-xl mb-6">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized treatments designed for your complete recovery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.shortDescription}
                icon={Heart}
                href={`/services/${service.id}`}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services">
              <Button variant="hero" size="lg">
                View All Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from real people
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Heart key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Join us and experience expert physiotherapy with modern care and personal attention.
            </p>
            <Link to="/booking">
              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                Book Your Session Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
