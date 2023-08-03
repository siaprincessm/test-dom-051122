let btn = document.querySelector('#submitBtn');
    btn.addEventListener('click', function(){

    //Initialization
    let usernameTooShort = false;
    let emailIsInvalid = false;
    let passwordIsInvalid = false;

    //To check Username
    let username = document.querySelector('#username').value;
        if (username.length < 10){
            usernameTooShort = true;
        }

    //To check email
    let email= document.querySelector('#email').value;
        if (email.includes('@') == false || email.includes('.') == false){
            emailIsInvalid = true;
        }

    //To check password
    let password = document.querySelector('#password').value;
        if(password.length < 10){
            passwordIsInvalid = true;
        }

    //SELECT ERROR TO DISPLAY INSIDE HTML FILE
    let errorDiv = document.querySelector('#errors');
    //CLEAR THE EXISITNG ERROR MESSAGE
    errorDiv.innerHTML = '';

    let errorContainers = document.querySelectorAll('.errors');
    for(let e of errorContainers){
        e.innerHTML = "";
    }

    //INITIALIZE ERROR MESSAGE
       if (usernameTooShort) {
            //errorDiv.innerHTML += "Username too short!";
            document.querySelector('#error-username').innerHTML += "Invalid username";
       }
       if (emailIsInvalid){
            //errorDiv.innerHTML += "Email invalid";
            document.querySelector('#error-email').innerHTML += "Invalid email";
       }
       if (passwordIsInvalid) {
            //errorDiv.innerHTML += "Password is invalid";
            document.querySelector('#error-password').innerHTML += "Invalid password";
       }
    
    //TO CHECK FOR ERRORS
       if (usernameTooShort || emailIsInvalid || passwordIsInvalid){
        errorDiv.style.display = 'block';
       } else {
        errorDiv.style.display = 'none';
       }
       alert("Submission successful!")
    })
