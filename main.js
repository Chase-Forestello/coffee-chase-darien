"use strict"
// var roastSelector = document.querySelector('#roast-selection'); I don't think we need this.
var section = document.getElementById('coffees');
var submitButton = document.getElementById('submit');
var submitButton2 = document.getElementById('submit2');
var roastSelection = document.getElementById('roast-selection');
var names = document.getElementsByClassName("coffee");
var selectedCreatedRoast = document.getElementById('createRoast')
var newDrink = document.getElementById('createCoffee');


console.log(`Search roast: ${roastSelection.value}`);
console.log(`Created roast: ${selectedCreatedRoast}`);
function newRoast () {
    console.log(`Created roast: ${selectedCreatedRoast.value}`);
}
function newCoffeeName () {

    console.log(newDrink.value);
}
function pushCoffee (e) {
    var newCoffee = {id: selectedCreatedRoast.value, name: newDrink.value, roast: '<i class="fa-solid fa-mug-hot"></i>'};
    e.preventDefault();
    coffees.push(newCoffee);
    console.log(newCoffee);
    section.innerHTML = renderCoffees(coffees);


}


function renderCoffee(coffee) {
    return `<div class="coffee col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                    <div class="card fs-4 fw-bold text-nowrap text-center p-3 m-2 b-1"><span>${coffee.name} ${coffee.roast}</span></div>
                </div>`;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
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
    {id: 'light', name: 'Light City', roast: '<i class="light fa-solid fa-mug-hot"></i>'},
    {id: 'light', name: 'Half City', roast: '<i class="light fa-solid fa-mug-hot"></i>'},
    {id: 'light', name: 'Cinnamon', roast: '<i class="light fa-solid fa-mug-hot"></i>'},
    {id: 'medium', name: 'City', roast: '<i class="medium fa-solid fa-mug-hot"></i>'},
    {id: 'medium', name: 'American', roast: '<i class="medium fa-solid fa-mug-hot"></i>'},
    {id: 'medium', name: 'Breakfast', roast: '<i class="medium fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'High', roast: ' <i class="dark fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'Continental', roast: '<i class="dark fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'New Orleans', roast: '<i class="dark fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'European', roast: '<i class="dark fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'Espresso', roast: '<i class="dark fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'Viennese', roast: '<i class="dark fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'Italian', roast: '<i class="dark fa-solid fa-mug-hot"></i>'},
    {id: 'dark', name: 'French', roast: '<i class="dark fa-solid fa-mug-hot"></i>'},
];
// Remove the icons but keep the classes and try using CSS to add icons or at least style the roasts

section.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', pushCoffee,);
roastSelection.addEventListener('change', updateCoffees);
selectedCreatedRoast.addEventListener('change', newRoast);
newDrink.addEventListener('change', newCoffeeName);