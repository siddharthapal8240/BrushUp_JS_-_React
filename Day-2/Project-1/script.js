// Create a faulty calculator that only does the following operations: +, -, *, and /. Take two numbers as input and return the result.
// in this calculator only 10% of the time the result will be wrong, the other 90% of the time the result will be correct.


let random = Math.random()

console.log(random)
let a = prompt("Enter the first number")
let b = prompt("Enter the operation")
let c = prompt("Enter the second number")

let obj = {
    "+": "-",
    "*": "/",
    "-": "**",
    "/": "*"
}

if (random > 0.1) {
    //correct calculation 

    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
} else {
    //wrong calculation
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}