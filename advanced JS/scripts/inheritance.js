class Student{
    constructor(fname,age){
        this.fname=fname
        this.age=age
    }
    displayDetails(){
        console.log(`${this.fname} : ${this.age}`)
    }
}

class Courses extends Student{
    constructor(cname,duration,fn,ag){
        //Student.constructor(fn,ag) ->wrong
        super(fn,ag)//Student.call(this,fn,ag)
        this.cname=cname
        this.duration=duration
    }
}
let obj1=new Courses("FSD","6 months","john",20)
console.log(obj1)

