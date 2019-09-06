# Importing and Exporting
`import` statements import bindings that are exported by other modules ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)). There are many different ways to import modules, here are a few examples:
```js
import myAliasForDefault from "module-name"; // myAliasForDefault uses alias and gets the default export that is defined in "module-name"
import * as name from "module-name"; // import everything from "module-name" and rename the contents as name
import { myObject } from "module-name"; // don't export the entire "module-name", just get the myObject that is exported in it 
import { myObject as myFavObj } from "module-name"; // export myObject and rename it as myFavObj (alias)
import { export1 , export2 } from "../module-name"; // export 2 specific objects by using path for module
import defaultExport, * as name from "module-name";
import "module-name"; // get side effects from specific module, but can't access as variable
```
There are [4 types of exports](https://hackernoon.com/import-export-default-require-commandjs-javascript-nodejs-es6-vs-cheatsheet-different-tutorial-example-5a321738b50f):
1. Named exports (several per module)
```js
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```
or 
```js
//------ main.js ------
import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
```
2. Default exports (1 per module)
```js
//------ myFunc.js ------
export default function () { ... };

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();
```
3. Mixed name and default exports
```js
//------ underscore.js ------
export default function (obj) {
    ...
};
export function each(obj, iterator, context) {
    ...
}
export { each as forEach };

//------ main.js ------
import _, { each } from 'underscore';
...
```
4. Cyclical dependencies
```js
// lib.js
import Main from 'main';
var lib = {message: "This Is A Lib"};
export { lib as Lib };

// main.js
import { Lib } from 'lib';
export default class Main { 
  // ....
}
```

# Strict Mode
Strict Mode is something that JavaScript provides to throw exceptions if a part of a program looks unsafe ([source](https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it)).

# AST
An **Abstract Syntax Tree** (or AST) is created after a program is fed to a compiler. The compiler generates this AST as a way to understand the program and its different parts. For example, this tree will show the different conditionals in the source code such as `while loops` and `if statements`. It's quite easy to follow this tree and get an understanding of how the program works. Sources: [JavaScript AST](https://medium.com/@jotadeveloper/abstract-syntax-trees-on-javascript-534e33361fc7), [Wikipedia](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

# Memory Management
JavaScript is single-threaded and uses Google's V8 Engine, which allocates space in your computer for a memory heap and a call stack. JavaScript Engines are either interpreters or compilers (the difference being that interpreters execute the program in the source language rather than translating it to machine code). The V8 engine is a compiler that compiles JavaScript into machine code.

Since JavaScript is single-threaded, there is only 1 call stack. The next function that will be executed is at the top of the stack. Once it is executed, it is popped off of the stack. The problem is that the browser cannot do anything else until the function at the top of the stack is finished executing, which can lead to mega delays if that function takes a long time. That's why JavaScript relies heavily on asynchronous callback functions.

With regards to garbage collection, the V8 engine uses mark and sweep.

Before a program is compiled, the compiler reads through the source code and determines how much space the primitives require. The compiler then talks to the operating system, which gives it that much space on the call stack. Each function gets its own part of the call stack where it stores all of its primitives.

However, if we don't know how much memory an object will need then we are going to ask the operating system for heap space. For example, if we are creating an object from user input.

The differences between static (stack) and dynamic (heap) allocation can be summarized as follows:
* Size must be known at compile time for static allocation and size will be unknown at compile time for dynamic allocation
* Static allocation is performed at compile time, dynamic allocation is performed at run time
* Static allocation is assigned to stack, dynamic is assigned to heap
* Static is FILO (first in, last out), dynamic has no order

[Source](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec).

