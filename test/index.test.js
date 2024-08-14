const { generateSecureString } = require("../src/index");

// Test random password generation
console.log(`Random password: ${generateSecureString()}`); // Random password of length 10

//Test password from baseString
console.log(
  `Password from baseString: ${generateSecureString("dhanush holla")}`
);

//Test Random password of custom length
console.log(
  `Custom length(10) Password: ${generateSecureString(null, 10, {})}`
);

//Test Random password of custom length and with options
console.log(
  `Custom length Password with no options: ${generateSecureString(null, 8, {
    includeNumbers: true,
    includeSymbols: false,
  })}`
);
console.log(
  `Custom length Password with symbols: ${generateSecureString(null, 8, {
    includeNumbers: false,
    includeSymbols: true,
  })}`
);
console.log(
  `Custom length Password with both options: ${generateSecureString(null, 8, {
    includeNumbers: true,
    includeSymbols: true,
  })}`
);
