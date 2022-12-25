function fetchUser(){
    let promiseObj=new Promise((resolve,reject)=>{
        let user={
            fname:"peter"
        }
        if(user){
            resolve(user)
        }
        else{
            reject("still its undefined")
        }
        })
    return promiseObj
}
//fetchUser().then((res)=>console.log(res)).catch((er)=>console.log(er))
//promiseObj

async function checkUser(){
    try{
        let result=await fetchUser()
        console.log("try",result)
    }
    catch(err){
        console.log("catch",err)
    }
    finally{
        console.log("finally")
    }
    
}
checkUser()