export type Food = {
  id: number;
  name: string;
  movie: string;
  type: string;
  image: string;
  description: string;
  scene: string;
  ingredients: string[];
  characters: string[];
  temperature: "hot" | "cold" | "room temperature";
};