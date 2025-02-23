import { useEffect } from "react";

export const AudioPlayer = () => {
  useEffect(() => {
    const audio = document.getElementById("background-music");
    if (audio) {
      audio.volume = 0.5; // Set volume to 50%
      audio.muted = false; // Unmute the audio

      const playAudio = () => {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      };

      audio.addEventListener("ended", playAudio);
      playAudio();

      return () => {
        audio.removeEventListener("ended", playAudio);
      };
    }
  }, []);

  return null;
};
