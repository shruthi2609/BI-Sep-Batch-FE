/*function outer(){
    let o1=10
    let o2=20
    console.log("outer",o1,o2)
    function inner1(){
        let i1=100
        let i2=200
        console.log("inner",i1,i2)
        console.log("inner",o1,o2)
        function inner2(){
            let in1=1000
            console.log("inner 2",in1,i1,i2,o1,o2)
        }
        inner2()
    }
    //console.log("outer",i1,i2) -> wrong
    inner1()
}
outer()
let outer=()=>{
    let o1=10
    let o2=20
    console.log("outer",o1,o2)
    let inner1=()=>{
        let i1=100
        let i2=200
        console.log("inner",i1,i2)
        console.log("inner",o1,o2)
    }
    return inner1;
    
}
let outside=outer()
outside()*/


