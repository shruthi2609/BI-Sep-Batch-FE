const xhr=new XMLHttpRequest()
xhr.open('GET','https://jsonplaceholder.typicode.com/use')
xhr.responseType="json"
xhr.onload=function(){
    console.log(xhr.response)
}
xhr.onerror=function(){
    console.log("error occured")
}
xhr.send()

