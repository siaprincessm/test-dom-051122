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
        let errorMsg = "";
            if (usernameTooShort) {
                errorMsg += "Username too short";
            }
            if (emailIsInvalid){
                    errorMsg += "Email must include @ and .";
            }
            alert(errorMsg);
  })