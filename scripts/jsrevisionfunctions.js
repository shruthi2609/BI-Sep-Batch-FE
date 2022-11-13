/*function printDetails(fname,age,placeOfBirth,country)//formal argument
{
//function definition
return `student name:${fname} age:${age} city:${placeOfBirth} country:${country}`
}

let student1=printDetails("John",23,"Delhi","INDIA")//actual arguments
console.log(student1)
let student2=printDetails("Peter",45,"INDIA")
console.log(student2)*/

/*function* getNumbers(i){
    i=i+2
    yield i
    yield i+1
    return 0
    yield i+2 
}*/
/*let result=getNumbers(10)
/*console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)*/
/*for(let value of result){
    console.log(value)
}
console.log(result.next().done)
/*let result1=getNumbers().next().value
let result2=getNumbers().next().value
let result3=getNumbers().next().value
console.log(result1)
console.log(result2)
console.log(result3)

//pure functions
// 1. it should not modify the input
//2.it should produce same output
function printDetails(dep){
//dep="recevied the input"+dep
return "recevied the input"
}
printDetails("CSE")
printDetails("ECE")*/

/*default arguments
function printDetails(fname,age,cgpa,dep,clg="IIT"){
if(cgpa>=9.0){
    return `the student ${fname} from the department ${dep} is eligible ,clg ${clg}`
}
else{
    return `the student ${fname} from the department ${dep} is not eligible ,clg ${clg}`
}
}
console.log(printDetails("John",23,9.0,"CSE"))
console.log(printDetails("peter",23,9.2,"CSE"))
console.log(printDetails("henry",23,8.0,"CSE"))
console.log(printDetails("mary",23,9.2,"CSE","XYZ"))*/

/*function printDetails(fname,age,cgpa,dep,clg="IIT"){
    if(cgpa>=9.0){
        return `the student ${fname} from the department ${dep} is eligible ,clg ${clg}`
    }
    else{
        return `the student ${fname} from the department ${dep} is not eligible ,clg ${clg}`
    }
    }

function sample(dep,clg,...cgpa){
    console.log(extra)
    console.log("sample")
    //CSE : avegrage cgpa:
}
sample("CSE","XYZ",9.0,9.5,8.0,7.5,6.0,4.5,9.5)*/

let options={
    title:"College Website",
    width:"100px",
    height:"200px"
}
let {title,...dimension}=options
console.log(dimension)

let arr=["john",20,"IIT","CSE"]
let [fname,age,...collegeDetails]=arr
console.log(collegeDetails)





