function task(time){
 return new Promise ((resolve, reject) => {
     setTimeout(() => {
         resolve(time)
     }, time)
 })
}

function task1(time){
 return new Promise ((resolve, reject) => {
     setTimeout(() => {
         reject(time)
     }, time)
 })
}

function customPromise(arr){
    let result = [];
    let promiseCompleted = 0;
    return new Promise((resolve, reject) => {
        arr.forEach((p, index)=>{
            p.then((val) => {
                result[index] = val;
                promiseCompleted++;
                if(promiseCompleted === arr.length){
                    resolve(result)
                }
            }).catch((err)=> reject(err))
        })
    })
}

let allResult = customPromise([task(1000), task(2000), task(3000)])
allResult.then((val)=> console.log(val)).catch((err)=> console.log(err))
