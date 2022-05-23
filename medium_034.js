// Encuentre el valor de mA[2]

function mystery(arr, W){
    let mS = [];
    let marr = [];
    for (let i of arr){
        if (marr.length < W)
        marr.push(i)
        else{
            let S = 0;
            for (j of marr)
                S+=j;
            S /= W;
            mS.push(S)
            marr.shift()
            marr.push(i)
        }
    }
    return mS
}
let arr = [2,4,6,8,10,12,14];

let mA = mystery(arr, 3);

/* R/. 8. 
                                                            */
console.log(mA) 

