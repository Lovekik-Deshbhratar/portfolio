"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

const CopyEmailCard = () => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    const text = "lovekikdeshbhratar@gmail.com";
    navigator.clipboard.writeText(text);
    setCopy(true);
  };
  return (
    <div className="rounded-2xl flex flex-col items-center justify-center gap-5 py-8 bg-gradient-to-r to-pink-900 from-violet-900">
      <div>
        <h1 className="font-extrabold text-xl">
          Get in touch with me through email
        </h1>
      </div>
      <div>
        <button
          onClick={handleCopy}
          className="flex justify-center items-center border rounded-md px-6 py-2 text-sm gap-3 hover:border-gray-900 transition ease-in-out duration-500"
        >
          <span className="animate-bounce">
            <IoCopyOutline />
          </span>
          <span>{copy ? "Email is Copied!" : "Copy my email address"}</span>
        </button>
      </div>
    </div>
  );
};

export default CopyEmailCard;
