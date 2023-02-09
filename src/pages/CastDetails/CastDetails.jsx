import axios from "axios";
import "./CastDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import statusImg from "../../assets/cast-details/icons/status.png";
import { BiLinkExternal } from "react-icons/bi";
import Loading from "../../Components/reusable/Loading";

const CastDetails = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { status, episode } = casts;
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
    <div className="castDetails-container h-screen">
      <Navbar />
      <div>{isLoading && <Loading />}</div>
      <main className="container mx-auto grid grid-cols-2 gap-10">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h3 className="text-[40px] text-thirdColor">{casts?.name}</h3>
          <h3>{episodeNames.length}</h3>
          <div className="h-72 w-72 rounded-lg border border-green-400 bg-blur p-9">
            <img className="rounded-lg" src={casts?.image} alt={casts?.name} />
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 rounded-lg border border-green-400 bg-blur px-4 py-2">
              <div>
                <img src={statusImg} alt="statusImg" />
              </div>
              <h4>Status</h4>
              <h2 className="font-bold">{status}</h2>
            </div>
            <div className="col-span-1 rounded-lg border border-green-400 bg-blur px-4 py-2">
              <div>
                <img src={statusImg} alt="statusImg" />
              </div>
              <h4>Status</h4>
              <h2 className="font-bold">{status}</h2>
            </div>
            <div className="col-span-1 rounded-lg border border-green-400 bg-blur px-4 py-2">
              <div>
                <img src={statusImg} alt="statusImg" />
              </div>
              <h4>Status</h4>
              <h2 className="font-bold">{status}</h2>
            </div>

            <div className="col-span-3 rounded-lg border border-green-400 bg-blur px-4 py-2">
              <div>
                <img src={statusImg} alt="statusImg" />
              </div>
              <h4>Status</h4>
              <div className="flex items-center justify-between">
                <h2 className="font-bold">{status}</h2>
                <span>
                  <BiLinkExternal size={23} color="white" />
                </span>
              </div>
            </div>

            <div className="col-span-3 rounded-lg border border-green-400 bg-blur px-4 py-2">
              <div>
                <img src={statusImg} alt="statusImg" />
              </div>
              <h4>Status</h4>
              <div className="flex items-center justify-between">
                <h2 className="font-bold">{status}</h2>
                <span>
                  <BiLinkExternal size={23} color="white" />
                </span>
              </div>
            </div>

            <div className="col-span-3 rounded-lg border border-green-400 bg-blur px-4 py-2">
              <div>
                <img src={statusImg} alt="statusImg" />
              </div>
              <h4>Episode(S)</h4>
              <div>
                {episodeNames.length > 5 ? (
                  <div
                    style={{
                      overflowY: "scroll",
                      maxHeight: "300px",
                    }}
                  >
                    <ul className="list-disc">
                      {episodeNames.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="ml-8">
                    <ul className="list-disc">
                      {episodeNames.map((name, index) => (
                        <li key={index}>{name}</li>
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
