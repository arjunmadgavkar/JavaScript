# Web Lingo
## Provider
* Defintion: A **provider** provides data to a part of a web application. **Providers** should be pluggable components.
## Third Party Vendor
* Definition: A **third party vendor** is any company/organization external to your company that provides a product/service your company uses. 
* Spoken example:
    * PayPal is using Trulioo, a **third party vendor**, to handle customer authentication. 
    * Instead of building out the software for Agile development internally, why don't we use a **third party vendor** such as Rally?
## Web Service
* Definition: A **web service** allows machines/programs to talk to each other over the internet (HTTP). Note that web services are very different from web applications. You use and interact with web applications everyday, but web services exist behind the scenes and help those applications function ([link](https://stackoverflow.com/questions/226108/what-is-a-web-service-in-plain-english)). In other words, **web services** provide information that machines/programs can use to perform certain functions whereas web applications provide information that is designed for humans to use. **Web services** do not rely on browsers as they don't have a GUI associated with them.
* Spoken examples:
    * After a user sends a tweet, a **web service** is used to notify other users that a new tweet is available on their news feed.
    * A website like Expedia has to use **web services** to get the cheapest flights from different airlines. Expedia needs to know all of the available flights on a given day from 10 different airlines. To do this, Expedia would need to get information from different airlines' databases, but that's insecure. Therefore, Expedia likely has a **web service** that requests information from the different airlines' **web services**. The airlines' **services** likely talk to their databases and sends a response back to Expedia with the relevant information. Expedia then uses the response data to update its UI. It's likely that the airlines are exposing their **services** with an API.
    * Our **web service** allows your JavaScript application to communicate with servers that run Java programs.
## Consume
* Definition: **Consuming** an API simply means using it ([link](https://stackoverflow.com/questions/24661302/what-does-consume-an-api-means)).
* Spoken examples:
    * The product teams **consume** the `Griffin API` to handle formatting in different countries.
    * How much does it cost per month to **consume** Yelp's API?
# JSON
## Schema
* Defintion: A JSON schema describes the structure of a JSON Object. In other words, it describes the properties that JSON objects should have and the way those properties are laid out. The JSON Schema itself is a JSON Object that lays out these properties, but does not implement them. For more info click [here](https://json-schema.org/understanding-json-schema/about.html).
* Spoken examples: 
    * The first thing I had to do was understand CLDR's JSON Schema. Once I did this, I thought of ways to inject our G11nMetadata into their metadata without violating the their Schema's rules. Once I figured that out, I simply injected our Metadata into their Metadata.
    * What does their Schema look like? I want to get a sense of the type of JSON object they're expecting.
    * Why did you create the Schema this way?
    * CLDR's Schema is really confusing and is too general as it accepts many different types of JSON objects.
    * Are we validating the JSON object against our schema? 
    * Why did you define the schema this way?
* Code examples:
The following is a JSON Schema that expects the JSON object to be of type array. Furthermore, it expects every value in that array to be of type `number`. 
```json
{
  "type": "array",
  "items": {
    "type": "number"
  }
}
```
The next schema expects an array where each item must be a very specific value. The array `[1600, "Pennsylvania", "Avenue", "NW"]` would be validated against this schema, but the array `[24, "Sussex", "Drive"]` would **not** be.
```json
{
  "type": "array",
  "items": [
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "string",
      "enum": ["Street", "Avenue", "Boulevard"]
    },
    {
      "type": "string",
      "enum": ["NW", "NE", "SW", "SE"]
    }
  ]
}
```
Below is one more schema to drive home the point. As you can see, the key value pairs are very specific. 
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/product.schema.json",
  "title": "Product",
  "description": "A product from Acme's catalog",
  "type": "object",
  "properties": {
    "productId": {
      "description": "The unique identifier for a product",
      "type": "integer"
    }
  },
  "required": [ "productId" ]
}
```
# Functions
## Invoke
* Definition: When a function is **invoked** it is called automatically rather than explicitly. For example, a constructor is invoked when you create an object of a certain class. However, if you have a line of code that explicitly calls a method (such as `myObj.sum()`) then you are calling the `sum` method rather than invoking it.
* Spoken examples: 
  * When you create that object its constructor is **invoked.**
# Other
## Resolve
* Definition: **Resolving** a variable means that assigning a variable to a certain value. **Resolution** happens once a variable has a certain value ([link](https://www.revolvy.com/page/Name-resolution-%28programming-languages%29)).
* Spoken examples:
  * The variable `sum` **resolves** to the sum of the three numbers that are passed as arguments.
  * In your `package.json` file the `griffin` package resolves to the latest version, which is not stable.
## Literals
* Definition: **Literals** are values that are assigned to [identifiers](#Identifier). For example `"hi"` in the following assignment `let str = "hi"` is a string **literal.** This is clearly different than assigning `str` to another variable. You're assigning it to a fixed value, which is a **string literal.** There are also array literals, object literals, and more ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Literals)).
* Spoken examples:
  * You shouldn't be assigning your variable `str` to another variable. Instead, create `str` and use a **string literal.**
  * Create an **object literal** and set the object's name using a **string literal.**
  * Interpolating **string literals** is really easy in JavaScript!
* Code examples:
```js
const arjun = {
  name: "Arjun",
  age: 24
} // arjun is an object literal
const val = "hey!" // val is a string literal
```
## Identifier
* Definition: **Identifiers** are names given to variables, functions, or properties. In other words, **identifiers** identify certain variables, functions, or properties. **Identifiers** allow us to refer to a certain object, variable, function, etc. in a program ([link](https://stackoverflow.com/questions/28185877/difference-between-identifier-and-variable-in-javascript)).
* Spoken examples:
  * You should choose a different **identifier** for that object as the one you've chosen isn't clear.
  * Why are using that **identifier**? It is a reserved keyword, so you can't use it.
  * I should have chosen a shorter **identifier**, this one takes forever to write out by hand!
* Code examples:
```js
let arjun = new Person("Arjun"); // arjun is an identifier. It identifies an object.
let x = 1; // x is an identifier. It identifies a variable.
let test = function() {
  return 1;
} // test is an identifier. It identifies a function.
```
## Binding
* Defintion: A **binding** is simply what a name refers to. In other words, a **binding** determines which variable an [identifier](#identifier) refers to in a given scope ([link](https://stackoverflow.com/questions/39259729/javascript-reference-vs-binding-whats-the-difference)).
* Spoken examples:
  * The array `testArr` is `bound` to the 5 values you assigned to it when you created it.
  * Import statements **bind** identifiers to objects defined in other classes.
* Code examples:
```js
// This import statement binds Griffin to the Griffin class defined in the "griffin-paypal" file
import { Griffin } from "./griffin-paypal"
let myObj = new Griffin("en-US");
```
## Canonical
* Defintion: Canonical form is used when talking about data that could be represented in a few different ways, but one of those ways is preferred ([link](https://stackoverflow.com/questions/280107/what-does-the-term-canonical-form-or-canonical-representation-in-java-mean)). In other words, the **canonical form** is the standard way of representing something like data.
* Spoken examples:
    * This function takes a **canonical** `Date` object as an argument. 
    * Two **canonically** equivalent strings will have the same **canonical** ordering ([link](http://unicode.org/faq/normalization.html)).
    * Forms C and D provide **canonical forms** for strings ([link](https://docs.microsoft.com/en-us/windows/desktop/intl/using-unicode-normalization-to-represent-strings)).
* Code examples:
There are a few different ways to describe a file's path. The last is considered the **canonical form**, meaning that it is the preferred way of representing the file's path.
```
myFile.txt                                   # in current working dir
../conf/myFile.txt                           # relative to the CWD
/apps/tomcat/conf/myFile.txt                 # absolute path using symbolic links
/u1/local/apps/tomcat-5.5.1/conf/myFile.txt  # absolute path with no symlinks
```
## Primitive (data type)
* Definition: a primitive is data that is not an object, has no methods, and is immutable. The variable is not a primitive, rather the data that the variable points to is of a primitive type. In JavaScript, the primitives data types are `String`, `Number`, `Boolean`, `Null`, `Undefined`, and `Symbol` ([source](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)).
* Spoken examples:
  * Is that a primitive?
  * The compiler handles primitives that way.
* Code example:
```js
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
```

