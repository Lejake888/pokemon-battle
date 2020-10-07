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
    playerParty.push(pokemon1)
    playerParty.push(pokemon2)
    playerParty.push(pokemon3)

    // Will have an image of pokemon, click to add to party

    document.getElementById("1st").innerHTML = pokemon1;
    document.getElementById("2nd").innerHTML = pokemon2;
    document.getElementById("3rd").innerHTML = pokemon3;
    generateTeam(pokemon1, pokemon2, pokemon3)
}

const generateTeam = (p1,p2,p3) => {

}

// The functions below will run when the linked button is clicked

setNameButton.addEventListener("click", () => {
    setName()
});

pickPokemonButton.addEventListener("click", () => {
    pickPokemon()
});