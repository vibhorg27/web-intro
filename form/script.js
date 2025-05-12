document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();


  const firstNameInput = document.getElementById('firstName');
  const errorFirstName = document.getElementById('error-firstname');
  const firstName = firstNameInput.value;
  const firstNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
  let isValid = true;

  if (firstNameRegex.test(firstName)) {
    errorFirstName.textContent = '';
  } else {
    errorFirstName.textContent = 'First name must start with a capital and have at least 3 letters.';
    isValid = false;
  }


  const emailInput = document.getElementById('email');
  const errorEmail = document.getElementById('error-email');
  const email = emailInput.value.trim();

  const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.co(\.in)?$/;
  const mandatoryParts = /^([a-zA-Z0-9]+)(\.[a-zA-Z0-9]+)?@([a-zA-Z0-9]+)\.co(\.in)?$/;


  let emailPartsOK = false;
  if (mandatoryParts.test(email)) {
    const domainMatch = email.match(/@([a-zA-Z0-9]+)\.co/);
    if (domainMatch && domainMatch[1] === 'bl') {
      emailPartsOK = true;
    }
  }

  if (emailPartsOK) {
    errorEmail.textContent = '';
  } else {
    errorEmail.textContent = 'Email must be in format abc[.xyz]@bl.co[.in]';
    isValid = false;
  }


  const mobileInput = document.getElementById('mobile');
  const errorMobile = document.getElementById('error-mobile');
  const mobile = mobileInput.value.trim();

  const mobileRegex = /^[0-9]{2} [0-9]{10}$/;


  if (mobileRegex.test(mobile)) {
    errorMobile.textContent = '';
  } else {
    errorMobile.textContent = 'Mobile must be in format CC NNNNNNNNNN (2 digits, space, 10 digits)';
    isValid = false;
  }


    const passwordInput = document.getElementById('password');
    const errorPassword = document.getElementById('error-password');
    const password = passwordInput.value;
    isValid = true;

    // Rule 1: Minimum 8 characters
    const minLength = password.length >= 8;
    // Rule 2: At least 1 uppercase
    const hasUpper = /[A-Z]/.test(password);
    // Rule 3: At least 1 digit
    const hasDigit = /[0-9]/.test(password);
    // Rule 4: Exactly 1 special character 
    const specialChars = password.replace(/[a-zA-Z0-9]/g, ''); // Get all special chars
    const exactlyOneSpecial = specialChars.length === 1;

    if (minLength && hasUpper && hasDigit && exactlyOneSpecial) {
      errorPassword.textContent = '';
    } else {
      isValid = false;
      let messages = [];
      if (!minLength) messages.push('at least 8 characters');
      if (!hasUpper) messages.push('at least 1 uppercase letter');
      if (!hasDigit) messages.push('at least 1 numeric digit');
      if (!exactlyOneSpecial) messages.push('exactly 1 special character');
      errorPassword.textContent = 'Password must have ' + messages.join(', ') + '.';
    }


  if (isValid) {
    alert('All fields are valid!');
  }
});