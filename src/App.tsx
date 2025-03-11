import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScreenSizeIndicator from "./ScreenSizeIndicator";
import { Toaster } from 'sonner';
export default function App() {
  return (
    <Router>
      <SpeedInsights />
      <Toaster position="top-center" richColors={true} />
      <ScreenSizeIndicator />

      <NavBar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}
