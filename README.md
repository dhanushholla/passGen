# 🎉 PassGen 🚀

Welcome to the **PassGen** package! This tool generates secure, customizable passwords from a base string or randomly based on your preferences. Perfect for creating strong passwords with a splash of fun! 🎨🔐

## ✨ Features

- **Generate Passwords**: From a given base string or randomly
- **Customizable Options**: Include numbers and special characters
- **Easy to Use**: Simple function with default values — just pass the necessary parameters and enjoy!

## 📦 Installation

First, make sure you have [Node.js](https://nodejs.org/) installed. Then, install the package via npm:

```bash
npm install passgen
```

## 🛠️ Usage

Here's how to use the `generateSecureString` function to create awesome passwords! 💪

### 1. Generate a Random Password

If you just want a random password, use the function with a specified length:

```javascript
import { generateSecureString } from "passgen";

const randomPassword = generateSecureString();
console.log(`Random Password: ${randomPassword}`);
```

This will generate a random password with a default length of 10 characters. You can customize the length by passing a different number.

### 2. Generate a Password from a Base String

Transform a base string into a password with optional numbers and special characters:

```javascript
import { generateSecureString } from "passgen";

const baseStringPassword = generateSecureString("exampleBaseString");
console.log(`Base String Password: ${baseStringPassword}`);
```

This will transform the provided base string and add a random two-digit number if the base string doesn’t contain digits.

### 3. Customize Your Password

Use the options to include numbers and special characters:

- **`includeNumbers`**: `true` or `false`
- **`includeSymbols`**: `true` or `false`

Example:

```javascript
const customPassword = generateSecureString("", 16, {
  includeNumbers: true,
  includeSymbols: true,
});
console.log(`Custom Password: ${customPassword}`);
```

## 🔧 Options

- **`input`**: Base string to transform (optional)
- **`length`**: Length of the random password (default: 10)
- **`options(object type)`**:
  - **`includeNumbers`**: Whether to include numbers (default: `false`)
  - **`includeSymbols`**: Whether to include special characters (default: `false`)

## 🧩 Examples

### Basic Random Password

```javascript
generateSecureString(); // Returns a random password with default settings
```

### Password from Base String

```javascript
generateSecureString("hello"); // Transforms 'hello' into a secure password
```

### Custom Length and Options

```javascript
generateSecureString("", 12, { includeNumbers: true, includeSymbols: true });
generateSecureString("", 12, { includeNumbers: false, includeSymbols: true });
generateSecureString("", 12, { includeNumbers: true, includeSymbols: false });
```

## 💡 Contributing

We welcome contributions! If you have suggestions, improvements, or fixes, please open an issue or submit a pull request. Happy coding! 😃

## 📜 License

This package is licensed under the MIT License. See the LICENSE file for more details.

## 🎉 Enjoy Secure Passwords!

Feel free to use this package to make your passwords stronger and more secure. If you find it useful, give it a ⭐ on GitHub!

Happy coding! 🎊🚀
