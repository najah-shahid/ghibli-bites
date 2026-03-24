import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";

export default function App() {
  const [theme, setTheme] = useState<"day" | "night">("day");
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <Router>
      <div className={theme}>
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          toggleMusic={toggleMusic}
          playing={playing}
        />

        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/menu" element={<Menu theme={theme} />} />
        </Routes>

        {/* ✅ GLOBAL AUDIO */}
        <audio ref={audioRef} loop>
          <source src="/music/ghibli.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </Router>
  );
}