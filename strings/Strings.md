# Creating Strings
Strings are super simple, so this section should be short. There are 3 basic ways to create a string:
1. Using backticks
2. Using double quotes
3. Using single quotes

# Escaping Characters 
If you want to use an escaping character, you have to use `\`. For example, you could create the following string: `"Hey \n Arjun"`.

# String Interpolation
To add a variable to a string, you can use backticks as in the following example:
```js
const str = "A$AP";
const interpolation = `${str} Rocky.`;
console.log(interpolation);
// Output: A$AP Rocky
```
