"use client";

import React, { useState, useEffect } from "react";
import FullHeader from "./FullHeader";
import SmallHeader from "./SmallHeader";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth >= 1250 ? <FullHeader /> : <SmallHeader />}</div>;
}
