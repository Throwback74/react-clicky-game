import React from "react";
import "./Layout.css";

export const Container = (props) => (
  <div className={`container is-fluid ${props.shake ? 'animated' : ''}`}>
    {props.children}
  </div>
);

//<div className={`container is-fluid ${props.classState}`}>
//{props.children}
//</div>