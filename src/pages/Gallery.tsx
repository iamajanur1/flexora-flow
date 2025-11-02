import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: gallery1,
      alt: "Modern physiotherapy clinic interior",
      caption: "State-of-the-art facility"
    },
    {
      src: gallery2,
      alt: "Professional treatment equipment",
      caption: "Advanced therapeutic equipment"
    },
    {
      src: gallery3,
      alt: "Exercise and rehabilitation area",
      caption: "Spacious exercise area"
    },
    {
      src: gallery4,
      alt: "Therapeutic massage session",
      caption: "Expert hands-on therapy"
    },
    {
      src: gallery1,
      alt: "Reception and waiting area",
      caption: "Comfortable waiting area"
    },
    {
      src: gallery3,
      alt: "Treatment room",
      caption: "Private treatment rooms"
    },
  ];

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

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Healing in <span className="text-accent">Motion</span>
            </h1>
            <p className="text-xl text-white/90">
              Inside Flexora - Where Recovery Begins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">
                      {image.caption}
                    </p>
                  </div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white text-lg font-semibold">
                  {images[selectedImage].caption}
                </p>
              </div>
            </motion.div>

            {/* Navigation Hints */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedImage
                      ? "bg-primary w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-hero rounded-3xl p-12 md:p-16 text-center text-white shadow-glow relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Visit Our Facility
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience our modern, welcoming space designed for your comfort and recovery
              </p>
              <a href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
                >
                  Schedule Your Visit
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
