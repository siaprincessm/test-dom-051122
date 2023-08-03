let fruits = ['Apples', 'Bananas', 'Cherry', 'Durian', 'Eggplant'];
let listOfFruits = document.querySelector('#fruits');
    for(let eachFruits of fruits){
        listOfFruits.innerHTML += '<li>' + eachFruits + '</li>'
    }
