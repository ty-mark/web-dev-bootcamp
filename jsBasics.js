// var age = Number(prompt("Please type in your age: "));
// if (age < 0) {
// 	alert("Age cannot be negative!");
// }
// if (age == 21) {
// 	alert("happy 21st birthday!!");
// }
// if (age % 2 !== 0) {
// 	alert("Your age is odd!");
// }
// if (age % Math.sqrt(age) === 0) {
// 	alert("perfect square!");
// }

// var ans = prompt("are we there yet?");

// while (ans !== "yes") {
// 	ans = prompt("are we there yet?");
// }
// alert("Yay, we finally made it!");

// function factorial(num) {
// 	if (num === 0) return 1;
// 	else return num * factorial(num - 1);
// }

// function kebabToSnake(str) {
// 	return str.replace(/-/g,"_");
// }

// var todos = [];
// window.setTimeout(function() {
//   // put all of your JS code from the lecture here

// 	var input = prompt("what would you like to do?");
// 	while (input !== "quit") {
// 		if (input === "list") {
// 			todos.forEach(function(todo, i) {
// 				console.log(i + ": " + todo);
// 			})
// 		} else if (input === "new") {
// 			var newTodo = prompt("Enter new Todo");
// 			todos.push(newTodo);
// 		} else if (input === "delete") {
// 			var oldLen = todos.length;
// 			var toDelete = prompt("which todo you want to remove?");
// 			todos.forEach(function(item, index) {
// 				if (item === toDelete) {
// 					todos.splice(index, 1);
// 				}
// 			});
// 			if (todos.length === oldLen) {
// 				alert("There is no such todo in the list!");
// 			}
// 		}
// 		input = prompt("what would you like to do?");
// 	}
// 	console.log("Now it is about to quit.");
// }, 800);

var button = document.querySelector("button");
button.addEventListener("click", function() {
	document.body.classList.toggle("purple");
})


