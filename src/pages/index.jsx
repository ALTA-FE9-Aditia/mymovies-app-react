import Container from "components/Container";
import Loading from "components/Loading";
import Card from "components/Card";
import axios from "axios";
import { ButtonSecondary } from "components/Button";
import { WithRouter } from "utils/Navigation";
import { useState, useEffect } from "react";
import { data } from "browserslist";
import { useTitle } from "utils/hooks/useTitle.js";

function App(props) {
  // cosntructor start

  // nama state,nama update state,
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // cosntructor end
  useTitle("MY's Theatre");

  useEffect(() => {
    fetchData();
    // fetchPopular()
  }, []);

  // manggil api
  function fetchData() {
    // setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY}&page=${page}`
      )
      .then((res) => {
        const { results } = res.data;
        // console.log(results);
        const newPage = page + 1;
        // pakai spread agar tidak [[{},{}]],jadinya [{}]
        const temp = [...datas];
        temp.push(...results);
        // this.setState({ datas: temp, page: newPage });
        setDatas(temp);
        // page increment
        setPage(newPage);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function addFav(movie) {
    // console.log(movie.title)
    // bikin logic supaya ga ada duplikasi difav,klo udah ada film nya kasih alert.
    // klo ga ada push ke parsedMovies,klo ada kasih alert
    // pake method .find()by id
    /**if movie.id === data.id */
    // di dalam browser locar storage ada value dan key,keynya dikasih nama

    // favMovies
    const getMovies = localStorage.getItem("favMovies");

    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      const favMovie = parsedMovies.find((obj) => obj.title === movie.title);
      if (favMovie) return alert("this movie already added!");

      parsedMovies.push(movie);
      const temp = JSON.stringify(parsedMovies);
      localStorage.setItem("favMovies", temp);
    } else {
      const temp = JSON.stringify([movie]);
      localStorage.setItem("favMovies", temp);
    }
  }

  return (
    <Container>
      <div className="w-full  text-center flex justify-center">
        <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-5 lg:grid:cols-5 gap-5 md:mt-14 md:mx-10">
          {loading
            ? skeleton.map((item) => <Loading key={item} />)
            : datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  onNavigate={() => props.navigate(`/detail/${data.id}`)}
                  addFavorite={() => addFav(data)}
                />
              ))}
        </div>
      </div>
      <ButtonSecondary label="More Movies..." onClick={() => fetchData()} />
    </Container>
  );
}

export default WithRouter(App);
