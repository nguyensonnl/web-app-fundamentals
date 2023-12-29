const Person = function(name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function(){
	console.log(`Hello, my name is ${this.name}`);
}

const john = new Person("John Doe", 20);
const jane = new Person("Jane Doe", 30);

john.sayHello();
jane.sayHello();