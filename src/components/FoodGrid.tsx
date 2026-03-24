import FoodCard from "./FoodCard";

type Food = {
  id: number;
  name: string;
  image: string;
  description: string;
  scene: string;
  ingredients: string[];
};

export default function FoodGrid({ foods }: { foods: Food[] }) {
  return (
    <div className="food-grid">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}