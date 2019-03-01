# Creating Objects
There are a few ways to create a JS object:
* Using the `class` keyword
* Using the `function` keyword

```js
class A {
    constructor(){}
    doSomething(){
        console.log("Hello");
    }
}
// let a = new A();

function B() {
    this.doSomething = function() {
        console.log("Hello");
    }
}
// let b = new B();
```

# Sharing Functions between Objects
There might be a situation where you have 2 different classes where both of them use a common function. How do you handle this?

## Sharing Basic Functions

You can define 2 classes and the common function. Both classes make use of the common function.
```js
function A() {
    this.doSomething = function(){
        console.log("I'm A");
    }
    this.shared = shared();
}
function B() {
    this.doSomething = function(){
        console.log("I'm B");
    }
    this.shared = function() {
        shared();
    }
}
function shared() {
    console.log("I'm a shared function.");
}
```

## Sharing Functions that Use `this` between Objects

If you want to use a function with `this` then you can use the `.apply` method. It calls the shared function and uses the `this` of the caller.

```js
function Insider(value) {
    this.value = value;
    this.printValue = function(){
        console.log("I'm an insider and my value is " + value);
    }
    this.increaseValue = function() {
        increaseValue.apply(this);
    }
}
function Outsider(value) {
    this.value = value;
    this.printValue = function(){
        console.log("I'm an outsider and my value is " + value);
    }
    this.increaseValue = function() {
        increaseValue.apply(this);
    }
}
function increaseValue() {
    this.value = this.value + 10;
    console.log(this.value); // Object's value + 10
}
```

## Sharing Pure Functions

You should use pure functions when you can. A pure function is a function that when given the same input will always return the same output. In other words, there is nothing outside of that one function that influences the output. For example, the first function below is pure and the following functions are impure:
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

This makes it really easy to debug errors as you only have to look at the function that is being called. It also avoids shared state.

Here's an example:





