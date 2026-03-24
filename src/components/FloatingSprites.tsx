export default function FloatingSprites() {
  const sprites = Array.from({ length: 10 });

  return (
    <div className="sprites-container">
      {sprites.map((_, i) => (
        <img
          key={i}
          src="/images/soot.png"
          className="sprite"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`, // 🔥 IMPORTANT
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}