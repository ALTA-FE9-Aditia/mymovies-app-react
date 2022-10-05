import React, { Component } from 'react';

import Container from '../components/Container';
import Loading from '../components/Loading';
import Card from '../components/Card';
import axios from 'axios';
import ButtonPrimary, { ButtonSecondary } from '../components/Button';

class App extends Component {
  // constructor strart
  // decalre state,harus ada di bawah class app
  state = {
    title: '',
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
    page: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=5f2a86d372a9911a3c60f7df976b2522&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        const { results } = res.data;
        // console.log(results);
        const newPage = this.state.page + 1;

        const temp = [...this.state.datas];
        temp.push(...results);
        this.setState({ datas: temp, page: newPage });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container>
        <p>{this.state.title} </p>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid:cols-5 gap-10 md:mt-14 md:mx-14">
          {this.state.loading
            ? this.state.skeleton.map((item) => <Loading key={item} />)
            : this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  judul={data.title}
                />
              ))}
        </div>
        <ButtonSecondary label="Load More" onClick={() => this.fetchData()} />
      </Container>
    );
  }
}
export default App;
