import React from "react";
import "./styles.scss";
import lemonImage from "./assets/logo_lemon.png";

const content: string = "Hola mundo con react -- Ejercicio opcional de Bundling"
const image = document.createElement("img")
image.src = lemonImage


export const GreetComponent: React.FC = () => {

  return (
    <div>
      <h1 className="mycolor">{ content }</h1>
      <img src={image.src} alt="imagen corporativa lemoncode" />
    </div>
  );
};
