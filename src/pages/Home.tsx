import HeroSection from "../components/HeroSection";
import FloatingSprites from "../components/FloatingSprites";
import FeaturedDishCard from "../components/FeaturedDishCard";
import "../styles/home.css";

type Props = {
  theme: "day" | "night";
};

export default function Home({ theme }: Props) {
  return (
    <div className={`home ${theme}`}>
      <FloatingSprites />
      <HeroSection />
      <FeaturedDishCard />
    </div>
  );
}
