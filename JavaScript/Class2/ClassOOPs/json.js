//JSON: JavaScript Object Notation

//this is a string msg
const User = `{"name": "Shubham Sharma", "age":24, "gender": "male"}`;
//JSON.parse -> convert string into object.
const user1 = JSON.parse(User);

console.log(user1["age"]);

//vise-versa

//heres an object 
const User2 ={
    name: "shubham Sharma",
    age: 24,
    gender: "male"
};
//JSON.stringify ->  used to convert object to string.
const user2a = JSON.stringify(User2);
console.log(user2a);

