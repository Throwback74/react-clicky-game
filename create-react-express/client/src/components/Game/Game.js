import React, { Component } from "react";
import images from "../../imagecard.json";
// eslint-disable-next-line
import {Container, Columns} from "../Layout";
import Nav from "../Nav";
import ImageCard from "../ImageCard";
import Hero from "../Hero";
import Footer from "../Footer";
import logo from "../../logo.svg";

class Game extends Component {

  state = {
    images: images,
    score: 0,
    topScore: 0,
    matches: 0,
    guesses: 0,
    matchedImage: 6,
  }

//   function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

    getMatch = (id) => {
      if (id === this.state.matchedImage) {
        let randID = Math.floor(Math.random() * 16) + 1;
        this.setState({
          matches: this.state.matches + 1,
          score: 0,
          matchedImage: randID
        });
      } else {
          this.setState({

            score: this.state.score + 1,
            topScore: this.state.topScore + 1,
            guesses: this.state.guesses +1
          });
      }
    }

  // setLayout = ({id, min, max}) => {
  //   let position = Math.floor(Math.random() * (max - min + 1)) + min;
  //   if(position < 4) {
  //     this.setState
  //   }
  // }


  render() {
    return (
      <div>
      <Nav score= {this.state.score} topScore = {this.state.topScore} matches = {this.state.matches}
      guesses = {this.state.guesses} />
        <Hero />
          <Container>
            <div className="columns">
            <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[0].id}
                  id = {images[0].id}
                  name = {images[0].name}
                  image = {images[0].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[1].id}
                  id = {images[1].id}
                  name = {images[1].name}
                  image = {images[1].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[2].id}
                  id = {images[2].id}
                  name = {images[2].name}
                  image = {images[2].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[3].id}
                  id = {images[3].id}
                  name = {images[3].name}
                  image = {images[3].image}
                  getMatch = {this.getMatch}
                />
              </Columns>
              <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[4].id}
                  id = {images[4].id}
                  name = {images[4].name}
                  image = {images[4].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[5].id}
                  id = {images[5].id}
                  name = {images[5].name}
                  image = {images[5].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[6].id}
                  id = {images[6].id}
                  name = {images[6].name}
                  image = {images[6].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[7].id}
                  id = {images[7].id}
                  name = {images[7].name}
                  image = {images[7].image}
                  getMatch = {this.getMatch}
                />
              </Columns>
              <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[8].id}
                  id = {images[8].id}
                  name = {images[8].name}
                  image = {images[8].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[9].id}
                  id = {images[9].id}
                  name = {images[9].name}
                  image = {images[9].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[10].id}
                  id = {images[10].id}
                  name = {images[10].name}
                  image = {images[10].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[11].id}
                  id = {images[11].id}
                  name = {images[11].name}
                  image = {images[11].image}
                  getMatch = {this.getMatch}
                />
              </Columns>
              <Columns size="is-one-quarter">
                <ImageCard
                  key = {images[12].id}
                  id = {images[12].id}
                  name = {images[12].name}
                  image = {images[12].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[13].id}
                  id = {images[13].id}
                  name = {images[13].name}
                  image = {images[13].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[14].id}
                  id = {images[14].id}
                  name = {images[14].name}
                  image = {images[14].image}
                  getMatch = {this.getMatch}
                />
                <ImageCard
                  key = {images[15].id}
                  id = {images[15].id}
                  name = {images[15].name}
                  image = {images[15].image}
                  getMatch = {this.getMatch}
                />
              </Columns>
            </div>
          </Container>
      
      <Footer image={logo}/>
      </div>
    );
}
}


export default Game;