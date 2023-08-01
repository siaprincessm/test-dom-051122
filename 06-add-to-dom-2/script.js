console.log("test");

let btn = document.querySelector('#generateBtn')
    btn.addEventListener('click', function (){
    
    let randomNumber = Math.floor(Math.random() * 1000 + 1);
    let randomResult = document.querySelector('#result');
        randomResult.innerHTML += `<li>` + randomNumber + `</li>`
    })