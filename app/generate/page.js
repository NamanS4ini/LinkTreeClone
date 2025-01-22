import React from "react";

const Generate = () => {
  return (
    <>
      <div className="bg-[#254f1a] flex flex-col gap-4 items-center min-h-screen">
        <h1 className="text-4xl mt-44 font-bold">Create Your Linktree</h1>
        <div className="flex mt-10 flex-col gap-4">
          <h2 className="text-2xl">Step 1: Claim Your Handel:</h2>
          <div className="mx-12">
            <input
              className="p-2 rounded-lg w-80 text-black"
              type="text"
              placeholder="Enter Your Handle"
            />
          </div>

          <h2 className="text-2xl">Step 2: Enter your Links:</h2>
          <div className="flex mx-12 gap-4">
            <input
              className="p-2 rounded-lg w-40 text-black"
              type="text"
              placeholder="Enter Link Text"
            />
            <input
              className="p-2 rounded-lg w-40 text-black"
              type="text"
              placeholder="Enter Link"
            />
            <button className=" px-6 font-bold  bg-[#1e2330] hover:bg-[#303541] rounded-full">Add Link</button>
          </div>
          <h2 className="text-2xl">Step 3: Add a Profile Picture:</h2>
          <div className="mx-12">
            <input
              className="p-2 rounded-lg w-80 text-black"
              type="text"
              placeholder="Enter Link to your picture"
              />
              </div>
        </div>
              <div className="w-full flex mt-5 mr-32 justify-center">
                
              <button className="font-bold  py-4 px-10 bg-[#1e2330] hover:bg-[#303541] rounded-full">Create</button>
              </div>
      </div>
    </>
  );
};

export default Generate;
