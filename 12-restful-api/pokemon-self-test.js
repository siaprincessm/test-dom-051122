const BASE_API_URL = 'https://pokeapi.co/api/v2';


document.querySelector('#searchBtn')
    .addEventListener('click',  async function (){
        let pokemonSearch = document.querySelector('#textSearch').value;
        let endpointURL =  BASE_API_URL + '/pokemon/' + pokemonSearch.toLowerCase();
        try {
        let response =  await axios.get(endpointURL);


        let resultDiv = document.querySelector('#results');
            resultDiv.innerHTML = `
                <img src="${response.data.sprites.front_default}">
                <img src="${response.data.sprites.back_default}">

                <ul>
                    <li> Name: ${response.data.name}
                    <li> Base Experience: ${response.data.base_experience}
                    <li> Height: ${response.data.height}
                    <li> Weight: ${response.data.weight}
                </ul>
            `
        } catch (e) {
            alert("Sorry, pokemon does not exist.");
        }
    })