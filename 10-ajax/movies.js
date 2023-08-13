window.addEventListener("DOMContentLoaded", async function (){
    let response = await axios.get('movies.json');
    let movies = response.data;
    let tableBody = document.querySelector('#movie-rows');
        for(let m of movies) {
            let html = `
            <tr>
                <td>${m.title}</td>
                <td>${m.genre}</td>
                <td>${m.duration}</td>
            </tr>
            `
            tableBody.innerHTML += html;
        }
})