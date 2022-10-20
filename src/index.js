import { renderHomepage } from "./renderHomepage";
import { renderMenuPage } from "./renderMenuPage";
import { renderContactPage } from "./renderContactPage";

const buttonHome = document.getElementById("btn-home");
const buttonOurMenu = document.getElementById("btn-our-menu");
const buttonContact = document.getElementById("btn-contact");

buttonHome.addEventListener("click", renderHomepage);
buttonOurMenu.addEventListener("click", renderMenuPage);
buttonContact.addEventListener("click", renderContactPage);

renderHomepage();