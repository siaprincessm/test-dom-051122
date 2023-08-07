/*
1. Create a textbox which allows the user to add in a number to an unordered list
2. As the user adds in numbers, display the total after the list
3. Challenge: Add in a textbox; when the user type in a number, highlight all the numbers in the list 
 which is equal or higher than the number in the textbox.


*/
let total = 0;

let btn = document.querySelector('#addBtn');
    btn.addEventListener('click', function(){

        let textbox = document.querySelector('#new-number');
        let inputNumber = Number(textbox.value);

        total += inputNumber;

        let unorderedList = document.querySelector('#addNumber');
            unorderedList.innerHTML += 
                ` <li>${inputNumber}</li>
                `
        let  sumOfNumber = document.querySelector('#sum');
            sumOfNumber.innerHTML = total;

    })

