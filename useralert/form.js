const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function openPopup(){

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const namePara = document.createElement("p");
    namePara.innerHTML = "Hi " + '<strong>' + name + '</strong>';

    const emailPara = document.createElement("p");
    emailPara.innerHTML = "Confirm Your contact Mail ID " + '<strong>' + email + '</strong>';

    document.getElementById("popup").appendChild(namePara);
    document.getElementById("popup").appendChild(emailPara);

    const details = document.getElementById("append-details")
    details.appendChild(namePara)
    details.appendChild(emailPara)

    popup.classList.add("open-popup")
    
    document.getElementById('submit-btn').style.display = 'none';

}


function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '' ){
        setErrorFor(username,'Username cannot be blank');
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email,'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === '' ){
        setErrorFor(password,'password cannot be blank');
    } else{
        setSuccessFor(password);
    }

    if(password2Value === '' ){
        setErrorFor(password2,'password2 cannot be blank');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2,'Passwords does not match')
    }else{
        setSuccessFor(password2);
    }


    // Check if all input fields have the "success" class
    if (document.querySelectorAll('.success').length === 4) {
        // Display success message
        openPopup()
    }

}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className='form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


username.addEventListener("input", () => {
  if (username.value.trim() === '') { // check if the input is empty
    setErrorFor(username, 'username cannot be empty'); // show error message
  } else {
    setSuccessFor(username); // clear error message
  }
});


function closePopup(){
    popup.classList.remove("open-popup");
    var button = document.getElementsByClassName("reset-btn")[0];
    button.click();

    // Get the div element by its ID
    var myDiv = document.getElementById("append-details");

    // Clear the contents of the div
    myDiv.innerHTML = "";

    document.getElementById('submit-btn').style.display = 'block';


}

function closePopup2(){
    popup.classList.remove("open-popup");

    // Get the div element by its ID
    var myDiv = document.getElementById("append-details");

    // Clear the contents of the div
    myDiv.innerHTML = "";

    document.getElementById('submit-btn').style.display = 'block';

}
