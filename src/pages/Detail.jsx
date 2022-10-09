import React, { useState, useEffect } from "react";
import Container from "components/DetailCont";
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle";
import { useFetchGet } from "utils/hooks/useFetchGet";

const Detail = (props) => {
  const { id_movie } = props.params;
  const [data] = useFetchGet(
    `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_KEY}&append_to_response=videos`
  );
  const [videos, setVideos] = useState([]);
  useTitle("Movie Details");

  useEffect(() => {
    data.videos !== undefined && setVideos(data.videos.results);
  }, [data]);
  return (
    <Container>
      <div className="w-full  text-center flex justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 w-full mx-72 border  py-5 ">
          <div className=" flex md:justify-end justify-center ">
            <img
              className="w-80 h-85 rounded-lg border "
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt={props.title}
            />
          </div>
          <div className="ml-6 text-start h-full text-white md:mt-0 mt-5 md:mr-36 ">
            <p className=" text-3xl md:text-6xl">{data?.title}</p>
            <p className="h-full mt-7 text-xl">{data?.overview}</p>
          </div>
        </div>
      </div>

      <div>
        {videos.map((video) => (
          <iframe
            id={video.id}
            width="560"
            height="315"
            scr={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
            allowFullScreen
          />
        ))}
      </div>
    </Container>
  );
};

export default WithRouter(Detail);
