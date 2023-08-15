window.addEventListener("DOMContentLoaded", async function() {
    let response = await axios.get('song.json');
    let song =  response.data
    let tableBody = document.querySelector('#song-rows');
        for( let s of song){
            let play = `
            <tr>
                <td>${s.song}</td>
                <td>${s.singer}</td>
                <td>${s.genre}</td>
            </tr>    
            `;
            tableBody.innerHTML += play;

        }
})