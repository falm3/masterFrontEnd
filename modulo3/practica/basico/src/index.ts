import "./styles.scss";

import lemonImage from "./assets/logo_lemon.png";

const content: string = "Hola mundo -- Ejercicio básico de Bundling"

const image = document.createElement("img")
image.src = lemonImage


document.getElementById("contentContainer").innerHTML = content;

document.getElementById("imgContainer").appendChild(image);