function debounce(fn, delay){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn()
        }, delay)
    }
    
}

function throttle(fn, delay){
    let wait = false;
    return function (...args) {
        if(!wait){
            fn(...args)
            wait = true;
            setTimeout(()=>{
                fn(...args)
                wait = false;
            }, delay)
        }
    }
}
