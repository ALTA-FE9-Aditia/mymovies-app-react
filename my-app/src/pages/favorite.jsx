import { Component } from 'react';
import Container from '../components/Container';

class Favorite extends Component {
  render() {
    return (
      <Container>
        <div class="grid grid-cols-1  mt-7 mx-16  md:mx-14   md:grid-cols-5 md:mt-14 w-full">
          <div>
            <img
              class="w-80 h-90 rounded-lg"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR5EklUdiZB-syDPm-2m1FtlO1abOscjVlab5V55oK_THuSNYI0"
              alt="Sunset in the mountains"
            />
          </div>
          <div class=" col-span-3 space-y-4 text-white md:mt-0 mt-7  md:ml-16 w-full">
            <p className="text-3xl">FLIPPED</p>
            <p className="italic">Jodoh ga ada yang tau. </p>
            <p class="border-b-2">Genre: Cinta2an.</p>
            <p class="border-b-2">Realese Date: 11 August 2010</p>
            <p class="border-b-2">Duration: 1 hour 41 minute</p>
            <p class="border-b-2">Popularity : 6379.598</p>
            <p class="border-b-2 break-words pr-1">
              Production Companies : Lionsgate,Capstone Pictures,BuzzFeed Studios,Tea Shop
              Productions,Capstone Studios
            </p>
            <p class="border-b-2">Status: Released</p>
            <p class="border-b-2">Original Language : English</p>
            <p class="border-b-2">Budget: $3,000,000</p>
            <p class="border-b-2">Revenue:$11,900,000</p>
          </div>
        </div>

        <div class="grid grid-cols-1  mt-7 mx-16  md:mx-14   md:grid-cols-5 md:mt-10  text-white">
          <div class="col-start-1 text-2xl">
            <p>Overview</p>
          </div>
        </div>
        <div class="grid grid-cols-1  mt-7 mx-16  md:mx-14   md:grid-cols-1 md:mt-2 md:mr-44  text-white">
          <p>
            For best friends Becky and Hunter, life is all about conquering fears and pushing
            limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower,
            they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing
            skills will be put to the ultimate test as they desperately fight to survive the
            elements, a lack of supplies, and vertigo-inducing heights
          </p>
        </div>
      </Container>
    );
  }
}

export default Favorite;
