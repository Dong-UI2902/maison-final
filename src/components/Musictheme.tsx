import React, { useEffect, useRef } from "react";

const Musictheme = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to play the audio when the component mounts
    const playPromise = audioRef.current?.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started
        })
        .catch((error) => {
          // Autoplay was prevented (e.g., sound was not muted)
          console.log("Autoplay blocked. User interaction needed.");
          // Optional: Add an event listener to play after the first user click
          document.addEventListener(
            "click",
            () => {
              audioRef.current?.play();
              audioRef.current!.muted = false;
            },
            { once: true }
          );
        });
    }

    // Pause audio when the component unmounts
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/assets/tetmusic.mp3" muted />
    </div>
  );
};

export default Musictheme;
