# Anonymous Functions
Anonymous functions are declared at run-time when a certain line executes. It's defined "in-line" in a sense. Here's an example of a regular function and an anonymous function:
```js
function named() {
    console.log("I have a name!");
}
function alsoNamed() {
    let anonymous = function() {
        console.log("I'm anonymous as f**k");
    }
    anonymous();
}
named();
alsoNamed();
// I have a name!
// I'm anonymous as f**k
```

# Pure Functions

You should use pure functions when you can. A pure function is a function that has no side effects and when it's given the same input it always return the same output. In other words, there is nothing outside of that one function that influences the output. For example, the first function below is pure and the following functions are impure:
```js
// Pure
function pureDouble(x) {
    return 2 * x; 
}
// Impure
function impure1(someDate) {
    // Date() is always changing, which means that the same input of someDate will produce different outputs, so not pure
    if (Date() === someDate) {
        return true;
    }
    return false;
}
function impure2(someObject, value) {
    // someObject is defined outside of this function, so if you change its value outside of this function, then the output will change. That violates our definition of a pure function.
    if (someObject.value === value) {
        return true;
    }
    return false;
}
```
Pure Functions Attributes:
* Same input will always produce same output
* No shared state
* No side effects
    - Inputs cannot be modified (instead, return new object)
* Cannot use variables defined outside of the scope of the function
* Cannot depend on user input, which can change, within the function

Pure Functions Benefits:
* Easier to debug
* More "controlled" programs (functions aren't influenced by lots of outside factors)

# Callback Functions

Callbacks are functions that are executed after some other function is finished executing. 

These functions are really important in JavaScript as you're often making asynchronous requests, which cause delays. This can make timing your functions quite hard. 

Let's look at the sample callback functions below:
```js
function makeRequest(userName) {
    let api = new InstagramAPI();
    api.getAllPhotos(userName, function(err, success) {
        if (success) {
            console.log(success.message);
        } else {
            console.log(err.message);
        }
    });
}
/* Fake InstagramAPI */
function InstagramAPI() {
    this.getAllPhotos = function(userName, response) {
        console.log("Photos requested for " + userName);
        let success = { message: "Photos returned successfully." };
        response({}, success);
    }
}
function noRequest() {
    console.log("Function finished.");
}
makeRequest("am192");
noRequest();
// Photos requested for am192
// Photos returned successfully.
// Function finished.
```
Let's walk through this example. 
1. We call `makeRequest()` and pass a the username `"am192"` as an argument. 
2. `makeRequest()` creates an `InstagramAPI` object. 
3. The `InstagramAPI` object has a function called `getAllPhotos()`.
4. We call `api.getAllPhotos()`, which expects 2 parameters: a `userName` and a function.
    - Since it expects us to pass it a function, we do just that. We define our function in-line, but we could have all passed it a function defined somewhere else. 
    - We know that `getAllPhotos()` will call the function that we've passed it once it's done with everything else it has to do.
5. The behavior works as expected. `getAllPhotos()` calls the function we've passed it and stuff is printed out.

The most foncusing part about callbacks is really the in-line definition. We could get the exact same result as above if we defined the `response()` function by itself rather than in-line. That would look like this:
```js
function makeRequest(userName) {
    let api = new InstagramAPI();
    api.getAllPhotos(userName, definedOutside);
}
/* Fake InstagramAPI */
function InstagramAPI() {
    this.getAllPhotos = function(userName, response) {
        console.log("Photos requested for " + userName);
        let success = { message: "Photos returned successfully." };
        response({}, success);
    }
}
function definedOutside(err, success) {
    if (success) {
        console.log(success.message);
    } else {
        console.log(err.message);
    }
}
function noRequest() {
    console.log("Function finished.");
}
makeRequest("am192");
noRequest();
// Photos requested for am192
// Photos returned successfully.
// Function finished.
```
This is the exact same thing! A callback is just a function that takes another function as a parameter so it can do a bunch of operations before calling that function. People like to be fancy and define it in-line, but it can be defined anywhere!

