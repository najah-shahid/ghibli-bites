import { useNavigate } from "react-router-dom";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import "../styles/navbar.css";

type NavbarProps = {
  toggleTheme: () => void;
  theme: "day" | "night";
  toggleMusic: () => void;
  playing: boolean;
};

export default function Navbar({
  toggleTheme,
  theme,
  toggleMusic,
  playing,
}: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav className={`navbar ${theme}`}>
      {/* LEFT */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src="/images/totoro.png" className="totoro" />
        <h1>Ghibli Bites</h1>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <div className="nav-links">
          <span onClick={() => navigate("/")}><p>Home</p></span>
          <span onClick={() => navigate("/menu")}><p>Menu</p></span>
        </div>

        <button className="music-btn" onClick={toggleMusic}>
          {playing ? <GiSpeakerOff /> : <GiSpeaker/>}
        </button>

        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "night"}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}