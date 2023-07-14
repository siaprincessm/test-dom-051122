console.log("Hello World");

let button = document.querySelectorAll('#calculateBmiBtn');
    button.addEventListener('click', function(){

        let weight = Number(document.querySelectorAll('#weight').value);
        console.log('data type of weight: ', typeof(weight));

        let height = Number(document.querySelectorAll('#height').valueof);
        console.log('data of weight: ', typeof(height));

        //calculate BMI
        let bmi = weight / (height * height);
        let status = "";
            if (bmi < 18.5){
                status = "underweight";
            } else if (bmi < 25){
                status = "healthy";
            } else if (bmi <30){
                status = "overweight";
            } else {
                status = "obese";
            }

        //Display Result
        let displayResult = document.querySelectorAll('#resultBmi');
        displayResult.innerHTML = `
            <ul>
                <li>BMI: ${bmi}</li>
                <li>Result: ${status}</li>
            </ul>
        `;

        alert("Weight: " + weight);
        })