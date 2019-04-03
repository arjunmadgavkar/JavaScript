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
