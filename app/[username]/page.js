import React from "react";
import clientPromise from "@/lib/mongodb";
export default async function Page({ params }) {
  const username = (await params).username;

  const client = await clientPromise;
  const db = client.db("LinkTree");
  const collection = db.collection("Links");
  const data = await collection.findOne({ handle: username });
  // const data = {
  //   _id: {
  //     $oid: "67949fb907b92b243e95927f",
  //   },
  //   link: [
  //     {
  //       link: "https://www.youtube.com/watch?v=izwkombjECA&t=4096s",
  //       linktext: "youtube",
  //     },
  //     {
  //       link: "https://github.com/NamanS4ini",
  //       linktext: "github",
  //     },
  //     {
  //       link: "https://www.codingninjas.com/landing/10x-club/?utm_source=internal&utm_medium=internal&utm_campaign=sitewide_footer",
  //       linktext: "Coaing Ninja",
  //     },
  //   ],
  //   handle: "namansaini",
  //   ProfilePic:
  //     "https://avatars.githubusercontent.com/u/113650651?s=400&u=7efacd05166fa777334ff60df84598e312c5b389&v=4",
  // };
  return (
    <>
      {data?(
        <div
          style={{ backgroundImage: `url(${data.ProfilePic})` }}
          className={`w-full min-h-screen bg-cover bg-top flex justify-center pt-40`}
        >
          <div className="fixed inset-0  backdrop-blur-2xl"></div>
          <div className="z-10 w-full flex justify-center">
            <div className="w-1/2">
              <div className="flex justify-center">
                <img
                  className="rounded-full h-40 w-40"
                  src={data.ProfilePic}
                  alt="Profile Picture"
                />
              </div>
              <div className="flex justify-center mt-5">
                <h1 className="text-4xl font-bold">@{username}</h1>
              </div>
              <div className="flex mb-10 justify-center mt-5">
                <ul className="flex flex-col justify-center items-center gap-4">
                  {data.link.map((link, index) =>
                    link.link.length > 0 && link.linktext.length > 0 ? (
                      <a
                        key={index}
                        className="font-bold text-black text-2xl"
                        href={link.link}
                        target="_blank"
                      >
                        <div className="bg-[#d3d3d3] hover:p-3 hover:w-[550px] transition-all w-[500px] backdrop-blur-xl text-center p-2 rounded-lg">
                          {link.linktext}
                        </div>
                      </a>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ): <h1 className="text-7xl flex justify-center mt-44 font-bold">User Does not exists</h1>}
    </>
  );
}
