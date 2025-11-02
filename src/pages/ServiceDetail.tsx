import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceById } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }} />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link to="/services">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              {service.name}
            </h1>
            <div className="h-1 w-32 bg-accent rounded-full animate-glow" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-xl text-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Key Benefits
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-gradient-soft rounded-xl hover:shadow-card transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-foreground text-lg">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What to Expect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-warm rounded-2xl p-8 shadow-card"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">1.</span>
                    <span>Comprehensive initial assessment and diagnosis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">2.</span>
                    <span>Personalized treatment plan tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">3.</span>
                    <span>Regular therapy sessions with progress tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">4.</span>
                    <span>Home exercise program for continued improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold">5.</span>
                    <span>Follow-up care and maintenance guidance</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="sticky top-24 space-y-6"
              >
                {/* Booking Card */}
                <div className="bg-gradient-hero rounded-2xl p-8 text-white shadow-glow">
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Book your appointment and begin your recovery journey today.
                  </p>
                  <Link to="/booking" className="block">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-white text-primary hover:bg-white/90"
                    >
                      <Calendar className="mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>

                {/* Info Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Treatment Information
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Session Duration</p>
                      <p className="font-semibold text-foreground">45-60 minutes</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-muted-foreground">Recommended Sessions</p>
                      <p className="font-semibold text-foreground">6-12 sessions</p>
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-muted-foreground">Recovery Time</p>
                      <p className="font-semibold text-foreground">Varies by condition</p>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-gradient-soft rounded-2xl p-6 border border-border">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                    Have Questions?
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our team is here to help you understand your treatment options.
                  </p>
                  <a href="tel:7002394108" className="block">
                    <Button variant="outline" size="default" className="w-full">
                      Call Us Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Other Services You May Need
          </h2>
          <div className="flex justify-center">
            <Link to="/services">
              <Button variant="hero" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
