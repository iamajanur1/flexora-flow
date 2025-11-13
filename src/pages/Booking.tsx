import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2, Activity, IndianRupee, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/data/services";
import { toast } from "sonner";
import qr300 from "@/assets/qr-300.png";
import qr350 from "@/assets/qr-350.png";
import qr400 from "@/assets/qr-400.png";
import qr450 from "@/assets/qr-450.png";
import qr500 from "@/assets/qr-500.png";

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const selectedService = useMemo(() => {
    return services.find(s => s.id === formData.service);
  }, [formData.service]);

  const qrCodeMap: Record<number, string> = {
    300: qr300,
    350: qr350,
    400: qr400,
    450: qr450,
    500: qr500,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Format WhatsApp message
    const service = services.find(s => s.id === formData.service);
    const message = `*New Booking Request*\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email || 'Not provided'}\n*Service:* ${service?.name}\n*Price:* ₹${service?.price}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Message:* ${formData.message || 'None'}`;
    
    const whatsappUrl = `https://wa.me/7086484190?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
    
    toast.success("Redirecting to WhatsApp...");
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${50 + i * 30}px`,
                height: `${50 + i * 30}px`,
                left: `${i * 12}%`,
                top: `${20 + i * 8}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Activity className="w-16 h-16 text-accent" />
            </motion.div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Book Your <span className="text-accent">Appointment</span>
            </h1>
            <p className="text-xl text-white/90">
              Take the first step towards your recovery journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl shadow-glow p-8 md:p-12"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                        <User className="w-6 h-6 text-primary" />
                        Personal Information
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Label htmlFor="fullName" className="text-foreground font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) => handleChange("fullName", e.target.value)}
                            className="mt-2 h-12"
                            required
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="mt-2 h-12"
                            required
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email (Optional)
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="mt-2 h-12"
                        />
                      </motion.div>
                    </div>

                    {/* Appointment Details */}
                    <div className="space-y-6 pt-6 border-t border-border">
                      <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                        <Calendar className="w-6 h-6 text-primary" />
                        Appointment Details
                      </h2>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Label htmlFor="service" className="text-foreground font-medium">
                          Select Service *
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Choose a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Label htmlFor="date" className="text-foreground font-medium">
                            Preferred Date *
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleChange("date", e.target.value)}
                            className="mt-2 h-12"
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Label htmlFor="time" className="text-foreground font-medium flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            Preferred Time *
                          </Label>
                          <Input
                            id="time"
                            type="time"
                            value={formData.time}
                            onChange={(e) => handleChange("time", e.target.value)}
                            className="mt-2 h-12"
                            required
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Label htmlFor="message" className="text-foreground font-medium flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Message / Query (Optional)
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your condition or any specific requirements..."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className="mt-2 min-h-[120px]"
                        />
                      </motion.div>

                      {/* Price Display */}
                      {selectedService && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-gradient-soft rounded-2xl p-6 border-2 border-primary/20"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <IndianRupee className="w-5 h-5 text-primary" />
                              <span className="font-heading text-lg font-semibold text-foreground">
                                Session Price
                              </span>
                            </div>
                            <span className="text-3xl font-bold text-primary">
                              ₹{selectedService.price}
                            </span>
                          </div>
                          
                          {/* QR Code */}
                          <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-3">
                              <QrCode className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">Scan to pay ₹{selectedService.price}</span>
                            </div>
                            <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-primary/20">
                              <img 
                                src={qrCodeMap[selectedService.price]} 
                                alt={`Payment QR code for ₹${selectedService.price}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 text-center">
                              Scan with any UPI app to pay
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="pt-6"
                    >
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full text-lg"
                      >
                        <MessageSquare className="mr-2" />
                        Send to WhatsApp
                      </Button>
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        Your booking details will be sent via WhatsApp
                      </p>
                    </motion.div>
                  </form>

                  {/* WhatsApp Alternative */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 pt-8 border-t border-border text-center"
                  >
                    <p className="text-muted-foreground mb-4">
                      Prefer to chat directly?
                    </p>
                    <a
                      href="https://wa.me/7086484190"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg">
                        <MessageSquare className="mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-glow p-12 md:p-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </motion.div>
                  
                  <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                    Booking Request Received!
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Thank you for choosing Flexora. We'll contact you shortly to confirm your appointment.
                  </p>
                  
                  <div className="space-y-4">
                    <a href="/">
                      <Button variant="hero" size="lg">
                        Return to Home
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Check your phone for our confirmation call
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Info Section */}
      {!isSubmitted && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Flexible Timing",
                  description: "Morning and evening slots available"
                },
                {
                  icon: User,
                  title: "Expert Care",
                  description: "Experienced physiotherapists"
                },
                {
                  icon: CheckCircle2,
                  title: "Quick Response",
                  description: "Confirmation within 24 hours"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Booking;
