function mystery2(a,b){
    let M, mn 
    M = mn = Math.max(a,b);

    while (true){
        if(M%a == 0 && M%b == 0)
            break;
        M += mn;       
    }
    return M;
}

let A = mystery2(38,12)

console.log(A) 

