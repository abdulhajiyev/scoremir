import React from "react";

export default function ScoreComponent() {
  return (
    <div className="ml-1 mt-1 flex max-w-min border-[5px] border-black">
      <div className="relative flex h-[120px] w-[330px] border-[0px] border-blue-700 bg-green-500">
        <div className="absolute">
          <div className="absolute h-20 w-[20px] border-b-[3px] border-r-[5px] border-black bg-cyan-400"></div>
          <div className="absolute left-[20px] top-0 h-20 w-[160px] border-b-[3px] border-r-[5px] border-black bg-green-700">
            <p className="flex h-full items-center justify-center font-montserrat text-2xl font-extrabold text-white">
              JPN
            </p>
          </div>
          <div className="absolute left-[180px] top-0 h-20 w-[75px] border-b-[3px] border-r-[3px] border-black bg-purple-700">
            <p className="flex h-full items-center justify-center font-montserrat text-2xl font-extrabold text-white">
              0
            </p>
          </div>
          <div className="absolute left-[255px] top-0 h-20 w-[75px] border-b-[3px] border-black bg-blue-700">
            <p className="flex h-full items-center justify-center font-montserrat text-2xl font-extrabold text-white">
              17
            </p>
          </div>
          <div className="absolute top-[80px] h-[40px] w-[180px] border-r-[5px] border-black bg-orange-700">
            <p className="flex h-full items-center justify-center gap-1 font-montserrat text-sm font-extrabold text-white">
              <span className="mb-[3px]">
                <span className="text-2xl">●</span>
                <span className="text-2xl">○</span>
              </span>
              <span>CHALLENGE</span>
            </p>
          </div>
          <div className="absolute left-[180px] top-[80px] h-[40px] w-[150px] border-black bg-lime-700">
            <p className="flex h-full items-center justify-center gap-1 font-montserrat text-sm font-extrabold text-white">
              <span className="mb-[3px]">
                <span className="text-2xl">○</span>
              </span>
              <span>TIME OUT</span>
            </p>
          </div>
        </div>
      </div>
      <div className="block h-[120px] w-[140px] border-x-[5px] border-black bg-yellow-500"></div>

      <div className="relative flex h-[120px] w-[330px]">
        <div className="absolute">
          <div className="absolute left-0 top-0 h-20 w-[75px] bg-blue-700 border-b-[3px] border-black">
            <p className="flex h-full items-center justify-center font-montserrat text-2xl font-extrabold text-white">
              17
            </p>
          </div>

          <div className="absolute left-[75px] top-0 h-20 w-[75px] bg-purple-700 border-l-[3px] border-black border-b-[3px]">
            <p className="flex h-full items-center justify-center font-montserrat text-2xl font-extrabold text-white">
              0
            </p>
          </div>

          <div className="absolute left-[150px] top-0 h-20 w-[160px] bg-green-700 border-l-[5px] border-b-[3px] border-black">
            <p className="flex h-full items-center justify-center font-montserrat text-2xl font-extrabold text-white">
              JPN
            </p>
          </div>

          <div className="absolute left-[310px] h-20 w-[20px] border-black bg-cyan-400 border-l-[5px] border-b-[3px]"></div>

          <div className="absolute left-0 top-[80px] h-[40px] w-[150px] border-black bg-lime-700">
            <p className="flex h-full flex-row-reverse items-center justify-center gap-1 font-montserrat text-sm font-extrabold text-white">
              <span className="mb-[3px]">
                <span className="text-2xl">○</span>
              </span>
              <span>TIME OUT</span>
            </p>
          </div>

          <div className="absolute top-[80px] h-[40px] w-[180px] left-[150px] border-black bg-orange-700 border-l-[5px]">
            <p className="flex flex-row-reverse h-full items-center justify-center gap-1 font-montserrat text-sm font-extrabold text-white">
              <span className="mb-[3px]">
                <span className="text-2xl">●</span>
                <span className="text-2xl">○</span>
              </span>
              <span>CHALLENGE</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
