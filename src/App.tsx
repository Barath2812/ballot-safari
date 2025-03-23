
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vote from "./pages/Vote";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import AnimatedTransition from "./components/AnimatedTransition";

// Set up React Query client
const queryClient = new QueryClient();

// App wrapper component to use location
const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <AnimatedTransition>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vote/:id" element={<Vote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatedTransition>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domAnimation}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
