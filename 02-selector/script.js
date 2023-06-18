//to test if script is linked in html file
console.log("Hello World");

//to proceed with styling
// 1. use camel case for the CSS property name
// 2. the value must be a string
let subtitle = document.querySelector('#subtitle');
subtitle.style.backgroundColor = "pink";
subtitle.style.fontSize = "48px";

//Select by class
let items = document.querySelectorAll('.menu-item');
console.log(items);