import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-screen flex  items-center justify-center ">
      <div className="flex flex-col gap-4 items-center justify-center  ">
        <div className="loader"></div>
        {/* <div className="bg-[#B31312] text-white font-black italic md:px-4 px-3 md:py-2.5 py-1.5 text-[14px] md:text-[16px] animate-pulse">
          Oscarlo.tsx
        </div> */}
      </div>
    </div>
  );
};

export default loading;

/* HTML: <div class="loader"></div> */
