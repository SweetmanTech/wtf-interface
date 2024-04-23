"use client";

import { useState } from "react";
import Image from "next/image";

const Animation = () => {
  const [showContent, setShowContent] = useState("image");

  const handleVideoEnd = () => {
    setShowContent("secondImage");
  };

  const handleToOffVideoEnd = () => {
    setShowContent("image");
  };

  const handleClick = () => {
    switch (showContent) {
      case "image":
        setShowContent("video");
        break;
      case "secondImage":
        setShowContent("toOffVideo");
        break;
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: 200,
        height: 200,
        position: "relative",
        cursor: "pointer",
        backgroundColor: "#586745",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showContent === "image" && (
        <Image src="/off.png" alt="logo" layout="fill" objectFit="cover" />
      )}
      {showContent === "video" && (
        <video
          width="100%"
          height="100%"
          autoPlay
          onEnded={handleVideoEnd}
          style={{ objectFit: "cover" }}
        >
          <source src="/to-on.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {showContent === "secondImage" && (
        <Image src="/on.png" alt="logo" layout="fill" objectFit="cover" />
      )}
      {showContent === "toOffVideo" && (
        <video
          width="100%"
          height="100%"
          autoPlay
          onEnded={handleToOffVideoEnd}
          style={{ objectFit: "cover" }}
        >
          <source src="/to-off.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Animation;
