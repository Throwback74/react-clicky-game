import React, { Component } from "react";
import {Container, Columns} from "./components/Layout";
import Nav from "./components/Nav";
import ImageCard from "./components/ImageCard";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import JackTest from "./components/Images/jackskellington.jpeg"
import images from "./images.json"
import logo from "./logo.svg";
import "./App.css";

class App extends Component {





  render() {
    return (
      <div>
      <Nav />
        <Hero />
          <Container>
            <div className="columns">
            <Columns size="is-one-quarter">
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
              </Columns>
              <Columns size="is-one-quarter">
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
              </Columns>
              <Columns size="is-one-quarter">
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
              </Columns>
              <Columns size="is-one-quarter">
                <ImageCard
                  name = {images[12].name}
                  image = {images[12].image}
                />
                <ImageCard
                  name = {JackTest}
                  image = {JackTest}
                />
                <ImageCard
                  name = {images[32].name}
                  image = {images[32].image}
                />
                <ImageCard
                  name = {images[33].name}
                  image = {images[33].image}
                />
              </Columns>
            </div>
          </Container>
      {/* <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */}
      <Footer image={logo}/>
      </div>
    );
  }
}

export default App;
