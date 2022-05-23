// ¿Que hace esta funcion?

function mystery(a,b){
    let M, mn 
    M = mn = Math.max(a,b);

    while (true){
        if(M%a == 0 && M%b == 0)
            break;
        M += mn;       
    }
    return M;
}

let A = mystery(38,12)

// R/. Halla el minimo comun multiplo entre a y b
console.log(A) 

