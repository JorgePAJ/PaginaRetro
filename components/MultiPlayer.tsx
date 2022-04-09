import React, { useState, useEffect } from "react";

export default function Player({ url, back }) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(url));
  }, []);

  return (
    <button
      onClick={() => {
        audio?.play();
      }}
    >
      <img src={back} />
    </button>
  );
}
