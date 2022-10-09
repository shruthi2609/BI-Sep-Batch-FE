/*let fname='john'
let details=["john",34,"Delhi"]
console.log(details[2][0])
console.log(fname[0])*/

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
}

//slice
