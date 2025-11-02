import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kalitakuchi Main Chowk", "(Near Mahek Traders)"],
      action: "Get Directions",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["7002394108", "7896452195"],
      action: "Call Now",
      link: "tel:7002394108"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["7086484190", "Quick Response"],
      action: "Chat Now",
      link: "https://wa.me/7086484190"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9 AM - 7 PM", "Sunday: By Appointment"],
      action: null,
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-white/90">
              We're here to answer your questions and help you on your recovery journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && info.link && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full">
                      {info.action}
                    </Button>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-glow"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-soft rounded-3xl overflow-hidden shadow-card h-[400px] flex items-center justify-center border-2 border-border">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Find Us Here
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Kalitakuchi Main Chowk<br />
                    (Near Mahek Traders)
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero">
                      Open in Google Maps
                    </Button>
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-hero rounded-3xl p-8 text-white shadow-glow">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/90 mb-6">
                  Call us directly or send a WhatsApp message for quick response
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:7002394108" className="flex-1">
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full bg-white text-primary hover:bg-white/90"
                    >
                      <Phone className="mr-2" />
                      Call Now
                    </Button>
                  </a>
                  <a href="https://wa.me/7086484190" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                    >
                      <MessageCircle className="mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              We're Always Here to Help
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have questions about our services, want to schedule an appointment, 
              or need guidance on your treatment, our friendly team is ready to assist you.
            </p>
            <a href="/booking">
              <Button variant="hero" size="lg">
                Book an Appointment
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
