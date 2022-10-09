import React, { useEffect, useState } from "react";
import { WithRouter } from "utils/Navigation";
import { useTitle } from "utils/hooks/useTitle.js";
import FavContainer from "components/FavContaienr";
import Loading from "components/Loading";
import CardFav from "components/CardFav";

function Favorite() {
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(false);
  useTitle("My favorite movies");

  useEffect(() => {
    fetchData();
  }, []);

  const delFav = (movie) => {
    const del = datas.filter((e) => e !== movie);
    setDatas(del);
    localStorage.setItem("favMovies", del);
  };

  function fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      setDatas(parsedMovies);
      setLoading(false);
    }
  }

  return (
    <FavContainer>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid:cols-5 gap-4 md:mt-14 md:mx-14">
        {loading
          ? skeleton.map((item) => <Loading key={item} />)
          : datas.map((data) => (
              <CardFav
                key={data.id}
                image={data.poster_path}
                title={data.title}
                onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                delFavorite={() => delFav(data)}
              />
            ))}
      </div>
    </FavContainer>
  );
}
export default WithRouter(Favorite);