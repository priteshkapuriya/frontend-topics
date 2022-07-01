const compose = (...functions) => (val) => functions.reduceRight((acc, fn) => fn(acc), val)
const pipe = (...functions) => (val) => functions.reduce((acc, fn) => fn(acc), val)

function sum(a){
    console.log("sum")
    return a + 6
}

function subtract(b){
    console.log("sub")
    return b - 6
}

const result = compose(sum, subtract)(5)
const result2 = pipe(sum, subtract)(4)

console.log(result, result2)
