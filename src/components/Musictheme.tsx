import React, { useEffect, useRef } from "react";

const Musictheme = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const enableAudio = () => {
      if (!audioRef.current) return;

      audioRef.current.muted = false; // 👈 QUAN TRỌNG
      audioRef.current.volume = 0.6;

      audioRef.current.play().catch(() => {
        console.log("Mobile vẫn chặn audio");
      });

      // Chỉ chạy 1 lần
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("touchstart", enableAudio, { once: true });
    document.addEventListener("click", enableAudio, { once: true });

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/assets/tetmusic.mp3"
      muted
      loop
      preload="auto"
    />
  );
};

export default Musictheme;
