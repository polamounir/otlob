import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";


export default function AppRoutes() {
  return (
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />


        {/* Errors */}
        <Route path="/403" element={<ErrorPage errorCode={403} errorMessage="Forbidden Access" />} />
        <Route path="/500" element={<ErrorPage errorCode={500} errorMessage="Internal Server Error" />} />
        <Route path="*" element={<ErrorPage errorCode="404" errorMessage="Page Note Found" />} />
      </Routes>
    </div>

  );
}
