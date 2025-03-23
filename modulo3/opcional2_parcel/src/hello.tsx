import React from "react";
const classes = require ("./styles.scss");
const lemonImage = require ("./assets/logo_lemon.png");

const content: string = "Hola mundo con react -- Ejercicio opcional de Bundling con parcel"
const image = document.createElement("img")
image.src = lemonImage


export const HelloComponent: React.FC = () => {

  return (
    <div>
      <h1 className= {classes.mycolor}>{ content }</h1>
      <img src={image.src} alt="imagen corporativa lemoncode" />
    </div>
  );
};