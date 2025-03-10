"use client";
import { PacmanLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="-z-50 flex flex-col justify-center items-center h-screen">
      <PacmanLoader color="#000000" size={50} />
    </div>
  );
}
