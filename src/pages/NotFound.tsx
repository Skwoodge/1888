import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="text-center px-4">
        <span className="font-display text-9xl font-bold text-terracotta/10 select-none">
          404
        </span>
        <h1 className="font-display text-4xl font-bold text-charcoal mb-4 -mt-8">
          Lost on the Trail
        </h1>
        <p className="font-body text-charcoal/60 text-lg mb-8 max-w-md mx-auto">
          This page doesn't exist — but there's plenty of western heritage to
          explore.
        </p>
        <Link to="/">
          <Button className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
