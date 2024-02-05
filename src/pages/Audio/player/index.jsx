const Player = ({ surah }) => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center lg:gap-x-6 mb-3 gap-y-4 lg:gap-y-0">
        <img
          className="lg:w-56 rounded-md overflow-hidden"
          src="https://play-lh.googleusercontent.com/P4UKyjNFC83EneBayFIM83bklsygl8f-to7dIjXtvU7sXEiTBXTEwpnK1hPJBaRh9Efj"
          alt="image"
        />
        <div>
          {surah?.asma.en.long && (
            <h1 className="text font-bold text-3xl lg:text-4xl dark:text-white">
              {surah?.asma.en.long}
            </h1>
          )}
          <div className="flex items-center space-x-4">
            {surah?.type.id && (
              <p className="dark:text-gray-300">{surah?.type.id}</p>
            )}
            {surah?.ayahCount && (
              <p className="dark:text-gray-200 text-sm">
                Total Ayah: {surah?.ayahCount}
              </p>
            )}
          </div>
        </div>
      </div>
      <audio
        className="w-full rounded-none"
        controls
        autoPlay
        src={surah?.recitation.full}
      ></audio>
    </div>
  );
};

export default Player;
