let btn = document.querySelector('#submitBtn');
btn.addEventListener('click', function(){
    //alert("button click  detected");
    let usernameTooShort = false;
    let emailIsInvalid = false;

    let username = document.querySelector('#username').value;
    if (username.length < 10 ) {
        usernameTooShort =  true;
    }
    let email = document.querySelector('#email').value;
    if (email.includes('@') == false || email.includes('.') == false){
        emailIsInvalid = true;
    }

    let errorDiv = document.querySelector('#errors')
    errorDiv.innerHTML = '';

    if (usernameTooShort) {
        errorDiv.innerHTML += "<p>Username is too short</p>";
    }
        if (emailIsInvalid){
        errorDiv.innerHTML += "<p>email is invalid format</p>";
    }
    if (usernameTooShort || emailIsInvalid) {
        errorDiv.style.display = 'block';
    }else {
        errorDiv.style.display = 'none';
    }
        
})



//display error message if the criteria is not met