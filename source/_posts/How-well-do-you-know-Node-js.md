---
title: How well do you know Node.js?
date: 2017-06-25 10:49:35
---

https://edgecoders.com/how-well-do-you-know-node-js-36b1473c01c8

1. How come when you declare a global variable in any Node.js file it’s not really global to all modules?
```javascript
(function (exports, require, module, __filename, __dirname) {
  // module code
});
```
https://nodejs.org/api/modules.html#modules_the_module_wrapper

1. **When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?**
exports is initially just an alias for module.exports. So if you write `exports.foo = 'bar'`, it is actually `module.exports = { foo: 'bar'}`. However if you want to export a function or an object, you override the exports alias. So using `module.exports = function foo() {}` will cause exports and module.exports to no longer reference the same object.

1. **Can we require local files without using relative paths?**
Lots of different ways. This is probably the simplest.
```javascript
// app.js
global.__base = __dirname + '/';

// bar/whatever.js
const foo = require(__base + 'foo/whatever');
```
  [Gist with different options](https://gist.github.com/branneman/8048520)

1. What is the Event Loop? Is it part of V8?

1. What is the Call Stack? Is it part of V8?

1. **What is the difference between setImmediate and process.nextTick?**
* `setImmediate` puts the callback at the end of the event queue.
* `process.nextTick` puts the callback at the beginning of the event queue.
  [Node Docs on Times](https://nodejs.org/api/timers.html#timers_scheduling_timers)

1. **How do you make an asynchronous function return a value?**
Return the value as part of resolving a promise.
```javascript
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve('bar') }, 2000);
  });
}

async function bar() {
  let response = await foo();
  console.log(response);
}
```
  [Ponyfoo article on async/await with promises](https://ponyfoo.com/articles/understanding-javascript-async-await)

1. **Can callbacks be used with promises or is it one way or the other?**
You can use both. I like the below pattern.
```javascript
function foo(callback) {
  if (callback) {
    callback();
    return undefined;
  }
  return new Promise((resolve, reject) => {
    // whatever
  })
}
```

1. What are the major differences between spawn, exec, and fork?
* `spawn` will 'spawn' a shell, execute a command within that shell and stream back the process output to the parent.
* `exec` works the same as `spawn` except that its buffers the process output.
* `fork`

1. How does the cluster module work? How is it different than using a load balancer?

1. **What are the --harmony-\* flags?**
Enables a staged V8 feature. This is a feature the V8 team has implemented but isn't on by default due to it being almost but not yet complete. Use `node --v8-options | grep "in progress"` to list them.

1. **How can you read and inspect the memory usage of a Node.js process?**
Yes, either with any process manager outside Node, or using `process.memoryUsage()` inside Node.
  [Node Docs on process.memoryUsage()](https://nodejs.org/api/process.html#process_process_memoryusage)

1. **Can reverse-search in commands history be used inside Node’s REPL?**
Not on Windows (as far as I know). On Linux, you install [rlwrap](https://github.com/hanslub42/rlwrap), then run Node REPL as `NODE_NO_READLINE=1 rlwrap node`. Honestly not worth the effort.

1. What are V8 object and function templates?

1. **What is libuv and how does Node.js use it?**
To abstract the non-blocking I/O operations, so Node can be cross platform. It handles file system operations, TCP/UDP sockets, child processes etc. It is what provides Node with the Event loop.

1. **How can you make Node’s REPL always use JavaScript strict mode?**
Globally it is as simple as `alias node=node --use_strict`. Or define your own repl.js such that;
```javascript
const repl = require('repl');
const r = repl.start({
  replMode: repl.REPL_MODE_STRICT
});
```

1. **How can we do one final operation before a Node process exits? Can that operation be done asynchronously?**
You can register a function for the exit event, but its synchronous. If you need your function to be asynchronous, use the beforeExit event like so;
```javascript
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve('bar') }, 2000);
  });
}

async function bar() {
  let response = await foo();
  console.log(response);
}

process.once("beforeExit", bar);
```
  [Node Docs on beforeExit event](https://nodejs.org/api/process.html#process_event_beforeexit)

1. **Besides V8 and libuv, what other external dependencies does Node have?**
* http-parser - used parsing HTTP requests and responses.
* c-ares - used for asynchronous DNS queries
* OpenSSL - used for crypto functions
* zlib - used for asynchronous compression and decompression
  [More information](https://nodejs.org/en/docs/meta/topics/dependencies/0)

1. **What’s the problem with the process uncaughtException event? How is it different than the exit event?**
On uncaughtException, Node will default to printing the stack trace and exiting. If we register an event handler on the uncaughtException event, Node will not exit. So you can produce some unexpected behaviour and is usually a sign that someone is using the wrong approach or isn't handling their errors.
  [More information](https://nodejs.org/api/process.html#process_event_uncaughtexception)

1. Do Node buffers use V8 memory? Can they be resized?

1. **What’s the difference between Buffer.alloc and Buffer.allocUnsafe?**
`Buffer.alloc` allocates a memory chunk and goes through an initialization process of setting all the cells to zero, then returning this wrapped in a Node Buffer object. `Buffer.allocUnsafe` does the same steps except for the initialization process. The unsafe part is that this could leak sensitive user information. The reason for both is that there may be applications where the initialization process produces too much overhead.

1. **How is the slice method on buffers different from that on arrays?**
* Calling slice on an array returns an array but does not mutate the existing array.
* Calling splice on an array returns an array and mutates the existing array.
* Calling slice on a buffer returns a reference to the same chunk of memory, but offset and cropped. Mutating the data in that reference will mutate the data in the original buffer.
  [Node Docs on Buffer slice](https://nodejs.org/api/buffer.html#buffer_buf_slice_start_end)

1. What is the string_decoder module useful for? How is it different than casting buffers to strings?
It is useful for decoding Buffer objects into strings. You can just call `buffer.toString()`, but string_decoder handles multibyte UTF-8 and UTF-16 characters.
  [Node Docs on string_decoder](https://nodejs.org/api/string_decoder.html#string_decoder_string_decoder)

1. What are the 5 major steps that the require function does?
  * Resolving - Find the module in the file system
  * Loading -
  * Wrapping
  * Evaluating
  * Caching

1. What is the require.resolve function and what is it useful for?
It invokes only the resolve step in the require process (the first step). It is useful to verify that a module exists, possibly for some optional package. You can see where Node will look with `console.log(module.paths)`.

1. **What is the main property in package.json useful for?**
Indicating the entry point to the program.
  [npm Docs on package.json](https://docs.npmjs.com/files/package.json#main)

1. What are circular modular dependencies in Node and how can they be avoided?

1. **What are the 3 file extensions that will be automatically tried by the require function?**
`.js`, `.json` and `.node` in that order.
  [Node Docs on File Modules](https://nodejs.org/api/modules.html#modules_file_modules)

1. **When creating an http server and writing a response for a request, why is the end() function required?**
Because the response object is a stream. Therefore we need to indicate that we have finished writing data.

1. **When is it ok to use the file system \*Sync methods?**
In applications where blocking is appropriate. For example, a CLI tool that performs synchronous operations would be appropriate. A web server that is handling multiple concurrent clients would not.

1. **How can you print only one level of a deeply nested object?**
```javascript
util.inspect(foo, { depth: 0 })
```
  [Node Docs on util.inspect](https://nodejs.org/api/util.html#util_util_inspect_object_options)

1. **What is the node-gyp package used for?**
gyp is a 'meta-build system'. It generates other build systems. This enables cross platform support. Node uses gyp as node-gyp to compile addon modules as native.

1. **The objects exports, require, and module are all globally available in every module but they are different in every module. How?**
Node wraps each module in the function below. So, exports, require and module appear to the module as global variables but actually they are module-specific.
```javascript
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```
  [Node Docs on the module wrapper](https://nodejs.org/api/modules.html#modules_the_module_wrapper)

1. How can a module be both requirable by other modules and executable directly using the node command?
Using the following conditional.
```javascript
if (require.main === module) {
  // Executed directly
} else {
  // Required
}
```
  [Node Docs on accesing the main module](https://nodejs.org/api/modules.html#modules_accessing_the_main_module)
1. What’s an example of a built-in stream in Node that is both readable and writable?

1. What’s the difference between using event emitters and using simple callback functions to allow for asynchronous handling of code?

1. The require function always caches the module it requires. What can you do if you need to execute the code in a required module many times?

1. What’s the difference between the Paused and the Flowing modes of readable streams?

1. What does the --inspect argument do for the node command?

1. When working with streams, when do you use the pipe function and when do you use events? Can those two methods be combined?
