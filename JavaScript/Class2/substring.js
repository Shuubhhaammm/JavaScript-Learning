// Basic Code behind Substring

function SubStr(str, start, len){
    let newstr = "";
    for(let i=0; i<str.length; i++){
        if(i >= start && newstr.length <= len){
            newstr += str[i];
        }
    }
    return newstr;
}

console.log(SubStr("HelloThisIsShubhamKumarUrfHIPPO", 5, 10));