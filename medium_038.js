
// Descubra el valor de E

function encrypt(txt, key){
    let out = '';
    let i = 0;
    let J = 0;
    for (i = 0; i < txt.length; i++){
        let ci = txt.charCodeAt(i);
        ci += key.charCodeAt(j);
        ci -= 2*97;
        ci = ci % 26 + 97;
        out += String.fromCharCode(ci);
        j = ++j % key.length;
    }
    return out;    
}

let E = encrypt("hello", "water")

// R/. deepf

console.log(E) 

console.log("m".charCodeAt(0)-97)
