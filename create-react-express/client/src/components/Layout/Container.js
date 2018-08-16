import React from "react";
import "./Layout.css";

export const Container = ({children, containerClass}) => 
<div className={"container is-fluid " + {containerClass}}>
{children}
</div>;
// className={"column " +{size}}