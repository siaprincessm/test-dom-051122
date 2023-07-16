console.log("Hello World!");

let btn = document.querySelector('#randomNumberButton')
    btn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * 1000 + 1);
    let randomResult = document.querySelector('#result');
        randomResult.innerHTML += '<li>' + randomNumber + '</li>';
    })