---
title: How well do you know Node.js?
date: 2017-06-25 10:49:35
categories:
  - Javascript
tags:
  - javascript
  - nodejs
---

[Here is the quiz](https://edgecoders.com/how-well-do-you-know-node-js-36b1473c01c8). The lesson is, read the [documentation](https://nodejs.org/en/docs/).

<!--more-->

---

### How come when you declare a global variable in any Node.js file it’s not really global to all modules?

Node wraps any required code in the below function. The idea is to keep each module in its own sandbox. These is a way to do globals, by `global.foo = 5`, but it's not recommended practice.
```javascript
(function (exports, require, module, __filename, __dirname) {
  // module code
});
```
- [Node Docs on globals](https://nodejs.org/api/globals.html#globals_global_objects)
- [Node Docs on the module wrapper](https://nodejs.org/api/modules.html#modules_the_module_wrapper)

---

### When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?
exports is initially just an alias for module.exports. So if you write `exports.foo = 'bar'`, it is actually `module.exports = { foo: 'bar'}`. However if you want to export a function or an object instead of just key-value pairs, you can override the exports alias. So using `module.exports = function foo() {}` will cause exports and module.exports to no longer reference the same object.

---

### Can we require local files without using relative paths?
Lots of different ways. This is probably the simplest.
```javascript
// app.js
global.__base = __dirname + '/';

// bar/whatever.js
const foo = require(__base + 'foo/whatever');
```
- [Gist with different options](https://gist.github.com/branneman/8048520)

---

### What is the Event Loop? Is it part of V8?
It is Node's method of implementing event-driven programming. A piece of code subscribes to an event, and registers a callback to fire when that event is emitted. It isn't part of V8, it is part of libuv and runs on a different thread.
```javascript
// foo.js
const util = require('util');
const EventEmitter = require('events').EventEmitter;
const Foo = function() {
  const self = this;
  setTimeout(() => {
    self.emit('event', 'foo!')
  }, 2000)
};
util.inherits(Foo, EventEmitter);
module.exports = Foo;

// bar.js
const Foo = require('./foo.js')
const foo = new Foo()
foo.on('event', (message) => {
  console.log(message)
})
```
- [Node docs on the event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

---

### What is the Call Stack? Is it part of V8?
It is a list of functions that are to be processed in FILO order. It is a part of V8.

---

### What is the difference between setImmediate and process.nextTick?
`setImmediate` puts the callback at the end of the event queue, so it will be processed after the current poll phase completes (during the check phase).

`process.nextTick` puts the callback at the beginning of the event queue, so it will be processed after the current operation, regardless of the current phase of the event loop.

- [Node Docs on Times](https://nodejs.org/api/timers.html#timers_scheduling_timers)

---

### How do you make an asynchronous function return a value?
Return the value as part of resolving a promise.
```javascript
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve('bar') }, 2000)
  })
}

async function bar() {
  let response = await foo()
  console.log(response)
}
```

- [Ponyfoo article on async/await with promises](https://ponyfoo.com/articles/understanding-javascript-async-await)

---

### Can callbacks be used with promises or is it one way or the other?
You can use both. I like the below pattern.
```javascript
function foo(callback) {
  if (callback) {
    callback()
    return undefined // Or something else
  }
  return new Promise((resolve, reject) => {
    // whatever
  })
}
```

---

### What are the major differences between spawn, exec, and fork?

spawn will 'spawn' a shell, execute a command within that shell and stream back the process output to the parent.

exec works the same as spawn except that its buffers the process output. Better suited for simple tasks.

fork starts a new Node process, with parent and child communicating through events. This is not the same as forking on Linux.

- [Node Docs on child processes](https://nodejs.org/api/child_process.html#child_process_child_process)

---

### How does the cluster module work? How is it different than using a load balancer?
The cluster module forks multiple child processes. When the parent process receives a task, such as a http request, it chooses a child process to be responsible for that task. The difference between clustering and load balancing is that load balancing is done to distribute connections across multiple hosts, whereas clustering is done a single host.

- [Node Docs on the cluster module](https://nodejs.org/api/cluster.html#cluster_how_it_works)

---

### What are the --harmony-\* flags?
Enables a staged V8 feature. This is a feature the V8 team has implemented but isn't on by default due to it being almost but not yet complete. Use `node --v8-options | grep "in progress"` to list them.

---

### How can you read and inspect the memory usage of a Node.js process?
Yes, either with any process manager outside Node, or using `process.memoryUsage()` inside Node.

- [Node Docs on process.memoryUsage()](https://nodejs.org/api/process.html#process_process_memoryusage)

---

### Can reverse-search in commands history be used inside Node’s REPL?
Not on Windows (as far as I know). On Linux, you install [rlwrap](https://github.com/hanslub42/rlwrap), then run Node REPL as `NODE_NO_READLINE=1 rlwrap node`. Honestly not worth the effort.

---

### What are V8 object and function templates?

Function templates are blueprints for a single Javascript function. This is how you embed Javascript in a native C++ environment.

Object templates are associated with function templates. They configure the objects that are created by the function template.

- [V8 Wiki on templates](https://github.com/v8/v8/wiki/Embedder's-Guide#templates)

---

### What is libuv and how does Node.js use it?
Node uses libuv to abstract the non-blocking I/O operations, so Node can be cross platform. It handles file system operations, TCP/UDP sockets, child processes etc. It is what provides Node with the Event loop.

---

### How can you make Node’s REPL always use JavaScript strict mode?
Globally you can always use `alias node=node --use_strict`, otherwise you can define your own repl.js such that;
```javascript
const repl = require('repl');
const r = repl.start({
  replMode: repl.REPL_MODE_STRICT
});
```

---

### How can we do one final operation before a Node process exits? Can that operation be done asynchronously?
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

- [Node Docs on beforeExit event](https://nodejs.org/api/process.html#process_event_beforeexit)

---

### Besides V8 and libuv, what other external dependencies does Node have?
1. http-parser - used parsing HTTP requests and responses.
2. c-ares - used for asynchronous DNS queries
3. OpenSSL - used for crypto functions
4. zlib - used for asynchronous compression and decompression

- [Node Docs on dependencies](https://nodejs.org/en/docs/meta/topics/dependencies/0)

---

### What’s the problem with the process uncaughtException event? How is it different than the exit event?
On uncaughtException event, Node will default to printing the stack trace and exiting. If we register an event handler on the uncaughtException event, Node will not exit. Your event will in effect override the default. So you can produce some unexpected behaviour. Using this event is usually a sign that someone is using the wrong approach or isn't handling their errors in the appropriate section of their program.

- [Node Docs on uncaughtException event](https://nodejs.org/api/process.html#process_event_uncaughtexception)

---

### Do Node buffers use V8 memory? Can they be resized?
No, they do not use V8 memory and they cannot be resized.

> Instances of the Buffer class are similar to arrays of integers but correspond to fixed-sized, raw memory allocations outside the V8 heap.

- [Node Docs on buffers](https://nodejs.org/api/buffer.html#buffer_buffer)

---

### What’s the difference between Buffer.alloc and Buffer.allocUnsafe?
`Buffer.alloc` allocates a memory chunk and goes through an initialization process of setting all the cells to zero, then returning this wrapped in a Node Buffer object.

`Buffer.allocUnsafe` does the same steps except for the initialization process. The unsafe part is that this could leak sensitive user information. The reason for both is that there may be applications where the initialization process produces too much overhead.

---

### How is the slice method on buffers different from that on arrays?
1. Calling slice on an array returns an array but does not mutate the existing array.
2. Calling splice on an array returns an array and mutates the existing array.
3. Calling slice on a buffer returns a reference to the same chunk of memory, but offset and cropped. Mutating the data in that reference will mutate the data in the original buffer.

- [Node Docs on Buffer slice](https://nodejs.org/api/buffer.html#buffer_buf_slice_start_end)

---

### What is the string_decoder module useful for? How is it different than casting buffers to string
It is useful for decoding Buffer objects into strings. You can just call `buffer.toString()`, but string_decoder handles multibyte UTF-8 and UTF-16 characters.**

- [Node Docs on string_decoder](https://nodejs.org/api/string_decoder.html#string_decoder_string_decoder)

---

### What are the 5 major steps that the require function does?
1. Resolving - Find the module in the file system
2. Loading - Determine its filetype
3. Wrapping - Wrap the function in Node's module wrapper, so it is private but appears global.
4. Evaluating - Actually process the code
5. Caching - Store a copy in memory for if required again.

- [Samer Buna's (quiz author) article on require](https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8)

---

### What is the require.resolve function and what is it useful for?
It invokes only the resolve step in the require process. It is useful to verify that a module exists, possibly for some optional package. You can see where Node will look with `console.log(module.paths)`.

---

### What is the main property in package.json useful for?
It indicates the entry point to the program. So when your package is require, your main module's export object is return. NPM needs to know where to look for your main module.

- [npm Docs on package.json](https://docs.npmjs.com/files/package.json#main)

---

### What are circular modular dependencies in Node and how can they be avoided?
Circular dependencies are when A requires B, while B requires A. There are can be many more packages inbetween A and B which makes the chain hard to recognize. They are avoided in Node by returning a unfinished exports object to B, thus breaking the loop. They are avoided in real-world scenarios by having a treelike structure to a codebase where there are clear parent-child relationships that do not flow back up the tree.

- [Node Docs on module cycles](https://nodejs.org/api/modules.html#modules_cycles)

---

### What are the 3 file extensions that will be automatically tried by the require function?
.js, .json and .node in that order.

- [Node Docs on File Modules](https://nodejs.org/api/modules.html#modules_file_modules)

---

### When creating an http server and writing a response for a request, why is the end() function required?
Because the response object is a stream. Therefore we need to indicate to the receiver that we have finished writing data.

---

### When is it ok to use the file system \*Sync methods?
In applications where blocking is appropriate. For example, a CLI tool that performs synchronous operations would be appropriate. A web server that is handling multiple concurrent clients would not.

---

### How can you print only one level of a deeply nested object?
```javascript
util.inspect(foo, { depth: 0 })
```
- [Node Docs on util.inspect](https://nodejs.org/api/util.html#util_util_inspect_object_options)

---

### What is the node-gyp package used for?
gyp is a 'meta-build system'. It generates other build systems. This enables cross platform support. Node uses gyp as node-gyp to compile addon modules as native.

---

### The objects exports, require, and module are all globally available in every module but they are different in every module. How?
Node wraps each module in the function below. So, exports, require and module appear to the module as global variables but actually they are module-specific.
```javascript
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```
- [Node Docs on the module wrapper](https://nodejs.org/api/modules.html#modules_the_module_wrapper)

---

### How can a module be both requirable by other modules and executable directly using the node command?
Using the following conditional.
```javascript
if (require.main === module) {
  // Executed directly
} else {
  // Required
  module.exports = foo
}
```
- [Node Docs on accessing the main module](https://nodejs.org/api/modules.html#modules_accessing_the_main_module)

---

### What’s an example of a built-in stream in Node that is both readable and writable?
> A net.Socket is also a duplex stream, so it can be both readable and writable, and it is also a EventEmitter.

- [Node docs on net module](https://nodejs.org/api/net.html#net_class_net_socket)

---

### What’s the difference between using event emitters and using simple callback functions to allow for asynchronous handling of code?
There are a few. The code being executed remains with the client code rather than being handed over, which has all sorts of implications if a variable needs to be changed. I suppose the most notably difference is multiple clients can subscribe to an event easily and all operate independently. To implement the same thing using a callback structure would be quite cumbersome, you'd have to store an array of callbacks. On the other hand, simple callback functions are just that, simple, and which makes events overkill for a whole bunch of usecases.

---

### The require function always caches the module it requires. What can you do if you need to execute the code in a required module many times?
```javascript
// module.js
module.exports = () => { console.log('foo') }

// app.js
require('./module.js')()
```

---

### What’s the difference between the Paused and the Flowing modes of readable streams?
> When in flowing mode, data is read from the underlying system automatically and provided to an application as quickly as possible using events via the EventEmitter interface.
>
> In paused mode, the stream.read() method must be called explicitly to read chunks of data from the stream.

- [Node docs on streams](https://nodejs.org/api/stream.html#stream_two_modes)

---

### What does the --inspect argument do for the node command?
Attaches Chrome DevTools to the Node instance for debugging purposes. You also probably want to use the --debug-brk option to have it break on first line.

---

### When working with streams, when do you use the pipe function and when do you use events? Can those two methods be combined?
Piping is used when you want to connect a readable stream to a writable stream and don't need to worry about chunks. If you did want to manually handle chunks (for example if you were displaying a progress bar), then you would need to use events. And they can be combined like so;
```javascript
const fs = require('fs')
const rs = fs.createReadStream('./foo.js')
rs.pipe(process.stdout)
rs.on('end', () => { console.log('end') })
```
