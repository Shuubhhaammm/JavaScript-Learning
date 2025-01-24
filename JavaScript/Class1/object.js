// syntax of declaring object
const user1 = {
    firstname : "shubham",
    gender : "male"
}


//fetching the value from object
console.log(user1["firstname"]);
console.log(user1["gender"]);

// Object as array
const user2 = [{
    firstname: "shubham",
    gender: "male"
}, {
    firstname : "Kumar",
    gender : "male"
}, {
    firstname : "sharma",
    gender : "sigma"
}];

// fetching the value from the object
for(let i=0; i < user2.length; i++){
    if(user2[i].gender =="sigma"){
        console.log(user2[i].firstname);
    }
}