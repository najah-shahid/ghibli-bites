import foods from "../data/foods.json";

function getDailyDish() {
  const today = new Date();
  const seed =
    today.getFullYear() * 1000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  return foods[seed % foods.length];
}

export default function FeaturedDishCard() {
  const dish = getDailyDish();

  return (
    <div className="featured-card">
      <h3>Featured Dish of the Day !</h3>

      <div className="featured-content">
        <div className="image-box">
          <img src={dish.image} alt={dish.name} />
        </div>

        <div className="text">
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
        </div>
      </div>
    </div>
  );
}