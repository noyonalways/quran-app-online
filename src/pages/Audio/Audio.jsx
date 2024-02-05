import axios from "axios";
import React, { useEffect, useState } from "react";
import SurahCard from "./surah-card";
import Player from "./player";

const QuranAudio = () => {
  const [surahs, setSurahs] = useState([]);
  const [currentSurah, setCurrentSurah] = useState(surahs[0]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://quran-endpoint.vercel.app/quran"
      );
      setSurahs(data.data);
    })();
  }, []);

  const handlePlay = (surah) => {
    setCurrentSurah(surah);
  };

  return (
    <section className="pb-5">
      <div className="container">
        <div className="pb-6 pt-3">
          <Player surah={currentSurah} />
        </div>
        <div className="space-y-4">
          {surahs.map((surah) => (
            <SurahCard
              surah={surah}
              key={surah.number}
              handlePlay={handlePlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuranAudio;
