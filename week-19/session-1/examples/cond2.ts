type IsString1<T> = T extends string ? "yes" : "no" //compiletime check

// string extends string = true result become yes 
// number extends string = false result become no 

function checkType<T>(value:T):IsString1<T> {
    if (typeof value === "string"){
        return "yes" as IsString1<T>
    }
    return "no" as IsString1<T>
}

const a1 = checkType("hello"); // value will be yes
const b1 = checkType(123); // value will be no

console.log(a1) //yes
console.log(b1) //no