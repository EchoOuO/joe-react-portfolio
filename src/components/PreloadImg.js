import React from "react";
import { useEffect } from "react";

export default function PreloadImg({ srcArray }) {
  useEffect(() => {
    srcArray.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onerror = () => {
        console.error(`Failed to preload image: ${src}`);
      };
    });
  }, [srcArray]);

  return null; // This component doesn't render anything
}
