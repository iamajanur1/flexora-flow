import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <h1 className="font-heading text-9xl md:text-[12rem] font-bold gradient-text">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button variant="hero" size="lg">
                <Home className="mr-2" />
                Return to Home
              </Button>
            </Link>
            <button onClick={() => window.history.back()}>
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2" />
                Go Back
              </Button>
            </button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-16 text-primary/20"
          >
            <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
