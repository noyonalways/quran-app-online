import axios from "axios";
import React, { useEffect, useState } from "react";
import PulseLoader from "../../components/PulseLoader";
import quran from "../../assets/quran_2.png";

const Home = () => {
	const [surahList, setSuraList] = useState([]);
	const [currentSurahArabic, setCurrentSurah] = useState({});
	const [currentSurahEnglishTranlation, setcurrentSurahEnglishTranlation] =
		useState({});
	const [currentArabicAyah, setCurrentAyah] = useState({});
	const [loading, setLoading] = useState(false);
	
	async function querySpecificSurah(surahNumber) {
		setLoading(true);
		const { data } = await axios.get(
			`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.asad`
		);
		setCurrentSurah(data.data[0]); 
		setcurrentSurahEnglishTranlation(data.data[1]);

		setLoading(false);
	}

	async function querySpecificAyah(surahNumber, ayahNumber) {
		const { data } = await axios.get(
			`https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/editions/quran-uthmani,en.asad`
		);
		setCurrentAyah(data?.data[0]); // Arbic Ayah
		// setCurrentAyah(data?.data[1]); --> for English Translation Ayah
	}

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("https://api.alquran.cloud/v1/surah");
			setSuraList(data.data);
		})();

		querySpecificSurah(1);
        querySpecificAyah(1, 1)
        
	}, []);

	const handleSpecificSurah = (e) => {
		querySpecificSurah(e.target.value);
	};

	const handleSpecificAyah = (e) => {
		querySpecificAyah(currentSurahArabic.number, e.target.value);
	};

    console.log(currentArabicAyah);

	return (
		<section className="min-h-screen">
			<div className="container py-2 md:py-6">
				<div className="overflow-hidden relative text-white   bg-gradient-to-r from-[#199eea] to-[#e16cf3] p-3 shadow-md rounded-md md:max-w-5xl mx-auto mb-10">
					<div className="flex justify-between">
						<div className="md:basis-2/4">
							<h1 className="text-3xl  md:text-4xl mb-6 font-bold font-andika">
								Quran Completion
							</h1>
							<div className="block md:flex md:flex-row space-y-3 md:space-y-0 md:space-x-4">
								<div className="md:flex-1">
									<div className="flex justify-between mb-2">
										<p>Last Read {currentSurahArabic.englishName}</p>
										<span>16%</span>
									</div>
									<div className="w-full h-2 bg-slate-200 rounded-full">
										<div className="w-1/6 h-full text-center text-xs text-white bg-white rounded-full"></div>
									</div>
								</div>
								<button className="bg-white px-5  py-2 md:py-3 rounded-md text-[#e16cf3] font-semibold">
									See History{" "}
								</button>
							</div>
						</div>
						<div className="basis-2/5 md:basis-auto z-10">
							<img className="md:w-52 " src={quran} alt="" />
						</div>
					</div>
					<div className="w-96 h-96 bg-gradient-to-t from-[#ffffff4b] to-[#ffffff13] rounded-full absolute right-2 -bottom-72"></div>
				</div>
				<div className="p-3 md:p-4 md:shadow rounded-md md:max-w-5xl mx-auto dark:bg-gray-800">
					<div className="flex mb-6 justify-between">
						<div>
							<select
								defaultValue="1"
								onChange={handleSpecificSurah}
								className=" bg-white dark:bg-slate-600 border dark:border-slate-500 px-2 py-2 rounded w-full dark:text-gray-200"
							>
								{surahList?.map((sura) => (
									<option
										key={sura.number}
										className="font-semibold"
										value={sura.number}
									>
										{sura.number}. {sura.englishName}
									</option>
								))}
							</select>
						</div>
						<div className="text-center hidden md:inline-block dark:text-gray-200">
							<h1 className="font-bold text-xl">
								{currentSurahArabic?.englishName}
							</h1>
							<h1>{currentSurahArabic?.englishNameTranslation}</h1>
						</div>
						<div>
							<select
								onChange={handleSpecificAyah}
								className=" bg-white dark:bg-slate-600 border dark:border-slate-500 px-2 py-2 rounded w-full dark:text-gray-200"
                                defaultValue='1'
							>
								{currentSurahArabic?.ayahs?.map((ayah) => (
									<option
										key={ayah.number}
										className="font-semibold"
										value={ayah.numberInSurah}
									>
										Ayah. {ayah.numberInSurah}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="text-center mb-6 md:hidden dark:text-gray-200">
						<h1 className="font-bold text-xl">
							{currentSurahArabic?.englishName}
						</h1>
						<h1>{currentSurahArabic?.englishNameTranslation}</h1>
					</div>
					{loading ? (
						<PulseLoader />
					) : (
						<div>
							<div className="flex-1 mb-3 dark:text-gray-200" dir="rtl" lang="ar">
								<h2 dir="ltr" lang="eng" className="text-lg font-bold mb-3">
									Arabic: {currentSurahArabic?.edition?.englishName}
								</h2>
								{currentSurahArabic?.ayahs?.map((ayah, index) => (
									<p
										key={ayah.number}
										className="text-5xl font-medium inline-block mb-2 font-lateef"
									>
										<span className="mx-1 font-semibold text-sm w-6 h-6 inline-flex justify-center items-center rounded-full border border-gray-500 ">
											{ayah.numberInSurah}
										</span>
										<span>{ayah.text}</span>
									</p>
								))}
							</div>
							<div className="flex-1 dark:text-gray-200" dir="ltr" lang="eng">
								<h2 className="text-lg font-bold mb-3">
									English Translation by :{" "}
									{currentSurahEnglishTranlation?.edition?.englishName}
								</h2>
								{currentSurahEnglishTranlation?.ayahs?.map((ayah, index) => (
									<p
										key={ayah.number}
										className="text-xl font-medium inline-block mb-2"
									>
										<span className="mx-2 font-semibold text-xs w-6 h-6 inline-flex justify-center items-center rounded-full border border-gray-500 ">
											{ayah.numberInSurah}
										</span>
										<span>{ayah.text}</span>
									</p>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Home;
