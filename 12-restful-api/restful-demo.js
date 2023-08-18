async function run () {
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
    console.log(response);
}
run();