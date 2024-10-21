const signupForm = document.getElementById('signupForm');
const FnameIn = document.getElementById('f1');
const LnameIn = document.getElementById('f2');
const emailIn = document.getElementById('f3');
const passwordIn = document.getElementById('f4');
const confirmpass = document.getElementById('f5');


// error ke liye
const FnameError = document.getElementById('FnameError');
const LnameError = document.getElementById('LnameError');
const emailError = document.getElementById('emailError');
const password1Error = document.getElementById('password1Error');
const password2Error = document.getElementById('password2Error');

signupForm.addEventListener('submit', function (e) 
{
  e.preventDefault(); 

  let valid = true;

  // First name
  if (FnameIn.value.trim() == "") 
    {
      FnameError.textContent = "Name is required with minimum 5 characters.";
      FnameError.style.display = "block";
      valid = false;
    } 
  else 
    {
      FnameError.style.display = "none";
    }

    // Last name
    if(LnameIn.value.trim()== "")
    {
      LnameError.textContent = "Enter Last name";
      LnameError.style.display = "block";
      valid = false;
    }
    else 
    {
      LnameError.style.display = "none";
    }

  // email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailIn.value.trim())) 
    {
      emailError.textContent = "Please enter a valid email.";
      emailError.style.display = "block";
      valid = false;
    } 
    else 
    {
      emailError.style.display = "none";
    }

    // pswrd
  if (passwordIn.value.length < 6) 
    {
      password1Error.textContent = "Password must be at least 6 characters.";
      password1Error.style.display = "block";
      valid = false;
    } 
  else 
    {
      password1Error.style.display = "none";
    }


    // confirm pswrd
    if(confirmpass.value != passwordIn.value)
    {
      password2Error.textContent = "Enter the same password again";
      password2Error.style.display = "block";
      valid = false;
    }
    else
    {
      password2Error.style.display = "none";
    }

  // submit
  if (valid) 
    {
      alert("Sign-up successful!");
      signupForm.reset();
    }
}
);
