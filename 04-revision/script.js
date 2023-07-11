console.log("Hello World");

let styleBtn = document.querySelector('.btn');
styleBtn.addEventListener('click', function(){

let header = document.querySelector('h1');
header.style.color = 'red';

document.querySelector('#box').style.backgroundColor = 'blue'; 

let urgentParagraphs = document.querySelectorAll('.urgent');
console.log(urgentParagraphs) 
    for (let p of urgentParagraphs) {
    p.style.backgroundColor = 'yellow';
}
})