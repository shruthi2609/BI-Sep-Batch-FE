function Student(fname,age){
    this.fname=fname
    this.age=age
}
//Student.dep="CSE" not supported
/*Student.displayDetails=function(){
    console.log(this.fname,this.age)
}
Student.prototype.dep="CSE" //is supported*/
Student.prototype.displayDetails=function(){
    console.log(`the student details is ${this.fname} : ${this.age}`)
}
/*function simpleFunction(){
    console.log(`the student details is ${this.fname} : ${this.age}`)
}*/

let obj1=new Student("john",20)
let obj2=new Student("peter",30)
//obj1.simpleFunction()
obj2.displayDetails()


/*const arr=[10,20,30]
console.log(arr)*/

