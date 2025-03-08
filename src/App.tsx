import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <Router>
      <SpeedInsights />

      <NavBar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}
