alert("conected");
let movies =  [
    {
        'title':'Only  Murders  in the Building',
        'genre':'Suspense',
        'duration': 30
    },
    {
        'title':'Greys  Anatomy',
        'genre':'Drama',
        'duration':40
    },
    {
        'title':'Raffy Tulfo  in Action',
        'genre':'Documentary',
        'duration':120
    }
]

for (let m of movies) {
    let html = `
    <tr>
        <td>${m.title}</td>
        <td>${m.genre}</td>
        <td>${m.duration}</td>
    </tr>
    `
    let tableBody = document.querySelector('#movie-rows');
        tableBody.innerHTML += html;
}