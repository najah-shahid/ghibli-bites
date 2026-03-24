const movies = [
  "All",
  "Spirited Away",
  "My Neighbor Totoro",
  "Princess Mononoke",
  "The Tale of the Princess Kaguya",
  "The Secret World of Arrietty",
  "Ponyo",
  "Howl’s Moving Castle",
  "The Cat Returns",
  "From Up on Poppy Hill",
  "Whisper of the Heart",
  "Kiki’s Delivery Service"
];

const types = ["All", "meal", "snack", "dessert", "drink"];

type Props = {
  selectedMovie: string;
  setSelectedMovie: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
};

export default function FilterPanel({
  selectedMovie,
  setSelectedMovie,
  selectedType,
  setSelectedType,
}: Readonly<Props>) {
  return (
    <div className="filter-panel">
      <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
        {movies.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>

      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        {types.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
    </div>
  );
}