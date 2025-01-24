// Push and Pop 

const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr); 

const arr1 = [7,8,9,10,11];
arr1.pop();
console.log(arr1);

// concatination: merge two arrays into one

console.log(arr.concat(arr1));

//forEach
console.log("forEach Example :-)")
const number = [1,2,3,4,5];

//syntax 
// arrayName.forEach(callbackFunction);  :- Here the callbackFunction execute for the arrayName elements. 

number.forEach((number) => {
  console.log(number);
});