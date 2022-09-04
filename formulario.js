const form = document.querySelector("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {

  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error"; 
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
console.log('email');

}
const name = document.getElementById("name");
const nameError = document.querySelector("#name + span.error");

name.addEventListener("input", (event) => {

    if (name.validity.valid) {

        nameError.textContent = "";
        nameError.className = "error"; 

    } else {
        showError();
      }
    });

    form.addEventListener("submit", (event) => {
        if (!name.validity.valid) {
          showError();
          event.preventDefault();
        }
      }); 

function myFuntion() {
  if (name.validity.valueMissing) {
    nameError.textContent = "You need to enter your name.";

  } else if(name.validity.typeMismatch) {
    nameError.textContent = 'Entered value needs to be a valid name.';
  } else if (name.validity.tooShort) {
    nameError.textContent = `Name should be at least ${name.minLength} characters; you entered ${name.value.length}.`;
  } 
  
  nameError.className = "error active";
 }

console.log('name');
alert: 'name';

const lastName = document.getElementById("lastName");
const lastNameError = document.querySelector("#lastName + span.error");

lastName.addEventListener("input", (event) => {

    if (lastName.validity.valid) {

        lastNameError.textContent = ""; 
        lastNameError.className = "error"; 

    } else {
        showError();
      }
    });

    form.addEventListener("submit", (event) => {
        if (!lastName.validity.valid) {
          showError();
          event.preventDefault();
        }
      }); 

function myLast() {
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "You need to enter your last name.";
} else if (lastName.validity.tooShort) {
    lastNameError.textContent = `last name should be at least ${lastName.minLength} characters; you entered ${lastName.value.length}.`;
  }
  
  lastNameError.className = "error active";
}
console.log('lastName');
alert: lastName



const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
country.addEventListener("input", (event) => {

    if (country.validity.valid) {

        countryError.textContent = ""; 
        countryError.className = "error"; 

    } else {
        showError();
      }
    });

    form.addEventListener("submit", (event) => {
        if (!country.validity.valid) {
          showError();
          event.preventDefault();
        }
      }); 

function myPlace() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a valid country.";
} else if (country.validity.tooShort) {
    countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  }
  
  countryError.className = "error active";
}

alert: country
console.log('country');

const codPostal = document.getElementById("codPostal");
const codPostalError = document.querySelector("#codPostal + span.error");

codPostal.addEventListener("input", (event) => {

    if (codPostal.validity.valid) {

        codPostalError.textContent = ""; 
        codPostalError.className = "error"; 

    } else {
        showError();
      }
    });

    form.addEventListener("submit", (event) => {
        if (!codPostal.validity.valid) {
          showError();
          event.preventDefault();
        }
      }); 

function myPostal() {
  if (codPostal.validity.valueMissing) {
    codPostalError.textContent = "You need to enter a valid code.";
} else if (codPostal.validity.tooShort) {
    codPostalError.textContent = `Country should be at least ${codPostal.minLength} characters; you entered ${codPostal.value.length}.`;
  }
  
    codPostalError.className = "error active";
}

console.log('codPostal');



const contraseña = document.getElementById("contraseña");
const contraseñaError = document.querySelector("#contraseña + span.error");

contraseña.addEventListener("input", (event) => {

    if (contraseña.validity.valid) {

        contraseñaError.textContent = "";
        contraseñaError.className = "error"; 

    } else {
        showError();
      }
    });

    form.addEventListener("submit", (event) => {
        if (!contraseña.validity.valid) {
          showError();
          event.preventDefault();
        }
      }); 

function psw() {
  if (contraseña.validity.valueMissing) {
    contraseñaError.textContent = "You need to enter a password.";
} else if (contraseña.validity.tooShort) {
    contraseñaError.textContent = `Password should be at least ${contraseña.minLength} characters; you entered ${contraseña.value.length}.`;
  }
  
    contraseñaError.className = "error active";
}

console.log('contraseña');


const confirmPsw = document.getElementById("confirmPsw");
const confirmPswError = document.querySelector("#confirmPsw + span.error");

confirmPsw.addEventListener("input", (event) => {

    if (confirmPsw.validity.valid) {

        confirmPswError.textContent = ""; 
        confirmPswError.className = "error"; 

    } else {
        showError();
      }
    });

    form.addEventListener("submit", (event) => {
        if (!confirmPsw.validity.valid) {
          showError();
          event.preventDefault();
        }
      }); 

function setPsw() {
  if (confirmPsw.validity.valueMissing) {
    confirmPswError.textContent = "You need to enter a password.";
} else if (confirmPsw.validity.tooShort) {
    confirmPswError.textContent = `Password should be the same ${confirmPsw.minLength} characters; you entered ${confirmPsw.value.length}.`;
  
} else if (confirmPsw !== contraseña)  {
  confirmPsw.textContent = `Password must be the same.`;
}
  
confirmPswError.className = "error active";
}

console.log('confirmPsw');





