let num = [1,4,5,2,6,7,10];
let max = 0;
for(let i=0; i<num.length; i++){
    if(num[i] > max){
        max = num[i];
    }
}

console.log(max);