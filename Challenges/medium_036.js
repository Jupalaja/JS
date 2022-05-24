
// Encuentre el valor de encrypt(E)

function encrypt(str){
    let R = [];
    let L = str.length;
    for (let i = 0; i < L; i++){
        const char = str.charCodeAt(i);
        if (char > 109 && char <= 122)
            R.push(String.fromCharCode(char - 13)); 
        else if (char >= 97 && char <= 109)
            R.push(String.fromCharCode(char + 13));    
    }
    return R.join('');
}

let E = "hello"

// R./ "uryyb" 

console.log(encrypt(E))
