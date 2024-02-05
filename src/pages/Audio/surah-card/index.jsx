import React from "react";

const SurahCard = ({ surah, handlePlay }) => {
  return (
    <div
      onClick={() => handlePlay(surah)}
      className="rounded-md overflow-hidden hover:cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800"
    >
      <div className="flex items-center gap-x-3 ">
        <img
          className="w-36"
          src="https://play-lh.googleusercontent.com/P4UKyjNFC83EneBayFIM83bklsygl8f-to7dIjXtvU7sXEiTBXTEwpnK1hPJBaRh9Efj"
          alt="image"
        />
        <div>
          <h1 className="text-xl font-bold dark:text-white">
            {surah.asma.en.long}
          </h1>
          <p className="dark:text-gray-200">{surah.type.id}</p>
        </div>
      </div>
    </div>
  );
};

export default SurahCard;
