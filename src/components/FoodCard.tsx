import { useState } from "react";
import type { Food } from "../types";

export default function FoodCard({ food }: Readonly<{ food: Food }>) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`food-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        {/* FRONT */}
        <div className="card-front">
          <div className="image-container">
            <img src={food.image} alt={food.name} />
            {food.temperature === "hot" && (
              [...Array(6)].map((_, i) => (
                <div key={i} className={`steam s${i}`} />
              ))
            )}
          </div>

          <h3>{food.name}</h3>
          <p>{food.description}</p>
        </div>

        {/* BACK */}
        <div className="card-back">
          <h3>{food.name}</h3>
          <p><strong>Scene:</strong> {food.scene}</p>

          <p><strong>Ingredients:</strong></p>
          <ul>
            {food.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// type Food = {
//   name: string;
//   image: string;
//   description: string;
// };

// export default function FoodCard({ food }: { food: Food }) {
//   return (
//     <div className="food-card">
//       <img src={food.image} alt={food.name} />

//       <div className="food-info">
//         <h3>{food.name}</h3>
//         <p>{food.description}</p>
//       </div>
//     </div>
//   );
// }