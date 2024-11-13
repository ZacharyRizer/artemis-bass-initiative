import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import About from "./screens/About";
import ContactForm from "./screens/ContactForm";

function App() {
  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Container>
  );
}

export default App;
