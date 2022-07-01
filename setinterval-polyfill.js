//const intervalId = setInterval(()=>{}, delay)
// clearInterval(intervalId)

const ids = {};
let index=0

function customInterval(fn, delay=1000){
  let id = index++;
  function repeat(...args){
    ids[id] = setTimeout(()=>{
     fn();
     repeat(fn, delay)
   }, delay)
  }
  repeat()
  return id
}
function customeClearInterval(id){
  clearTimeout(ids[id]);
}

function log1(){
  console.log('Pritesh')
}
function log2(){
  console.log('Hari')
}
function log3(){
  console.log('Jay')
}

const id1 = customInterval(log1)
const id2 = customInterval(log2)
const id3 = customInterval(log3)
//customeClearInterval(id)
console.log(ids);

setTimeout((id1)=>{
  console.log(id1)
  customeClearInterval(id1)
}, 5000, id1)
setTimeout((id2)=>{
  console.log(id2)
  customeClearInterval(id2)
}, 6000, id2)
setTimeout((id3)=>{
    console.log(id3)
  customeClearInterval(id3)
}, 7000, id3)
