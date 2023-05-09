// Selecting DOM elements
const passwordLength = document.getElementById('password-length');
const uppercaseLetters = document.getElementById('uppercase-letters');
const lowercaseLetters = document.getElementById('lowercase-letters');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const passwordDisplay = document.getElementById('password-display');

// Character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-={}[]|;:<>,.?/~';

// Function to generate password
const generatePassword = () => {
  let password = '';
  let charSet = '';
  if (uppercaseLetters.checked) {
    charSet += uppercaseChars;
  }
  if (lowercaseLetters.checked) {
    charSet += lowercaseChars;
  }
  if (numbers.checked) {
    charSet += numberChars;
  }
  if (symbols.checked) {
    charSet += symbolChars;
  }
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
};

// Event listeners
generateBtn.addEventListener('click', () => {
  passwordDisplay.value = generatePassword();
});

// Copy password to clipboard
passwordDisplay.addEventListener('click', () => {
  passwordDisplay.select();
  document.execCommand('copy');
});
