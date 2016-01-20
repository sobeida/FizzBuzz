for(var i = 1; i <=100; i++) {
	if (i % 3 == 0) {
	console.log("Fizz");
	}
	if (i % 5 == 0) {
	console.log("Buzz");
	}
	if (i % 15 == 0) {
	console.log("FizzBuzz");
	}
	console.log(i);
}
function myFunction(maxNumber) {
	for(var i = 1; i <=maxNumber; i++) {
	if (i % 3 == 0) {
	console.log("Fizz");
	}
	if (i % 5 == 0) {
	console.log("Buzz");
	}
	if (i % 15 == 0) {
	console.log("FizzBuzz");
	}
	console.log(i);
}
}
var person = prompt("Please enter a number");
	if (person != null) {
myFunction(person); 
	}

