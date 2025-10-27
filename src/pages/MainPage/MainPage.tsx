import { Counter } from "../../components/Counter";

export const MainPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        muted
        autoPlay
        playsInline
        loop
        src="src/assets/bg1.mp4"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Counter />
    </div>
  );
};
