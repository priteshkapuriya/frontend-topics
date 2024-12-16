function sum(...args){
    let a = args.reduce((a,b) => a+b, 0)
    return function(...args){
        let b = args.reduce((a,b) => a+b, 0)
        if(args.length > 0){
            return sum(a+b)
        }
        return a;
    }
}

console.log(sum(1)(2,3)(4))
