// Write your helper functions here!

require('cross-fetch/polyfill');

// TASK 3
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    // TASK 2
    // takes in a string as a parameter
    //return "Empty", "Not a Number", or "Is a Number" as appropriate

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    // TASK 2, majority of code
    //function to call after form submission
    // take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass
    //use validateInput() to complete
        // pilot and co-pilot names should be strings
        // fuel level and cargo mass should be numbers
    if (validateInput(pilot) === "Empty" && validateInput(copilot) === "Empty" && validateInput(fuelLevel) === "Empty" && validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) !== "Not a Number" && validateInput(copilot) !== "Not a Number" && validateInput(fuelLevel) !== "Is a Number" && validateInput(cargoMass) !== "Is a Number") {
        alert("Enter valid info for each of the fields!");
    }

    //change the color and text of items, change visibility style of items from html, etc.
    // declare list items
    let listPilotStatus = document.getElementById("pilotStatus");
    let listCopilotStatus = document.getElementById("copilotStatus");
    let listFuelStatus = document.getElementById("fuelStatus");
    let listCargoStatus = document.getElementById("cargoStatus");
    let listLaunchStatus = document.getElementById("launchStatus");
    let readyToLaunch = true;
    //update the li element pilotStatus to include the pilot’s name
    listPilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    //update the li element copilotStatus to include the co-pilot’s name
    listCopilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //fuel level<10,000 --> change faultyItems to visible + update fuel status to "there is not enough fuel for the journey"
    if (Number(fuelLevel) < 10000) {
        list.style.visibility = "visible";
        listFuelStatus.innerHTML = `Fuel level too low for launch`;
        listLaunchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        listLaunchStatus.style.color = "red";
        readyToLaunch = false;
    } else {
        listFuelStatus.innerHTML = `Fuel level high enough for launch`;
    }
    //cargo mass>10,000 --> change faultyItems to visible + update cargo status to "there is too much mass for the shuttle to take off"
    if (Number(cargoMass) > 10000) {
        list.style.visibility = "visible";
        listCargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        listLaunchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        listLaunchStatus.style.color = "red";
        readyToLaunch = false;
    } else {
        listCargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }
    //If the shuttle is ready to launch, change the text of launchStatus to green and display “Shuttle is ready for launch”.
    if (readyToLaunch === true) {
        listLaunchStatus.innerHTML = `Shuttle is Ready for Launch`;
        listLaunchStatus.style.color = `green`;
    }
 }
 
 // TASK 3
 async function myFetch() {
    //add the URL and return response.json()
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    return planetsReturned.json();
 }
 
 // TASK 3
 function pickPlanet(planets) {
    // pass all planets, return only 1
    // Using Math.random(), return one planet from the list with a randomly-selected index
    // return planet;
    let planet = Math.floor(Math.random()*planets.length);
    return planets[planet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;