import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <Router>
      
      <NavBar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}
