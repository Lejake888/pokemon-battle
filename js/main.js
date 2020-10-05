let playerParty = [];
let rivalParty = [];

// Setting up the "party" for each team

const setName = () => {
    let name = window.prompt("Enter your name: ")
    document.getElementById("name").innerHTML += name;
}

const pickPokemon = () => {
    let pokemon1 = window.prompt("Pick your 1st Pokemon: ")
    let pokemon2 = window.prompt("Pick your 2nd Pokemon ")
    let pokemon3 = window.prompt("Pick your 3rd Pokemon: ")
    
    // Will have an image of pokemon, click to add to party

    document.getElementById("1st").innerHTML = pokemon1;
    document.getElementById("2nd").innerHTML = pokemon2;
    document.getElementById("3rd").innerHTML = pokemon3;
}

setNameButton.addEventListener("click", () => {
    setName()
});

pickPokemonButton.addEventListener("click", () => {
    pickPokemon()
});