console.log("script is successfully connected to your html file")

let button = document.querySelector('#calculateButton');
button.addEventListener('click', function(){
    let weight = Number(document.querySelector('#weight').value);
    console.log('data type of weight: ', typeof(weight)); // checking if line number 5 is ok

    let height = Number(document.querySelector('#height').value);
    console.log('data type of height: ', typeof(height)); // checking if line number 8 is ok

    let bmi = weight / height **2;
    let classification = "";
    if (bmi <18.5){
        classification = "Underwight";
    } if (bmi <24.9){
        classification = "Normal";
    } if (bmi <29.9){
        classification = "Overweight";
    } else {
        classification = "Obese";
    }
    let displayResult = document.querySelector('#resultBmi');
    displayResult.innerHTML = `
        <ul>
            <li>BMI: ${bmi}
            <li>Status: ${classification}
        <ul>
         `;  

})
