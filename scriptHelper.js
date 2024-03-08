// Write your helper functions here!

require('cross-fetch/polyfill');

// TASK 3, will uncomment section in func at some point
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    // TASK 2
    // ex: isNaN(fuelLevel);
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // TASK 2, majority of code
    // function to call after form submission
    // if statements
    // validate input
    // ex: validateInput(pilot) returns that pilot is not an empty string;
    // change the color and text of items, change visibility style of items from html, etc.
 }
 
 // TASK 3
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 // TASK 3
 function pickPlanet(planets) {
    // pass all planets, return only 1

    // let planet = {};
    // get random number and get planet with that integer
    // return planet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;