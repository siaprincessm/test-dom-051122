//check
console.log("Test");

let button = document.querySelector('#calculateBmiBtn');
button.addEventListener('click', function(){
    let weight = Number(document.querySelector('#weight').value);
    console.log('data type of weight: ', typeof(weight));

    let height = Number(document.querySelector('#height').value);
    console.log('data type of height: ', typeof(height));

    let bmi = weight / height **2;
    let status = "";
    if (bmi < 18.5) {
        status = "underweight";
    } else if (bmi < 25) {z
        status = "healthy";
    } else if (bmi < 30) {
        status = "overweight";
    } else {
        status = "obese";
    }
    let displayResult = document.querySelector('#resultBmi');
    displayResult.innerHTML = `
        <ul>
            <li>BMI: ${bmi}</li>
            <li>Status: ${status}</li>
        <ul>
    `;
})