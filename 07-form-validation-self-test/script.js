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
    let errorDiv = document.querySelector('#errors')

    //CLEAR THE EXISITNG ERROR MESSAGE
    errorDiv = '';



    //INITIALIZE ERROR MESSAGE
        if (usernameTooShort) {
            errorDiv += "Username is too short";
            //document.querySelector('#error-message').innerHTML += "Username too short";
        }
        if (emailIsInvalid) {
            errorDiv += "Email is invalid";
            //document.querySelector('#error-email').innerHTML += "Invalid Email";
        }
        if (passwordIsInvalid){
            errorDiv += "Password is invalid";
            //document.querySelector('#error-password').innerHTML += "Password invalid";
        }

    //CHECKING
        if (usernameTooShort || emailIsInvalid || passwordIsInvalid){
            errorDiv.style.display = 'block';
        }else {
            errorDiv.style.display = 'none';
        }
        alert(errorDiv);
        
    })
