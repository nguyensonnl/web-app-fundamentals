```typescript
//named function
function display() {
  console.log("Hello Typescript");
}
display();

//func with paramter and return types
function sum(x: number, y: number): number {
  return x + y;
}
sum(2, 3);

//anonymous func
let greeting = function () {
  console.log("Hello typescript");
};
//func with paramter and return types
let sum = function (x: number, y: number): number {
  return x + y;
};
sum(2, 3);

//func with parameters
function greet(greeting: string, name: string): string {
  return greeting + " " + name + "!";
}
greet("hello", "world"); //ok
greet("HelloP"): //error

//Optional parameters
function Greet(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
Greet('Hi'); // OK, returns "Hi undefined!".
Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

//default paramters
function Greet(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

Greet('Steve');//OK, returns "Hello Steve!"
Greet('Steve', 'Hi'); // OK, returns "Hi Steve!".
Greet('Bill'); //OK, returns "Hello Bill!"

function Greet(greeting: string = "Hello", name: string) : string {
    return greeting + ' ' + name + '!';
}

Greet(undefined, 'Steve');//returns "Hello Steve!"
Greet("Hi", 'Steve'); //returns "Hi Steve!".
Greet(undefined, 'Bill'); //returns "Hello Bill!"
```

```typescript
//arrow func
let sum = (x: number, y: number): number => {
  return x + y;
};
sum(2, 3);

//Parameterless Arrow Function
let Print = () => console.log("Hello TypeScript");
Print(); //Output: Hello TypeScript

let sum = (x: number, y: number) => x + y;
sum(3, 4); //returns 7
```

- func overloading

```typescript
//rest params
function Greet(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

Greet("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

Greet("Hello"); // returns "Hello !"
```
