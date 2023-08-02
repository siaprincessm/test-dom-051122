let btn = document.querySelector('#submitBtn');
    btn.addEventListener('click', function (){
        
        let usernameTooShort = false; // initialization of username
        let emailIsInvalid = false; // initialization of email
        let passwordTooShort = false; // initalization of password
    
    //TO CHECK USERNAME
        let username = document.querySelector('#username').value;
            if (username.length < 10) {
                usernameTooShort = true;
            }
    //TO CHECK EMAIL
        let email = document.querySelector('#email').value;
            if (email.includes('@') == false || email.includes('.') == false ){
                emailIsInvalid = true;
            }
    //TO CHECK THE PASSWORD
            let password = document.querySelector('#password').value;
                if (password.length < 10) {
                    passwordTooShort = true;
                }
    //TO SELECT THE ERROR ELEMENT INSIDE THE HTML FILE
        let errorDiv = document.querySelector('#errors')

    //TO CLEAR EXISTING ERROR MESSAGE
        errorDiv.innerHTML = '';

        let errorContainers = document.querySelectorAll('.error');
            for (let e of errorContainers){
                e.innerHTML = "";
            }

    //TO INITIALIZE THE ERROR MESSAGES
            if (usernameTooShort) {
                errorDiv.innerHTML += "Username too short";
                document.querySelector('#error-username').innerHTML += "Username is at least 10 characters";
            }
            if (emailIsInvalid){
                errorDiv.innerHTML += "Email must include @ and .";
                document.querySelector('#error-email').innerHTML += "Email is invalid format";
            } 
            if (passwordTooShort) {
                errorDiv.innerHTML += "Password is too short";
                document.querySelector('#error-password').innerHTML += "Password invalid";
            }
    //TO CHECK FOR ERROR MESSAGE
            if (usernameTooShort || emailIsInvalid || passwordTooShort) {
                errorDiv.style.display = 'block';
            } else {
    //IF NO ERRORS HIDE THE ERROR MESSAGE
            errorDiv.style.display = 'none';
            alert("Submission successful")
            }
  })