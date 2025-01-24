"use client";
import React, { useState } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify";
const Generate = () => {
  const [Links, setLinks] = useState([{
    link: "",
    linktext: ""
  }]);
  const [Handle, setHandle] = useState("")
  const [Pfp, setPfp] = useState("")
  const handleSubmit = async () => {
    console.log(Links);
  };
  const addLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      link: Links,
      handle: Handle,
      ProfilePic: Pfp,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const result = await fetch(
      "http://localhost:3000/api/generate",
      requestOptions
    );
    const data = await result.json();
    console.log(data.message);
    toast.success(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      setLinks([...Links, {link: "", linktext: ""}])
  };
  const setLink = (index, linktext, link) => {
    let temp = [...Links];
    temp[index] = {
      link: link,
      linktext: linktext
    }
    setLinks(temp)
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="bg-[#254f1a] flex flex-col gap-4 items-center min-h-screen">
        <h1 className="text-4xl mt-44 font-bold">Create Your Linktree</h1>
        <div className="flex mt-10 flex-col gap-4">
          <h2 className="text-2xl">Step 1: Claim Your handle:</h2>
          <div className="mx-12">
            <input
              className="p-2 rounded-lg w-80 text-black"
              type="text"
              name="handle"
              value={Handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="Enter Your Handle"
            />
          </div>

          <h2 className="text-2xl">Step 2: Enter your Links:</h2>
          <div className="flex gap-4">
          <div className="flex flex-col">

          {Links.map((link, index) => {
            
            return(
              <div key={index} className="flex pt-4 mx-12 gap-4">
            <input
              className="p-2 rounded-lg w-40 text-black"
              type="text"
              name="linktext"
              value={link.linktext}
              onChange={(e)=>{setLink(index, e.target.value, link.link)}}
              placeholder="Enter Link Text"
              />
            <input
              className="p-2 rounded-lg w-40 text-black"
              type="text"
              name="link"
              value={link.link}
              onChange={(e)=>{setLink(index, link.linktext, e.target.value)}}
              placeholder="Enter Link"
              />
          </div>
            )
            
          })}
          </div>
            <button onClick={addLinks} className=" px-6 py-2 font-bold h-fit self-end  bg-[#1e2330] hover:bg-[#303541] rounded-full">
              Add Link
            </button>
          </div>
          <h2 className="text-2xl">Step 3: Add a Profile Picture:</h2>
          <div className="mx-12">
            <input
              className="p-2 rounded-lg w-80 text-black"
              type="text"
              name="pfp"
              value={Pfp}
              onChange={
                (e) => setPfp(e.target.value)
              }
              placeholder="Enter Link to your picture"
            />
          </div>
        </div>
        <div className="w-full flex mt-5 mr-32 justify-center">
          <button
            onClick={handleSubmit}
            className="font-bold  py-4 px-10 bg-[#1e2330] hover:bg-[#303541] rounded-full"
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default Generate;
