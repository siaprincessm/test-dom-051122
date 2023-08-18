async function run () {
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
    console.log(response);

    let taxiResponse = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability")
    console.log(taxiResponse.data);
    console.log(taxiResponse.data.features[0].geometry.coordinates);
}
run();