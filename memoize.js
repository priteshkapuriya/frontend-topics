function memoize(fn){
    let result = {};
    return function(...args){
        let strArgs = JSON.stringify(args)
        if(!result[args]){
            result[args] = fn(...args)
        }
        return result[args]
    }
}


function lotOfProcess(a,b){
    let sum;
    for(let i=0; i<100000000; i++){
        sum = a+b+i;
    }
    return sum;
}

const result = memoize(lotOfProcess)


console.time('first call')
console.log(result(1,2))
console.timeEnd('first call');

console.time('2nd call')
console.log(result(1,2))
console.timeEnd('2nd call');
