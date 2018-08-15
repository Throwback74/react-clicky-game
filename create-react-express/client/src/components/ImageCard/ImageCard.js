import React from "react";
import PreloadImage from 'react-preload-image';
import "./ImageCard.css";

const ImageCard = props => (
  <div className="img-container">
  {/* <PreloadImage
  className="imgClass" alt={props.name}
  src={props.image}
  lazy <img src={require('../logo.png')} alt="logo" className="brand-logo"/>
 /> */}
    <img alt={props.name} src={props.image} />
  </div>
);

export default ImageCard;