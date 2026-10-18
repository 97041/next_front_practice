
"use client";
import React, { useActionState, useState } from "react";
import { loginAction } from "./action/login";


const Loginpages = () => {
  const [state,action,pending] = useActionState(loginAction,null);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form action={action}>
        <div className="flex flex-col space-y-3">
          <input
            name="email"
            type="email"
            required
            className="border-2 border-black w-[250px] h-[45px]"
          />

          <input
            name="password"
            type="password"
            required
            className="border-2 border-black w-[250px] h-[45px]"
          />

          <button
            type="submit"
            className="bg-red-500 text-white font-bold p-3 hover:cursor-pointer w-[250px] h-[45px]"
          >
            {

              pending ? <p>submitting</p> : <p>login</p>

            }
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loginpages;
