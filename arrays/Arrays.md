# Creating Arrays
Here's what it looks like to create an array: 
```js
let newArr = ['hello', 'world'];
```

# Looping over an array
To simply loop over the elements of the array you can use the `.forEach()` function. For example:
```js
newArr.forEach(function(item, index, array){
    console.log(item, index);
})
```

# .map()
You can use the `.map()` function to perform some operation on the items in an existing array and return a new array with the resulting items. For example:
```js
let excitedArr = newArr.map(item => item + "!");
```



