/**
 * arithmetic operators
 * logical operators
 * assignment operators 
 * bitwise operators
 * comparison operators
 * string operator
 * type operator
 * misc operators - ?: , nullish coalescing operator ??
 */

/*let a=10
let b=5
console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)

let c=a+b
console.log(c)

let d=10%3 //% is modulo
console.log(d)

let e=3**2 //exponent operator
console.log(e)

//logical operator && || !


//comparison operator
// < <= > >= == ===


let age_one=20
let age_two=20
console.log(age_one<=age_two)
console.log(10=="10")//only the value
console.log(10==="10") // this going to check both values and DT

//logical operators
// && || !

let a=10
let b=20
let c=5
console.log(!((a>b)&&(a>c)))
console.log((a>b)||(a>c))
console.log(!((a>b)||(a>c)))

let age=19
console.log(!age>18)
let isArrears=true
console.log(!isArrears)*/

//Assignment operators
// += -= *= /= %= **= 
let a=10
let b=20
//a=a+b
a+=b // a is 30
b-=a // 20-30 => -10
console.log(a)
console.log(b)


//string operator
// +
let fname='john06&&'
let age=true
let lname='anderson'
let fullname=fname+lname
let formatted_fullname=fname+" "+lname
console.log(fullname)
console.log(formatted_fullname)
//implicit type conversion 
console.log(fname+age) //string+number =>string
//number+string => string
//number+number =>number
//string+string =>string
//string+anyDT => string

//typeof operator
let isTopper=false
console.log(typeof lname)
console.log(typeof(formatted_fullname))








