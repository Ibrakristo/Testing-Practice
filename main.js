function capitalize(str){
    if(!typeof str == "string") return;
    return str.charAt(0).toUpperCase() + str.substring(1,str.length);

}

function reverse(str){
    if(!typeof str == "string") return;
    let rstr = "";
    for(let i = 0 ; i<str.length;i++){
        rstr += str.charAt(str.length-1-i);
    }
    return rstr;
}

let calculator = {
    add(x,y){
        return x+y;
    },
    subtract(x,y){
        return x-y;
    },
    divide(x,y){
        return x/y;
    },
    multiply(x,y){
        return x*y;
    },
}
function caesarCipher(str,shift){
    let cstr = "";
    for(let i = 0 ; i<str.length;i++){
        if((str.charCodeAt(i)+shift) >=97 && (str.charCodeAt(i)+shift)<=122)
            cstr += String.fromCharCode(str.charCodeAt(i)+shift);
        else if(str.charCodeAt(i) + shift > 122){
            cstr += String.fromCharCode((str.charCodeAt(i)+shift)%123 + 97);
        }
        else cstr += str.charAt(i);
    }
    return cstr;
}
function analyzeArray(arr){
    let average = 0;
    for(let num of arr){
        average += num;
    }
    average /=arr.length;
    let min = arr[0];
    let max = arr[0];
    for(let num of arr){
        if(min>num){
            min = num;
        }
        if(max<num){
            max = num;
        }
    }
    let length = arr.length;

return{
    average,
    min,
    max,
    length,
}
}
module.exports = {
    capitalize,
    reverse,
    calculator,
    caesarCipher,
    analyzeArray,
};