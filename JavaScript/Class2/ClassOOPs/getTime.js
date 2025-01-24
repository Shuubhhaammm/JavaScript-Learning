


function calculate () {
    let a = 0;
    for(let i=0; i<100000000; i++){
        a=a+i;
    }
    return a;
}

const x = new Date();
const before = x.getTime();
calculate();

const y = new Date();
const after = y.getTime();

console.log("time took to execute:", after-before);