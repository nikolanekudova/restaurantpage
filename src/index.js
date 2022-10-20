import { renderHomepage } from "./renderHomepage";
import { renderMenuPage } from "./renderMenuPage";
import { renderContactPage } from "./renderContactPage";
import "./style.css";
import _ from 'lodash';
import ContactSmaller from './contact-smaller.jpg';
import FoodSmaller from './food-smaller.jpg';
import BistroSmaller from './bistro-smaller.jpg';

const buttonHome = document.getElementById("btn-home");
const buttonOurMenu = document.getElementById("btn-our-menu");
const buttonContact = document.getElementById("btn-contact");

buttonHome.addEventListener("click", renderHomepage);
buttonOurMenu.addEventListener("click", renderMenuPage);
buttonContact.addEventListener("click", renderContactPage);

renderHomepage();