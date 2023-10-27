import React from "react";

export const Home = () => {
  return (
    <div className="border-r border-black">
      <button className="bg-black text-green-400 mt-6 ml-4 rounded py-2 px-4 font-medium">
        Click Here
      </button>
      <button className="text-black bg-green-400 mt-6 ml-4 font-bold rounded py-2 px-4 ">
        Click Here
      </button>
      <button className="ml-6 py-2 px-6 rounded-md bg-violet-500 hover:bg-pink-300 focus:outline-none focus-visible:ring  ">
        Save
      </button>
    </div>
  );
};
