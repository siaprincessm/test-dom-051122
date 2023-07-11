//test if successfuly linked to html file
console.log("Hello world");

let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', function() {
    //fetch the txt input in the text box
    let productInput = document.querySelector('#product-name');
    //read the text input in the text box
    let product = productInput.value;
    //display the text in alert


    let deliveryOptions = document.querySelectorAll('.delvivery');
    for (let delivery of deliveryOptions) {
        if (delivery.checked == true) {
            console.log(delivery, 'has been selected')
        }

    }
    alert(product);

})