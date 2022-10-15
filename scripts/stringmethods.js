/*let fname='john'
let details=["john",34,"Delhi"]
console.log(details[2][0])
console.log(fname[0])

//indexOf()
let msg="Welcome to Javascript Javascript Javascript"
console.log(msg.indexOf("Javascript"))//first occurence

console.log(msg.indexOf("Javascript",12))

console.log(msg.indexOf("Javascript",msg.indexOf("Javascript")+1))//second occurence
let third=msg.indexOf("Javascript",msg.indexOf("Javascript")+1)+1
console.log(msg.indexOf("Javascript",third))

//lastIndexOf()
console.log(msg.lastIndexOf("Javascript"))
console.log(msg.lastIndexOf("Javascript",31))

//search
let find=prompt("enter the word to search")
let ind=msg.search(find)
if(ind===-1){
    alert("the word is not found")
}
else{
    alert(`the word is starting from index : ${ind}`)
}*/

let msg="Welcome to Javascript Javascript Javascript"
//slice
console.log(msg.slice(11))
console.log(msg.slice(0,21))

let newmsg="basics JS JS"
console.log(newmsg.slice(-9,-3))

//substring()
console.log(newmsg.substring(0,6))
console.log(newmsg.substring(-9,-3))//this is not supported

//replace()
console.log(newmsg.replace("JS","Python"))
console.log(newmsg.replace(/JS/g,"Python"))

//replaceAll()
console.log(newmsg.replaceAll("JS","Python"))

//toUpperCase()
console.log(newmsg.toUpperCase())

//toLowerCase()

//concat()
let m1="Hello"
let m2="John"
console.log(m1.concat(" ",m2))

//split
console.log(msg.split(" "))
let m3="Hello,John,Peter,Henry"
console.log(m3.split(","))

