import FoodSmaller from '../images/food-smaller.jpg';

export function renderMenuPage() {
    const contentDiv = document.getElementById("content");

    contentDiv.innerHTML = "";

    const headingOneMenu = document.createElement("h1");
    headingOneMenu.innerHTML = "Menu";
    contentDiv.appendChild(headingOneMenu);

    const image = document.createElement("img");
    image.src = FoodSmaller;
    image.setAttribute("class", "img-bistro");
    contentDiv.appendChild(image);

    // apetizers
    const headingTwoApetizers = document.createElement("h2");
    headingTwoApetizers.innerHTML = "Apetizers";
    contentDiv.appendChild(headingTwoApetizers);

    const apetizerOne = document.createElement("h3");
    apetizerOne.innerHTML = "Apetizer One";
    contentDiv.appendChild(apetizerOne);

    const apetizerOneText = document.createElement("div");
    apetizerOneText.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
    apetizerOneText.setAttribute("class", "text-menu");
    contentDiv.appendChild(apetizerOneText);

    const apetizerTwo = document.createElement("h3");
    apetizerTwo.innerHTML = "Apetizer Two";
    contentDiv.appendChild(apetizerTwo);

    const apetizerTwoText = document.createElement("div");
    apetizerTwoText.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
    apetizerTwoText.setAttribute("class", "text-menu");
    contentDiv.appendChild(apetizerTwoText);

    //main dishes
    const headingTwoMainDishes = document.createElement("h2");
    headingTwoMainDishes.innerHTML = "Main dishes";
    contentDiv.appendChild(headingTwoMainDishes);

    const mainDishOne = document.createElement("h3");
    mainDishOne.innerHTML = "Main dish One";
    contentDiv.appendChild(mainDishOne);

    const mainDishOneText = document.createElement("div");
    mainDishOneText.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
    mainDishOneText.setAttribute("class", "text-menu");
    contentDiv.appendChild(mainDishOneText);

    const mainDishTwo = document.createElement("h3");
    mainDishTwo.innerHTML = "Main dish Two";
    contentDiv.appendChild(mainDishTwo);

    const mainDishTwoText = document.createElement("div");
    mainDishTwoText.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
    mainDishTwoText.setAttribute("class", "text-menu");
    contentDiv.appendChild(mainDishTwoText);

    const mainDishThree = document.createElement("h3");
    mainDishThree.innerHTML = "Main dish Three";
    contentDiv.appendChild(mainDishThree);

    const mainDishThreeText = document.createElement("div");
    mainDishThreeText.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
    mainDishThreeText.setAttribute("class", "text-menu");
    contentDiv.appendChild(mainDishThreeText);

    //desserts
    const headingTwoDesserts = document.createElement("h2");
    headingTwoDesserts.innerHTML = "Desserts";
    contentDiv.appendChild(headingTwoDesserts);

    const dessertOne = document.createElement("h3");
    dessertOne.innerHTML = "Dessert One";
    contentDiv.appendChild(dessertOne);

    const dessertOneText = document.createElement("div");
    dessertOneText.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
    dessertOneText.setAttribute("class", "text-menu");
    contentDiv.appendChild(dessertOneText);
}