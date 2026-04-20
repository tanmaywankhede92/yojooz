import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scoll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // change to "smooth" if you want animation
    });
  }, [pathname]);
  return null;
}

export default Scoll;
