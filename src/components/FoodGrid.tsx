import FoodCard from "./FoodCard";
import type { Food } from "../types";

export default function FoodGrid({ foods }: Readonly<{ foods: Food[] }>) {
  return (
    <div className="food-grid">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}