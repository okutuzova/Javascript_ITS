Every line of JavaScript code is run in an “execution context.” The JavaScript runtime environment maintains a stack of these contexts, and the top execution context on this stack is the one that’s actively running.
The object that this refers to is redetermined every time control enters a new execution context and remains fixed until control shifts to a different context. The value of this is dependent upon two things: The type of code being executed (i.e., global, function, or eval) and the caller of that code.

The first rule is simple: this refers to the global object in all global code. Since all programs start by executing global code, and this is fixed inside of a given execution context, we know that, by default, this is the global object.

There are only three cases where the value of this changes: method invocations, functions called with the new operator, and functions called using call and apply.

This is our second rule: this refers to the parent object inside function code if the function is called as a property of the parent.

The new operator creates a new object and sets this to the new object inside the function it was called with. This leads to our third rule: this in function code invoked using the new operator refers to the newly created object. If we call it without using new, this will refer to the global object:

This is our fourth rule: this is set to the first argument passed to call or apply inside function code when that function is called with either call or apply.

Summary
That’s it! You can figure out what object this refers to by following a few simple rules:

By default, this refers to the global object.
When a function is called as a property on a parent object, this refers to the parent object inside that function.
When a function is called with the new operator, this refers to the newly created object inside that function.
When a function is called using call or apply, this refers to the first argument passed to call or apply. If the first argument is null or not an object, this refers to the global object.

The language has 4 function invocation types:

function invocation: alert('Hello World!')
method invocation: console.log('Hello World!')
constructor invocation: new RegExp('\\d')
indirect invocation: alert.call(undefined, 'Hello World!')

Moreover strict mode also affects the execution context.