//object.assign
//object.freeze
//generators
//rest operator
//functions , arguments
//regex 

/*let user={
    fname:"john",
    lname:"anderson",
   
}
let records={
    age:22,
    placeOfBirth:"Delhi",
    country:"INDIA"
}*/
//old
const placement={
    company:"XYZ",
    package:"4,00,000",
    country:"IND"

}
Object.freeze(placement)
console.log(Object.isFrozen(placement))

//Object.assign(target,source)
/*let target={}
let clone=Object.assign(target,user)
//let clone=Object.assign({},user)
console.log("clone",clone)
console.log("target",target)
console.log("source",user)
let clone2=Object.assign(user,records)
console.log("user",user)
console.log("records",records)
console.log("clone2",clone2)
let clone3=Object.assign(user,{placeofBirth:records.placeOfBirth})
console.log(clone3)
let clone4=Object.assign(user,user)
console.log(clone4)
let clone5=Object.assign(user,records,placement)
console.log(clone5)
console.log(user)

let arr1=["john",20,"CTS"]
let arr2=["Delhi","IND","XYZ","4,000,000"]
let clone=Object.assign(arr1,arr2)
console.log(clone)
console.log(arr1)
let no1=10 //10
let no2=no1 //10
no2=no2+10 //20
console.log(no1)
console.log(no2)*/
const copy=placement
//

copy.location="BLRE"
placement.pincode="XXXXXX"
console.log("copy",copy)
console.log("placement",placement)








