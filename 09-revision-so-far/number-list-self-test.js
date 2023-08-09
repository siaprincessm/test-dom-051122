let total = 0;

let btn = document.querySelector('#addBtn');
    btn.addEventListener('click', function(){
        

        let textbox = document.querySelector('#new-number');
        let inputNumber =  Number(textbox.value);
        
        total += inputNumber;

        let unorderedList = document.querySelector('#addNumber');
            unorderedList.innerHTML += 
            `
                <li>${inputNumber}</li>
            `

        let sumOfNumbers = document.querySelector('#sum');
            sumOfNumbers.innerHTML = total;

    })