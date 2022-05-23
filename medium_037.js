
// Descubra el valor de S

let M = 750;
let S = 0;
for (let i = 0; i < M; i++){ 
    h = Math.floor(i/2)
    if(h > 0)
        S += i % h       
}

// R/. 373
console.log(S)