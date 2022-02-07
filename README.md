# Request-wrapper

## Super simple to use

Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default..

```js
const request = require("@nitinrajput/request-wrapper");
request("http://www.google.com", function (error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});
```

Promise based HTTP client for the browser and node.js

>

## Installing

Using npm:

    npm i @nitinrajput/request-wrapper

## Table of contents

- [Promises & Async/Await](#promises--asyncawait)
- [Error Handling](#try--catch)

Request also offers [convenience methods](#convenience-methods) like
`request.get` , `request.post`, `request.put`, `request.patch` and `request.Delete`

---

Performing a `GET` request

```js
request.get("http://www.google.com", function (error, response, body) {
  console.error("error:", error);
  // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode);
  // Print the response status code if a response was received
  console.log("body:", body);
  // Print the HTML for the Google homepage.
});
```

Performing a `post` request

```js
request.post("http://www.google.com", data, function (error, response, body) {
  console.error("error:", error);
  // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode);
  // Print the response status code if a response was received
  console.log("body:", body);
  // Print the HTML for the Google homepage.
});
```

data for PATCH, POST and PUT requests. Must be a `String or object If `json`is`true`, then `body` must be a JSON-serializable object.

## Promises & Async/Await

`request` supports both streaming and callback interfaces natively. If you'd like `request` to return a Promise instead, you can use an alternative interface wrapper for `request`. These wrappers can be useful if you prefer to work with Promises, or if you'd like to use `async`/`await` in ES2017.

## [The basics of async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#the_basics_of_asyncawait "Permalink to The basics of async/await")

There are two parts to using async/await in your code.

### [The async keyword](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#the_async_keyword "Permalink to The async keyword")

First of all we have the `async` keyword, which you put in front of a function declaration to turn it into an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). An async function is a function that knows how to expect the possibility of the `await` keyword being used to invoke asynchronous code.

### [The await keyword](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#the_await_keyword "Permalink to The await keyword")

The advantage of an async function only becomes apparent when you combine it with the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) keyword. `await` only works inside async functions within regular JavaScript code, however it can be used on its own with [JavaScript modules.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

`await` can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

You can use `await` when calling any function that returns a Promise, including web API functions.

## Error handling, "try...catch"

No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.

Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

But there’s a syntax construct `try...catch` that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

## [The “try…catch” syntax](https://javascript.info/try-catch#the-try-catch-syntax)

The `try...catch` construct has two main blocks: `try`, and then `catch`:

```js
try {
  // code...
} catch (err) {
  // error handling
}
```

It works like this:

1.  First, the code in `try {...}` is executed.
2.  If there were no errors, then `catch (err)` is ignored: the execution reaches the end of `try` and goes on, skipping `catch`.
3.  If an error occurs, then the `try` execution is stopped, and control flows to the beginning of `catch (err)`. The `err` variable (we can use any name for it) will contain an error object with details about what happened.

So, an error inside the `try {...}` block does not kill the script – we have a chance to handle it in `catch`.

## Example

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

    const  request = require("@nitinrajput/request-wrapper");

#### application/x-www-form-urlencoded (URL-Encoded Forms)

URL-encoded forms are simple.

```js
request.post('http://service.com/upload', {form:{key:'value'}}
// or
request.post({url:'http://service.com/upload', form: {key:'value'}}, function(err,httpResponse,body){ /* ... */ })
```

## request(url, callback)

The first argument can be either a `url` or an `options` object. The only required option is `uri`; all others are optional.

- `url` - a parsed url object from `url.parse()`
- `baseUrl` - fully qualified uri string used as the base url. Most useful with `request.defaults`, for example when you want to do many requests to the same domain. If `baseUrl` is `https://example.com/api/`, then requesting `/end/point?test=true` will fetch `https://example.com/api/end/point?test=true`.
- `method` - http method (default: `"GET"`)

---

- `body` - entity body for PATCH, POST and PUT requests. Must be a `Buffer`, `String` `. If `json`is`true`, then `body` must be a JSON-serializable object.

---

### Request method aliases

For convenience aliases have been provided for all supported request methods.

##### request.Delete(url,callback )

##### request.get(url, callback)

##### request.post(url,data,callback)

##### request.put(url ,data, callback)

##### request.patch(url, data, callback)
