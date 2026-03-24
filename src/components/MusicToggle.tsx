import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return; // ✅ null safety

    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <div className="music-toggle">
      <button onClick={toggleMusic}>
        {playing ? "🔇 Stop Music" : "🎵 Play Music"}
      </button>

      <audio ref={audioRef} loop>
        <source src="/music/ghibli.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}