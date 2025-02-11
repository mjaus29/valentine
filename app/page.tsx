"use client";

import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const App = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [pleaseArray, setPleaseArray] = useState<string[]>([]);

  return (
    <div className="flex justify-center items-center h-screen relative">
      <DotLottieReact
        src={
          isTrue
            ? "https://lottie.host/355f7d7d-3397-4362-8fae-20f960e238df/pCF90DRWsk.lottie"
            : "https://lottie.host/42640c88-2486-40d3-8de0-6fd6a67dcdf2/Nx7ksZBCJB.lottie"
        }
        loop
        autoplay
      />
      {isTrue && (
        <div className="absolute w-full h-full">
          <DotLottieReact
            src="https://lottie.host/765ee240-1d37-44d9-ad0e-4ea07b836f49/5GwM4xmz1Y.lottie"
            loop
            autoplay
          />
        </div>
      )}
      {pleaseArray.length > 0 && (
        <div className="flex absolute top-[10%] justify-center items-center flex-wrap gap-4">
          {pleaseArray.map((val, index) => (
            <div
              key={index}
              className="text-lg text-red-500 py-2 px-4 rounded-full bg-white border-2 border-red-500"
            >
              {val}
            </div>
          ))}
        </div>
      )}
      <div className="absolute bottom-[30%] flex justify-center items-center flex-col gap-4">
        <h1
          className={`text-3xl font-bold py-4 px-8 rounded-full ${
            isTrue
              ? "bg-white text-red-500 border-2 border-red-500"
              : "bg-red-500 text-white"
          }`}
        >
          {isTrue
            ? "I Love You So Much"
            : "Ira Monica, Will You Be My Valentine?"}
        </h1>
        {!isTrue && (
          <div className="flex justify-center items-center gap-4">
            <div
              onClick={() => setPleaseArray((prev) => ["please", ...prev])}
              className="text-xl bg-orange-500 text-white font-bold py-2 px-6 cursor-pointer rounded-full"
            >
              No
            </div>
            <div
              onClick={() => {
                setIsTrue(true);
                setPleaseArray([]);
              }}
              className="text-xl bg-green-500 text-white font-bold py-2 px-6 cursor-pointer rounded-full"
            >
              Yes
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
