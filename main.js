"use strict"
var roastSelector = document.querySelector('#roast-selection');
var section = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');
var names = document.getElementsByClassName("coffee");
var selectedCreatedRoast = document.querySelector(`#createRoast`); // new roast

function renderCoffee(coffee) {
    var html = '<div class="coffee"></div>';
    html += '<div class="d-none">' + coffee.id + '</div>';
    html += '<div>' + coffee.name + ` ` + coffee.roast +'</div>';
    // html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

    return html;
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

    if(roastSelection.value === 'all'){
        section.innerHTML = renderCoffees(coffees);
        return;
    }
    console.log(selectedRoast);

    coffees.forEach(function(coffee) {

        if (selectedRoast === coffee.roast) {
            filteredCoffees.push(coffee);
        }
    });
    section.innerHTML = renderCoffees(filteredCoffees);

}
var newSelectedRoast = selectedCreatedRoast.value; // new roast
console.log(newSelectedRoast); // new roast

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
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

section.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', updateCoffees);
roastSelector.addEventListener('change', updateCoffees);