/** promise object */
/*let fetchUser=new Promise((resolve,reject)=>{
let user
if(user){
    resolve(user)
}
else{
    reject("still its undefined")
}
})
// promise handler 
/*** then
 * catch
 * finally

fetchUser.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)
}).finally(()=>{console.log("this is also executed")})
//console.log("this is a second process") */

/**promise chaining 

let fetchUser=new Promise((resolve,reject)=>{
    let user={
        fname:"peter",
        role:"trainer",
        userid:"peter123"
    }
    if(user){
        resolve(user)
    }
    else{
        reject("still its undefined")
    }
    })
    // promise handler 
    /*** then
     * catch
     * finally
  
    fetchUser.then(
    (result)=>
    {
        console.log("inside first then block")
       if(result.role==="admin"){
        return "you are authorized"
       }
       else{
        return "you are not authorized"
       }
    }
    ).then((result)=>{
        console.log("from second then block")
        console.log(result)
    }).then((result)=>{
        console.log("third then block")
    }).catch((error)=>{console.log(error)
    })  */
/**promise chaining with promise object as return */
let fetchUser=new Promise((resolve,reject)=>{
let user={
    fname:"peter",
    role:"admin",
    userid:"peter123"
}
user?resolve(user):reject("user is not defined , try again")
})

fetchUser.then((result)=>{
    console.log("first then block")
let promiseObj2=new Promise((resolve,reject)=>{
    if(result.role==="admin"){
        resolve(result.userid)
    }
    else{
        reject("you are not authorized")
    }
})
//important - return the promise obj
return promiseObj2
}).then((result)=>{
    console.log("second then block")
    let promiseObj3=new Promise((resolve,reject)=>{
       if(result.userid){
        resolve("Congrats , the userid is defined")
       }
       else{
        reject("please give the userid")
       }
    })
    return promiseObj3
    
}).then((result)=>{
    console.log(result)
}).catch((err)=>console.log("from catch block",err)).finally(()=>console.log("finally"))

