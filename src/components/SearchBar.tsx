type Props = {
  search: string;
  setSearch: (val: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search magical dishes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}