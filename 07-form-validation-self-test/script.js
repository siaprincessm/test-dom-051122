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
    //CLEAR THE EXISITNG ERROR MESSAGE
    let errorDiv = document.querySelector('#errors');


    //INITIALIZE ERROR MESSAGE
       if (usernameTooShort) {
            errorDiv.innerHTML += "Username too short!";
       }
       if (emailIsInvalid){
            errorDiv.innerHTML += "Email invalid";
       }
       if (passwordIsInvalid) {
            errorDiv.innerHTML += "Password is invalid";
       }
    
    //TO CHECK FOR ERRORS
       if (usernameTooShort || emailIsInvalid){
        errorDiv.style.display = 'block';
       }
    })
