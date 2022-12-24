function Car(brand,speed){
this.brand=brand
this.speed=speed
}
Car.prototype.status=function(){
    console.log(`${this.brand} is running at ${this.speed} km/h`)
}
Car.prototype.accelerate=function(accleratedSpeed){
this.speed+=accleratedSpeed
}
Car.prototype.break=function(breakSpeed){
    this.speed-=breakSpeed
    }
let obj1=new Car("Ford",0)
obj1.status()
obj1.accelerate(50)
obj1.status()
obj1.accelerate(100)
obj1.accelerate(50)
obj1.break(50)
obj1.status()


