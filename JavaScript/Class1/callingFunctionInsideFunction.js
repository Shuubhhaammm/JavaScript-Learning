//TO Learn: How a function used as an argument in a function.

function sum(num1, num2, fnToCall){ // fnToCall is a argument that is used to do so.
    let result = num1+num2;
    //here we call it
    fnToCall(result);
}

function displayActive(data) {
    console.log("result of the sume is" +data);
}

function displayPassive(data) {
    console.log("sum's result is " +data);
}

// call one funtion
const ans = sum(5, 6, displayPassive); // here we pass function as an argument.
//callbacks


//example 2:

function calculateArithmetic(a, b, FnToCall){
    const ans = FnToCall(a,b);
    return ans;
}

function sum(a, b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value = calculateArithmetic(5,8,sub);
console.log(value);