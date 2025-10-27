import { useState } from "react";
import { getTimeRemaining } from "../utils/formatDate";

export const Counter = () => {
  const [showAll, setShowAll] = useState(false);
  const testDate = "10.07.2025";
  const { days, weeks, months, minutes } = getTimeRemaining(testDate);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-1 cursor-pointer"
      onClick={() => setShowAll(!showAll)}
    >
      <div
        className={`flex justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.4,1)] ${
          showAll ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className=" text-4xl font-bold p-4 rounded-lg">
          {months} месяцев
        </div>
      </div>

      <div
        className={`flex justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.4,1)] delay-100 ${
          showAll ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className=" text-4xl font-bold p-4 rounded-lg">{weeks} недель</div>
      </div>

      <div className=" text-4xl font-bold p-4 rounded-lg">{days} дней</div>

      <div
        className={`flex justify-center transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.4,1)] delay-150 ${
          showAll ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className=" text-4xl font-bold p-4 rounded-lg">
          {minutes} минут
        </div>
      </div>
    </div>
  );
};
