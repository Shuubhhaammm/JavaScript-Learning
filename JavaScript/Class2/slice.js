// Basic Code behind Slice Keyword

function Slice(Str, start, end){
    let newString ="";
    for(let i=0; i<= Str.length; i++){
        if(i>=start && i<end){
            newString += Str[i];
        }
    }
    return newString;
}

console.log(Slice("Hellothis is Shubham", 2, 7));