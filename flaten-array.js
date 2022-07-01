let arr = [1,2,[3,[4],5],6,[7]]

const res = function flattenArray(arr, depth=1){
    let result = [];
    arr.forEach((element)=>{
        if(Array.isArray(element) && depth>0){
            result.push(...flattenArray(element, depth-1)); 
        } else {
             result.push(element)
        }
    })
    return result;
}

console.log(res(arr))
