import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="min-h-screen items-center grid grid-cols-2 bg-[#2e5206]">
      <div className="pl-20 flex flex-col gap-7">
      <h1 className="text-[#d2e823] mt-64 font-extrabold text-6xl">Everything you are. In one, simple link in bio.</h1>
      <p className="text-lg text-[#d2e823]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="flex gap-10">
        <input className="p-4 rounded-lg" type="text" placeholder="Enter Your Name" />
        <button className="bg-[#e9c0e9] px-10 rounded-full text-black">Clain Your Tree</button>
      </div>
      </div>
      <div>
        
      </div>
    </div>
    </>
  );
}
