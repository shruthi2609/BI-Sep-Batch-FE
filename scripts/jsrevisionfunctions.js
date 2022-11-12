/*function printDetails(fname,age,placeOfBirth,country)//formal argument
{
//function definition
return `student name:${fname} age:${age} city:${placeOfBirth} country:${country}`
}

let student1=printDetails("John",23,"Delhi","INDIA")//actual arguments
console.log(student1)
let student2=printDetails("Peter",45,"INDIA")
console.log(student2)*/

function* getNumbers(i){
    i=i+2
    yield i
    yield i+1
    return 0
    yield i+2
   
    
}
let result=getNumbers(10)
/*console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)*/
for(let value of result){
    console.log(value)
}
console.log(result.next().done)
/*let result1=getNumbers().next().value
let result2=getNumbers().next().value
let result3=getNumbers().next().value
console.log(result1)
console.log(result2)
console.log(result3)*/

