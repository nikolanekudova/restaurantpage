import BistroSmaller from '../images/bistro-smaller.jpg';
 
 export function renderHomepage() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const headingOneName = document.createElement("h1");
    headingOneName.innerHTML = "Nikca's Bistro";
    contentDiv.appendChild(headingOneName);

    const image = document.createElement("img");
    image.src = BistroSmaller;
    image.setAttribute("class", "img-bistro");
    contentDiv.appendChild(image);

    const headingTwo = document.createElement("h2");
    headingTwo.innerHTML = "The best bistro in Brno!";
    contentDiv.appendChild(headingTwo);

    const textAboutRestaurant = document.createElement("div");
    textAboutRestaurant.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Class aptent taciti sociosqu ad litora torquent pe conubia nostra, per inceptos hymenaeos. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis nonummy placerat. Duis viverra diam non justo. Etiam neque. Praesent vitae arcu tempor neque lacinia pretium.";
    contentDiv.appendChild(textAboutRestaurant);

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