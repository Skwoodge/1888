import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Heritage from "./pages/Heritage";
import Events from "./pages/Events";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Merch from "./pages/Merch";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/history" element={<Heritage />} />
            <Route path="/juan-leivas" element={<Heritage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileCtaBar />
      </div>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
