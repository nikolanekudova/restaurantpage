import ContactSmaller from '../images/contact-smaller.jpg';

export function renderContactPage() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const headingOneContact = document.createElement("h1");
    headingOneContact.innerHTML = "Contact";
    contentDiv.appendChild(headingOneContact);

    const image = document.createElement("img");
    image.src = ContactSmaller;
    image.setAttribute("class", "img-bistro");
    contentDiv.appendChild(image);

    const contact = document.createElement("div");
    contact.innerHTML = "You can catch us on +420 800 800 800 or on nikca@nikcasbistro.com";
    contact.setAttribute("class", "div-under-img")
    contentDiv.appendChild(contact);

    const headingTwoOpen = document.createElement("h2");
    headingTwoOpen.innerHTML = "Opening hours";
    contentDiv.appendChild(headingTwoOpen);

    const textHours = document.createElement("div");
    textHours.innerHTML = "Monday to Friday: 10:00–20:00";
    contentDiv.appendChild(textHours);

    const headingTwoLocation = document.createElement("h2");
    headingTwoLocation.innerHTML = "Location";
    contentDiv.appendChild(headingTwoLocation);

    const textLocation = document.createElement("div");
    textLocation.innerHTML = "Namesti Svobody 11, Brno";
    contentDiv.appendChild(textLocation);
}