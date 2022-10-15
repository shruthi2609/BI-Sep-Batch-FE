let fruits=["apple","grape","butterfruit","orange","pomo"]
console.log(fruits[0])
/*for(let fruit=0;fruit<5;fruit++){
    console.log(fruits[fruit])
}
for(let i=0;i<5;i++){
    console.log(fruits[i])
}
for(let fruit of fruits){
    console.log(fruit)
}*/

//array methods
//toString()
console.log(fruits.toString())
console.log(fruits.join(" "))

//pop()
//removes the last element from the array
/*console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits)
//push()
console.log(fruits.push("mango"))
console.log(fruits)
//shift()
console.log(fruits.shift())
console.log(fruits)
//unshift()
console.log(fruits.unshift("Mango"))
console.log(fruits)

delete fruits[2]
console.log(fruits)

//splice()
console.log(fruits.splice(2,1))
console.log(fruits)
console.log(fruits.splice(2,0,"Mango","berries"))
console.log(fruits)


//concat()
let vegies=["okra","beans","carrots"]
let healtier_options=fruits.concat(["meat","eggs","fish"],vegies)
let healtier_options=fruits.concat(vegies)
let healtier_options=fruits.concat(["meat","eggs","fish"])
console.log(healtier_options)


//slice()
console.log(fruits.slice(2,4))
console.log(fruits.slice(-4,-1))

//es6 methods - transform methods
let add=(a,b)=>{
    let c=a+b
    console.log(c)
}
add(10,5)
fruits.forEach(
    (element)=>{
        console.log(element)
    }
)

fruits.forEach(
    (item)=>
    {
        console.log(item)
    }
)

//filter()
for(let item of fruits){
    if(item.length>5){
        console.log(item)
    }
console.log(fruits.filter(
    (item)=>
    {
        return item.length>5
    }
    
))
let result=fruits.filter(
    (item)=>item.length>5&&item==="orange" 
)
console.log(result)
*/
let result1=fruits.filter(
    (item)=>item.length>5
)
console.log(result1)
let result=fruits.find(
    (item)=>item.length>5
)
console.log(result)
//indexOf //lastIndexOf()


//map , some , every ,reduce















