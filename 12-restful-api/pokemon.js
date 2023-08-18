const BASE_API_URL = "https://pokeapi.co/api/v2";
document.querySelector('#searchBtn')
    .addEventListener('click', async function (){
        let search = document.querySelector("#textSearch").value;
        let endpointURL = BASE_API_URL + '/pokemon/' + search;
        let response = await axios.get(endpointURL);
        console.log(response.data);

    })