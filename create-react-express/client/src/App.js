import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import ImageCard from "./components/ImageCard";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import images from "./images.json"
import logo from "./logo.svg";
import "./App.css";

class App extends Component {





  render() {
    return (
      <div>
      <Nav />
        <Hero />
          <Wrapper />
          <ImageCard
            name = {images[0].name}
            image = {images[0].image}
          />
          <ImageCard
            name = {images[1].name}
            image = {images[1].image}
          />
          <ImageCard
            name = {images[2].name}
            image = {images[2].image}
          />
          <ImageCard
            name = {images[3].name}
            image = {images[3].image}
          />
          <ImageCard
            name = {images[4].name}
            image = {images[4].image}
          />
          <ImageCard
            name = {images[5].name}
            image = {images[5].image}
          />
          <ImageCard
            name = {images[6].name}
            image = {images[6].image}
          />
          <ImageCard
            name = {images[7].name}
            image = {images[7].image}
          />
          <ImageCard
            name = {images[8].name}
            image = {images[8].image}
          />
          <ImageCard
            name = {images[9].name}
            image = {images[9].image}
          />
          <ImageCard
            name = {images[10].name}
            image = {images[10].image}
          />
          <ImageCard
            name = {images[11].name}
            image = {images[11].image}
          />
          <ImageCard
            name = {images[12].name}
            image = {images[12].image}
          />
          <ImageCard
            name = {images[13].name}
            image = {images[13].image}
          />
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
