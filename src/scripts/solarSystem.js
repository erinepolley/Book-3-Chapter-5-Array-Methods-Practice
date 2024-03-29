const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
// */
const planetList = document.querySelector("#planets")
let planetString = ""
planets.forEach(planet =>{
    planet.toUpperCase();
    console.log(planet)
    planetString += ` ${planet}`
})
console.log(planetString)

planetList.innerHTML = planetString

const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capPlanets= planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1))
// planets.forEach(planet => {
//     capPlanets += planet.toUpperCase();
// })
console.log("PLANETS CAPITAL LETTERS", capPlanets)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/