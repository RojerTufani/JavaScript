function myName() {
    console.log("R")
    console.log("O")
    console.log("J")
    console.log("E")
    console.log("R")
}

// myName // reference only

// myName() // execution of a function

function addTwoNumbers(n1, n2) {
    console.log(n1 + n2) //-> no return value -> only print -> returns 'undefined'
}

// function addTwoNumbers(n1, n2) {
//     console.log(n1 + n2) //-> no return value -> only print -> returns 'undefined'
// }

// addTwoNumbers(3, "4") //-> return a string '34'
// addTwoNumbers(3, null) //-> return 3

// const res = addTwoNumbers(3, 4) //-> returns 7, res = undefined since no return

// console.log(res)

function addTwoNumbers(n1, n2) {
    // let res = n1 + n2;
    // return res;
    return n1 + n2;
}

const res = addTwoNumbers(3, 4)

// console.log("result: ", res)

function loginMessage(userName = "anonymous") { // If any value is not passed, it takes "anonymous" by default
    if(userName === undefined) { // or if(!userName)
        console.log("Username not passed")
        return
    }
    return `${userName} just logged in`
}

loginMessage("Rojer") // Since the function is returning a value, we can't print by calling the function only
                      //can store in a variable or print directly using console.log

console.log(loginMessage()) // prints undefined in place of userName as no argument is passed

console.log(loginMessage("Tufani"))