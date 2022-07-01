let Person1 = {
 name: "Pritesh",
 print: function(arg){console.log(this.name + " " + arg)}
}

let newPerson = {
 name: "Hari"
}

console.log(Person1.print.call(newPerson, 'testorgcall'));
console.log(Person1.print.apply(newPerson, ['testorgapply']));
let newfunc = Person1.print.bind(newPerson);
console.log(newfunc('testorgbind'))

Function.prototype.myBind = function(context){
 //console.log(this, context);
 context.fnRef = this;
 return function(...args){
   context.fnRef(...args)
 }
}

Function.prototype.myCall = function(context, ...args){
 //console.log(this, context);
 context.fnRef = this;
 context.fnRef(...args);
}

Function.prototype.myApply = function(context, args){
 //console.log(this, context);
 context.fnRef = this;
 context.fnRef(...args);
}

Person1.print.myApply(newPerson, ["applytest"])

Person1.print.myCall(newPerson, "calltest")

const test = Person1.print.myBind(newPerson)
test("bindtest")
