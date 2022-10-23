import nav from "./nav"
import { footer } from "./footer"
import makeButton from "./button"
import { makeColorStyle } from "./button-styles"
import logo from "./logo-on-white-bg.jpeg"
import { makeImage } from "./image"

const image = makeImage(logo)
import css from "./footer.css"
import buttonStyles from "./button.css"
document.body.appendChild(image)
const button = makeButton("Yay! A Button!")
button.style = makeColorStyle("cyan")
document.body.appendChild(button)
document.body.appendChild(footer)
