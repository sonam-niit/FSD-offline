type IsString<T> = T extends string ? "yes" : "no"

type A = IsString<string>; 
type B = IsString<number>; 


//Use them

let a:A="yes"
let b:B="no"

console.log(a)
console.log(b)