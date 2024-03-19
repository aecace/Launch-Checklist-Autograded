// Write your JavaScript code here!

const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

//Add an event handler for the window load event
window.addEventListener("load", function() {

    // TASK 2
    //Within the window’s load handler, add an event handler for the form submit event
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        //prevent the form submission from happening until all inputs have valid values
        event.preventDefault();

        //Retrieve input values that need to be validated from the DOM.
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        //Make sure to call your formSubmission() function at the appropriate time in your script.js file!
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    })

    // TASK 5
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
        // select a planet at random from listedPlanets
        let planetPicked = pickPlanet(listedPlanets);

        // pass that information to addDestinationInfo()
        addDestinationInfo(document, planetPicked.name, planetPicked.diameter, planetPicked.star, planetPicked.distance, planetPicked.moons, planetPicked.image);
    })

    // add event listener for button (id="formSubmit")
    // inside event listener, grab info from form
    // call formSubmission function (make sure to this.document, this.list, etc.)
    
 });