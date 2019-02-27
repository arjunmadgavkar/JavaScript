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

# Sharing Functions Between Objects
There might be a situation where you have 2 different classes where both of them use a common function. How do you handle this?

## Option 1
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
    this.shared = shared();
}
function shared() {
    console.log("I'm a shared function.");
}
```

If you want to use `this` then you can use the `.apply` method.
```js
function A(x) {
    this.x = x;
    this.doSomething = function(){
        console.log("I'm A");
    }
    this.shared = shared.apply(this, [x]);
}
function B(y) {
    this.y = y;
    this.doSomething = function(){
        console.log("I'm B");
    }
    this.shared = shared.apply(this, [y]);
}
function shared(value) {
    let sum = this.value + 10;
    console.log(sum);
}
```
The `.apply` method calls the `shared()` function using the `this` and the parameters of the caller. 



