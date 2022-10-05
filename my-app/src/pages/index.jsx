import React, { Component } from 'react';

import Container from '../components/Container';
import Loading from '../components/Loading';
import Card from '../components/Card';

class App extends Component {
  // constructor strart
  // decalre state,harus ada di bawah class app
  state = {
    title: '',
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    let dataTemp = [];
    for (let i = 0; i < 10; i++) {
      const temp = {
        id: i + i,
        title: `Film title ${i + 1}`,
        image:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5EklUdiZB-syDPm-2m1FtlO1abOscjVlab5V55oK_THuSNYI0',
      };
      dataTemp.push(temp);
    }

    setTimeout(() => {
      this.setState({ loading: false, datas: dataTemp });
    }, 2000);
  }

  render() {
    return (
      <Container>
        <p>{this.state.title} </p>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid:cols-5 gap-10 md:mt-14 md:mx-14">
          {this.state.loading
            ? this.state.skeleton.map((item) => <Loading key={item} />)
            : this.state.datas.map((data) => (
                <Card key={data.id} image={data.image} title={data.title} judul={data.title} />
              ))}
        </div>
      </Container>
    );
  }
}
export default App;
