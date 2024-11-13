import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./screens/LandingPage";
import About from "./screens/About";
import ContactForm from "./screens/ContactForm";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" style={{ padding: "0 1rem", marginTop: "1rem" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
