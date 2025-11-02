import { motion } from "framer-motion";
import { Heart, Users, Award, Target } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const stats = [
    { number: "500+", label: "Patients Healed" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is customized to meet your unique needs and goals."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained physiotherapists with years of clinical experience."
    },
    {
      icon: Award,
      title: "Modern Techniques",
      description: "Latest equipment and evidence-based treatment protocols."
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Measurable outcomes and continuous progress tracking."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-soft overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="gradient-text">Flexora</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A new era of physiotherapy and rehabilitation in Kalitakuchi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading text-4xl font-bold text-foreground">
                Our Mission & Values
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Flexora, we believe that every individual deserves personalized care on their journey to recovery. 
                Our mission is to provide world-class physiotherapy and rehabilitation services that combine 
                modern techniques with compassionate care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that pain and mobility challenges can significantly impact your quality of life. 
                That's why our team of expert therapists is dedicated to creating customized treatment plans 
                that address your unique needs and help you achieve your recovery goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From our state-of-the-art facility to our patient-first approach, everything we do is designed 
                to support your healing journey and help you return to the activities you love.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img
                  src={aboutImage}
                  alt="Flexora Physiotherapy"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl shadow-glow p-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-heading text-3xl font-bold text-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-2 animate-float">
                  {stat.number}
                </div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence in every aspect of care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white shadow-glow"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Recovery?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience personalized care with our expert team
            </p>
            <a href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
              >
                Schedule Your Consultation
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
