import React, { useState } from "react";
import foods from "../data/foods.json";
import FoodGrid from "../components/FoodGrid";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/SearchBar";
import "../styles/menu.css";

type Props = {
  theme: "day" | "night";
};

export default function Menu({ theme }: Props) {
  const [selectedMovie, setSelectedMovie] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) => {
    return (
      (selectedMovie === "All" || food.movie === selectedMovie) &&
      (selectedType === "All" || food.type === selectedType) &&
      food.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className={`menu-page ${theme}`}>
      <h1 className="menu-title">Ghibli Menu</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <FilterPanel
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      <FoodGrid foods={filteredFoods} />
    </div>
  );
}