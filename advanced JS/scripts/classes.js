class Student{
    constructor(fname,age){
        this.fname=fname
        this.age=age
    }
    displayDetails(){
        console.log(`${this.fname} : ${this.age}`)
    }
}
let obj1=new Student("john",20)
console.log(obj1)
obj1.displayDetails()
