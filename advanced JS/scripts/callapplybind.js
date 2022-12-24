/*let obj1={
    fname:"john",
    age:20,
    print:function(){
        console.log(this.fname)
    }
}
obj1.address="Vellore"
let obj2={
    fname:"peter"
}
function printName(){
    console.log(this.fname)
}
let fun1=printName.bind(obj1)
let fun2=printName.bind(obj2)
fun1()
fun2()


function Car(ty,model){
this.ty=ty
this.model=model
}

function Brand(brand,ty,md){
console.log(this)
Car.call(this,ty,md)
this.brand=brand
}

const obj1=new Brand("Maruti","Battery","vdi4")
console.log(obj1.ty,obj1.model,obj1.brand)*/


function Car(ty,model){
    this.ty=ty
    this.model=model
    }
    
    function Brand(brand,ty,md){
    let arr=[ty,md]
    console.log(this)
    Car.apply(this,arr)
    this.brand=brand
    }
    
    const obj1=new Brand("Maruti","Battery","vdi4")
    console.log(obj1.ty,obj1.model,obj1.brand)
    let obj3={
        fname:"john",
        age:20,
        print:function(){
            console.log(this.fname)
        }
    }
    obj3.address="Vellore"
    console.log(obj3)
    



