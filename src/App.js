import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter basename="/">
      <div className="min-h-screen flex flex-col bg-black">
        <Navigation
          isOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div className="flex-1 relative">
          <Scrollbars
            autoHide
            style={{ width: "100%", height: "100vh" }}
            renderThumbVertical={({ style, ...props }) => (
              <div
                {...props}
                style={{
                  ...style,
                  backgroundColor: "white",
                  borderRadius: "8px",
                  width: "8px",
                }}
              />
            )}
            renderThumbHorizontal={({ style, ...props }) => (
              <div
                {...props}
                style={{
                  ...style,
                  backgroundColor: "rgba(255, 123, 0, 0.8)",
                  borderRadius: "8px",
                  height: "8px",
                }}
              />
            )}
          >
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <Footer />
            </div>
          </Scrollbars>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
