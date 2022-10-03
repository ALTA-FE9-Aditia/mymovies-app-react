import React, { Component } from 'react';

import Container from '../components/Container';

class App extends Component {
  render() {
    return (
      <Container>
        <div class="grid grid-cols-1 gap-4 mt-7 mx-16 content-center md:mx-14 md:gap-4  md:grid-cols-5 md:mt-14">
          <div class="max-w-sm rounded overflow-hidden shadow-md w-64 bg-white">
            <img
              class="w-full h-80"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5EklUdiZB-syDPm-2m1FtlO1abOscjVlab5V55oK_THuSNYI0"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Flipped</div>
              <p class="text-gray-700 text-base">Jodoh</p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg w-64 bg-white ">
            <img
              class="w-full h-80"
              src="https://flxt.tmsimg.com/assets/p193875_p_v8_af.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Inglourious Basterds</div>
              <p class="text-gray-700 text-base">Perang</p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg w-64 bg-white ">
            <img
              class="w-full h-80"
              src="https://i.pinimg.com/originals/f6/22/a7/f622a7e876f7d768f07f2af092a23e40.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Django Unchained</div>
              <p class="text-gray-700 text-base">Balas dendam</p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg w-64 bg-white ">
            <img
              class="w-full h-80"
              src="https://flxt.tmsimg.com/assets/p15829_p_v8_as.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Forest Gump</div>
              <p class="text-gray-700 text-base">Jenny</p>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-lg w-64 bg-white ">
            <img
              class="w-full h-80"
              src="https://m.media-amazon.com/images/M/MV5BMTc5OTIxMjQ4NF5BMl5BanBnXkFtZTcwOTAyNDcyOQ@@._V1_.jpg"
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Scary Movie V</div>
              <p class="text-gray-700 text-base">Horor Komedi</p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default App;
