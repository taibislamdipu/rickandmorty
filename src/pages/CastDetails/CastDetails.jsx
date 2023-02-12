import axios from "axios";
import "./CastDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import statusImg from "../../assets/cast-details/icons/status.png";
import speciesImg from "../../assets/cast-details/icons/species.png";
import genderImg from "../../assets/cast-details/icons/gender.png";
import originImg from "../../assets/cast-details/icons/origin.png";
import locationImg from "../../assets/cast-details/icons/location.png";
import { BiLinkExternal } from "react-icons/bi";
import Loading from "../../Components/reusable/Loading";

const CastDetails = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { status, episode, gender, species, origin, location } = casts;

  const [episodeNames, setEpisodeNames] = useState([]);
  // console.log(episode);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
      try {
        const response = await axios.get(apiUrl);
        const episodeNumbers = response.data.episode.map(
          (episode) => episode.split("/")[5]
        );
        const episodeData = await Promise.all(
          episodeNumbers.map((number) =>
            axios.get(`https://rickandmortyapi.com/api/episode/${number}`)
          )
        );
        const episodes = episodeData.map((data) => data.data);
        const episodeList = episodes.map((episode) => episode.name);
        setEpisodeNames(episodeList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setCasts(res?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="castDetails-container h-fit pb-40">
      <Navbar />
      <div>{isLoading && <Loading />}</div>
      <main className="castDetails-inner container mx-auto grid grid-cols-2 gap-10">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h2 className="absolute left-0 -rotate-90 text-7xl font-bold text-[#1f273b]">
            {casts?.name}
          </h2>

          <span>
            <h3 className="text-[40px] text-thirdColor">{casts?.name}</h3>
            <div className="bg-blur h-72 w-72 rounded-lg border border-green-400 p-8">
              <img
                className="rounded-lg"
                src={casts?.image}
                alt={casts?.name}
              />
            </div>
          </span>
        </div>

        <div className="col-span-1">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blur col-span-1 rounded-lg border border-green-400 px-4 py-1">
              <div>
                <img className="w-10" src={statusImg} alt="statusImg" />
              </div>
              <h4>Status</h4>
              <h2 className="font-bold">{status}</h2>
            </div>

            <div className="bg-blur col-span-1 rounded-lg border border-green-400 px-4 py-1">
              <div>
                <img className="w-10" src={speciesImg} alt="speciesImg" />
              </div>
              <h4>Species</h4>
              <h2 className="font-bold">{species}</h2>
            </div>
            <div className="bg-blur col-span-1 rounded-lg border border-green-400 px-4 py-1">
              <div>
                <img className="w-10" src={genderImg} alt="genderImg" />
              </div>
              <h4>Gender</h4>
              <h2 className="font-bold">{gender}</h2>
            </div>

            <div className="bg-blur col-span-3 rounded-lg border border-green-400 px-4 py-2">
              <div>
                <img className="w-10" src={originImg} alt="originImg" />
              </div>
              <h4>Origin</h4>
              <div className="flex items-center justify-between">
                <h2 className="font-bold">{origin?.name}</h2>
                <span>
                  <BiLinkExternal size={23} color="white" />
                </span>
              </div>
            </div>

            <div className="bg-blur col-span-3 rounded-lg border border-green-400 px-4 py-2">
              <div>
                <img className="w-10" src={locationImg} alt="locationImg" />
              </div>
              <h4>Last Known Location</h4>
              <div className="flex items-center justify-between">
                <h2 className="font-bold">{location?.name}</h2>
                <span>
                  <BiLinkExternal size={23} color="white" />
                </span>
              </div>
            </div>

            <div className="bg-blur col-span-3 rounded-lg border border-green-400 px-4 py-2">
              <div>
                <img className="w-10" src={statusImg} alt="statusImg" />
              </div>
              <h4 className="mb-3">Episode(S)</h4>
              <div>
                {episodeNames.length > 5 ? (
                  <div
                    style={{
                      overflowY: "scroll",
                      maxHeight: "300px",
                    }}
                  >
                    <div className="ml-8">
                      <ul className="list-disc">
                        {episodeNames.map((name, index) => (
                          <li className="text-2xl" key={index}>
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="ml-8">
                    <ul className="list-disc">
                      {episodeNames.map((name, index) => (
                        <li className="text-xl" key={index}>
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CastDetails;
