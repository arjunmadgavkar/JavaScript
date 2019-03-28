# API Lingo
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
# Other
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
