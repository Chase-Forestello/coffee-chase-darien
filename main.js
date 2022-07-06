"use strict"
// var roastSelector = document.querySelector('#roast-selection'); I don't think we need this.
var section = document.getElementById('coffees');
var submitButton1 = document.getElementById('submit1');
var submitButton2 = document.getElementById('submit2');
var deleteCoffee = document.getElementById('submit3')
var roastSelection = document.getElementById('roast-selection');
var names = document.getElementsByClassName("coffee");
var selectedCreatedRoast = document.getElementById('createRoast')
var newDrink = document.getElementById('createCoffee');
var newDescription = document.getElementById('createDescription');


console.log(`Search roast: ${roastSelection.value}`);
console.log(`Created roast: ${selectedCreatedRoast.value}`);
function newRoast () {
    console.log(`Created roast: ${selectedCreatedRoast.value}`);
}

function feelingLucky (e) {
    e.preventDefault();
    var randomCoffee = Math.floor(Math.random() * coffees.length)
    console.log(randomCoffee);
    section.innerHTML = renderCoffees(coffees, randomCoffee);
}

function pushCoffee (e) {
    var newCoffee = {id: selectedCreatedRoast.value, name: newDrink.value, roast: `<i class="${selectedCreatedRoast.value} fa-solid fa-mug-hot"></i>`, description: newDescription.value};
    e.preventDefault();
    if (newCoffee.name.length === 0) {
        alert('You must enter a name');
    } else {
        coffees.push(newCoffee);
        console.log(newCoffee.name.length);
        section.innerHTML = renderCoffees(coffees);
    }
}

function popCoffee (e) {
    e.preventDefault();
    coffees.pop();
    section.innerHTML = renderCoffees(coffees);
}


function renderCoffee(coffee, specialIndex) {
    return `<div class="coffee card-container col-md-5 col-lg-3 col-xxl-3 pt-1">
                    <div class="card m-1 card-flip" style="height: 65%">
                    <div class="front card-block">
                    <div class="fs-5 fw-bold text-nowrap card-text text-center ${specialIndex} m-2 b-1">
                        <span>${coffee.name} ${coffee.roast}</span>
                    </div>
                    </div>
                    <div class="back card-block">
                        <p class="text-center fw-bold">${coffee.description}</p>
                    </div>
                    </div>
                    </div>
            </div>`;
}

function renderCoffees(coffees, luckyIndex = -1) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        if (i === luckyIndex) {
            html += renderCoffee(coffees[i], 'luckyCoffee rotate')
        } else {
            html += renderCoffee(coffees[i], "")
        }
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log(`Search roast: ${selectedRoast}`);

    if(roastSelection.value === 'all'){
        section.innerHTML = renderCoffees(coffees);
        return;
    }

    coffees.forEach(function(coffee) {

        if (selectedRoast === coffee.id) {
            // Trying to add icons to each coffee after the roast.
            // Maybe could use set values of roast and selected roast to filter without icons causing issue otherwise need new way for icons.
            filteredCoffees.push(coffee);
        }
    });
    section.innerHTML = renderCoffees(filteredCoffees);

}

var searchInput = document.getElementById("coffeeName");

searchInput.addEventListener("keyup", (event) => {
    var {value} = event.target;
    var searchQuery = value.toLowerCase();

    for (const nameElement of names) {
        let name = nameElement.textContent.toLowerCase();
        if (name.includes(searchQuery)) {
            nameElement.style.display = "table";
        } else {
            nameElement.style.display = "none";
        }
    }
});

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 'light', name: 'Light City', roast: '<i class="light fa-solid fa-mug-hot"></i>', description: 'Light brown in color, this roast is generally preferred for milder coffee varieties with high acidity'},
    {id: 'light', name: 'Half City', roast: '<i class="light fa-solid fa-mug-hot"></i>', description: 'Light brown in color, this roast is generally preferred for milder coffee varieties with high acidity'},
    {id: 'light', name: 'Cinnamon', roast: '<i class="light fa-solid fa-mug-hot"></i>', description: 'Light brown in color, this roast is generally preferred for milder coffee varieties with high acidity'},
    {id: 'medium', name: 'City', roast: '<i class="medium fa-solid fa-mug-hot"></i>', description: 'This roast is medium brown in color with a stronger flavor and a non-oily surface with medium acidity'},
    {id: 'medium', name: 'American', roast: '<i class="medium fa-solid fa-mug-hot"></i>', description: 'This roast is medium brown in color with a stronger flavor and a non-oily surface with medium acidity'},
    {id: 'medium', name: 'Breakfast', roast: '<i class="medium fa-solid fa-mug-hot"></i>', description: 'This roast is medium brown in color with a stronger flavor and a non-oily surface with medium acidity'},
    {id: 'dark', name: 'High', roast: ' <i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
    {id: 'dark', name: 'Continental', roast: '<i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
    {id: 'dark', name: 'New Orleans', roast: '<i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
    {id: 'dark', name: 'European', roast: '<i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
    {id: 'dark', name: 'Espresso', roast: '<i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
    {id: 'dark', name: 'Viennese', roast: '<i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
    {id: 'dark', name: 'Italian', roast: '<i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
    {id: 'dark', name: 'French', roast: '<i class="dark fa-solid fa-mug-hot"></i>', description: 'This roast produces shiny black beans with an oily surface and a pronounced bitterness with low acidity'},
];
// Remove the icons but keep the classes and try using CSS to add icons or at least style the roasts

section.innerHTML = renderCoffees(coffees.reverse());

submitButton1.addEventListener('click', feelingLucky);
submitButton2.addEventListener('click', pushCoffee,);
roastSelection.addEventListener('change', updateCoffees);
selectedCreatedRoast.addEventListener('change', newRoast);
deleteCoffee.addEventListener('click', popCoffee);