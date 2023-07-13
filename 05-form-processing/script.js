//test if successfuly linked to html file
console.log("Hello world");

let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', function() {
    //fetch the txt input in the text box
    let productInput = document.querySelector('#product-name');
    //read the text input in the text box
    let product = productInput.value;
    //display the text in alert


    let deliveryOptions = document.querySelectorAll('.delivery');
    let selectedDelivery = null;
    for (let delivery of deliveryOptions) {
        if (delivery.checked == true) {
            selectedDelivery = delivery;
            break;
        }

    }
    // step 1: select all the checkboxes
    let options = document.querySelectorAll('.options');
    let selectedOptions = [];
    for(let o of options) {
        if (o.checked == true) {
            selectedOptions.push(o.value)
        }
    }
    console.log(selectedOptions);

    //select a country
    let country = document.querySelector('#country').value
    
    alert("Product: " + product 
        + ", delivery: " + selectedDelivery.value 
        + ", country:" + country 
        + ", options:" + selectedOptions.join(','));

});