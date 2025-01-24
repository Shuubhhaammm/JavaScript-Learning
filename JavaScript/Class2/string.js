// length, indexOf, lastindexOf, slice

const str = "Shubham Kumar Sharma Kumar";

console.log(str.length);
console.log(str.indexOf("Kumar")); 
// lastindexof(target) : this is used to fetch the last index of the target word used at.
console.log(str.lastIndexOf("Kumar"));


console.log(str.slice(0,7)); //slice keyword doesnot include the last index it prints from index [start-to-(end-1)]
// in above example it include (0,1,2,3,4,5,6) index element only 

//substr : (index, length)
console.log(str.substring(2,5));

function findIndex(str, target){
    console.log("Original String: ", str);
    console.log(str.indexOf(target));
    //to get last index of the word
    console.log(str.lastIndexOf(target));
}

findIndex("Hello Bitch Vitch Witch Bitch", "Bitch");


// relpace: 
const word1 = "Hello Shubham";
console.log(word1.replace("Shubham", "Hippo"));


//split:
const word2 = "Hii this is hippo";
const word3 = word2.split(" ");
console.log(word3);


//trim() : this is used to remove extra unnessesary blank spaces
const word4 = "     this is shubh     ";
console.log(word4.trim());


//toUpper() amd toLower()


//parseInt("string") :  this keyword is used to parse string directly into integer
console.log(parseInt("42aws"));
console.log(parseInt(3.222));
//parseFloat, 