import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="min-h-screen max-w-[1550px] mx-auto items-center grid grid-cols-2 bg-[#254f1a]">
      <div className="pl-20 flex flex-col gap-7">
      <h1 className="text-[#d2e823] mt-64 font-extrabold text-6xl">Everything you are. In one, simple link in bio.</h1>
      <p className="text-lg text-[#d2e823]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="flex h-16 justify-center gap-10">
        <Link className="" href="/generate">
        <button className="bg-[#e9c0e9] h-full font-bold px-10 rounded-full text-black">Clain Your Tree</button>
        </Link>
      </div>
      </div>
      <div>
        <Image className="mt-20 ml-10" src="/Hero.png" width={650} height={650} alt="" />
      </div>
    </div>
    </>
  );
}
