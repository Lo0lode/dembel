import { Counter } from "../../components/Counter";
import bgVideo from "../../assets/bg1.mp4"; // ✅ Правильный импорт

export const MainPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        muted
        autoPlay
        playsInline
        loop
        src={bgVideo} // ✅ Используем импортированный файл
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Counter />
    </div>
  );
};
