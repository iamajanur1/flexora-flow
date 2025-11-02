import { Link } from "react-router-dom";
import { Activity, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Paralysis Treatment", path: "/services/paralysis" },
    { name: "Shoulder Pain", path: "/services/shoulder-pain" },
    { name: "Back Pain Relief", path: "/services/back-pain" },
    { name: "Sports Injury", path: "/services/sports-injury" },
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white">
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
      
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 p-2.5 rounded-xl">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Flexora</h3>
                <p className="text-sm text-white/80">Physio & Rehab</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Stay Healthy | Stay Flexible | Stay with Flexora
            </p>
            <p className="text-white/70 text-xs">
              Expert physiotherapy and rehabilitation services with modern care and personal attention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-white/80 text-sm hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/80 text-sm">
                  Kalitakuchi Main Chowk<br />
                  (Near Mahek Traders)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:7002394108" className="text-white/80 hover:text-accent transition-colors block">
                    7002394108
                  </a>
                  <a href="tel:7896452195" className="text-white/80 hover:text-accent transition-colors block">
                    7896452195
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/7086484190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">WhatsApp: 7086484190</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2025 Flexora Physiotherapy & Rehabilitation Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
