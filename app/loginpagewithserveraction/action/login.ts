"use server";


import { cookies } from "next/headers";
import { redirect, RedirectType } from 'next/navigation'

export async function loginAction(prevState:boolean, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const cookieStore = await cookies();

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const text = await res.text();

  console.log("Status:", res.status);
  console.log("Content-Type:", res.headers.get("content-type"));
  console.log("Response:", text);

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    return { error: "Backend returned non-JSON response. Check terminal." };
  }

  if (!res.ok) {
    return { error: data.message || "Login failed" };
  }

  cookieStore.set("accessToken", data.accessToken,{
    httpOnly: true,
    sameSite: "lax",
    
  })

    cookieStore.set("accessToken", data.refreshToken,{
    httpOnly: true,
    sameSite: "lax",
    
  })

  redirect('/filter');

  

  return { success: true, message: "Login successful" };
}