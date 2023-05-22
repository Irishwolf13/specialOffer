// Gather up items we need to add event items to
const formName = document.querySelector('.formName');
const formEmail = document.querySelector('.formEmail');
const formHandle = document.querySelector('.formHandle');
const formSubmitButton = document.querySelector('.formSubmitButton');
const backgroundImage = document.querySelector('.backgroundImage');
const myForm = document.querySelector('.reserveForm');

// Creating variables to store user inputs
var currentName = "";
var currentEmail = "";
var currentHandle = "";

const submitButtonClicked = (e) => {
    e.preventDefault();

    // Check all input fields for their value, and store them in variables
    currentName = formName.value;
    currentEmail = formEmail.value;
    currentHandle = formHandle.value;
    
    // Check there are inputs in all fields
    if (currentName === "" || currentEmail === "" || currentHandle === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Threw in a check to see if the email is valid.  This checks to see if there is one letter before and after the @ and a letter after the (dot).
    // Valid email examples: frank@rizo.com | X@Y.Z | Frank13@Whatever.x
    if (!isValidEmail(currentEmail)) {
        alert("Email is not valid.");
        return;
      }
      
    // Change background image visibility
    backgroundImage.style.visibility = 'hidden';

    // Change background color
    document.body.style.background = 'repeating-linear-gradient(to right, rgb(106, 106, 106), rgb(0, 0, 0) 150px)';

    // Adding an aleart to show we have captured the users inputs for use later.
    alert(`
    ${currentName} is your name.
    ${currentEmail} is your email.
    ${currentHandle} is your handle.`)

    // Rest the form
    myForm.reset();
};

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

formSubmitButton.addEventListener('click', submitButtonClicked);