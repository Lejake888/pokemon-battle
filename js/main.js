let name = window.prompt("Enter your name: ")
document.getElementById("name").innerHTML += name;
let playerParty = [];
let rivalParty = [];

// Setting up the "party" for each team

const pickPokemon = () => {
    let pokemon1 = window.prompt("Pick your 1st Pokemon: ")
    let pokemon2 = window.prompt("Pick your 2nd Pokemon ")
    let pokemon3 = window.prompt("Pick your 3rd Pokemon: ")
    
    // Will have an image of pokemon, click to add to party

    console.log(pokemon1)
    console.log(pokemon2)
    console.log(pokemon3)
}

window.onload = () => {
    pickPokemon()
}