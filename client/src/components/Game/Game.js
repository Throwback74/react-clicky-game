import React, { Component } from "react";
import images from "../../imagecard.json";
// import images from "../../images.json"
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
    clickedImage: [],
    animate: false,
    classes: "container is-fluid"
  }

shuffle = (array) => {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
  // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
  //     // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

    displayArr = (images) => {
      var displayArray = [];
      displayArray = images.slice(0, 12);
      console.log(displayArray);
      return displayArray;
    }

    componentDidMount() {
      this.displayArr(images);
      var displayArray = this.displayArr(images);
      console.log("success");
      this.setState({
        images: displayArray
      });
    }

//Attempting to set up a shake animation upon losing, but could not get it to fire upon loss, it fires when the user clicks the first time after the loss
    // setContainerClass = (animate) => {
    //   if(animate) {
    //     this.setState({
    //       classes: "container is-fluid animated"
    //     });
    //     // alert("You Lose...Try Again!");
    //   }
    //   else {
    //     this.setState({
    //       classes: "container is-fluid"
    //     });
    //   }
    // }
    

    setStateChange = (id) => {
        this.setState({
          animate: true
        });
      // }
      // this.setContainerClass(this.state.animate)
          this.setState({
            score: 0,
            clickedImage: [],
            animate: true,
            // classes: this.setContainerClass(this.state.animate)
          });
          
    }





    getMatch = (id) => {
      this.shuffle(images);
      this.displayArr(images);
      var displayArray = this.displayArr(images);
      this.setState({
        images: displayArray,
        animate: false,
      });
      console.log(typeof(this.state.clickedImage));
      if(this.state.clickedImage.includes(id)) {
        this.setStateChange(id);
      }else {
        if(this.state.topScore <= this.state.score){
          this.setState({
            score: this.state.score + 1,
            topScore: this.state.topScore + 1,
            clickedImage:  [...this.state.clickedImage, id],
            animate: false,
            // classes: this.setContainerClass(this.state.animate)
          });
        }else {
          this.setState({
            score: this.state.score + 1,
            clickedImage: [...this.state.clickedImage, id],
            animate: false,
            // classes: this.setContainerClass(this.state.animate)
          });
        }
        console.log(this.state.clickedImage);
        // this.setContainerClass(this.state.animate);
      }
    }


  render() {
    return (
      <div>
      <Nav score= {this.state.score} topScore = {this.state.topScore} matches = {this.state.matches}
      guesses = {this.state.guesses} />
        <Hero />
          <Container shake={!this.state.score && this.state.topScore} classState={this.state.classes}>
            <div className="columns is-multiline">
              {this.state.images.map(image => (
                <ImageCard
                  key={image.id}
                  id={image.id}
                  
                  name={image.name}
                  image={image.image}
                  getMatch={this.getMatch}
                />
              ))}
            </div>
          </Container>
      <Footer image={logo}/>
      </div>
    );
}
}


export default Game;