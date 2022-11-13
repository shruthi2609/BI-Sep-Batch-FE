/*let regex=/hi/gi
let input="Hi Hi john"
console.log(regex.test(input))
console.log(regex.exec(input))
console.log(input.match(/hi/i))*/
/**let re=new RegExp("hello","i")
//let re=new RegExp(/Hello/) wrong
console.log(re.test("Hello"))
 */
//i -> case insensitive
//g -> global flag , last occured index

//let regex=/[bt]ear[.:]/
/*let regex=/[^bt]ear/
let i1="bear"
let i2="tear"
let i3="near"
console.log(regex.test(i1))
console.log(regex.test(i2))
console.log(regex.test(i3))

let regex1=/[a-zA-Z0-9]pple/
// let regex1=/[^0-9]apple/
let i4="Apple"
let i5="7pple"
console.log(regex1.test(i4))
console.log(regex1.test(i5))

// meta characters
// \d -> [0-9]
// \w -> [a-zA-Z0-9_]
// \s -> white space
// \D -> [^0-9]
// \W -> 
// \S -> non white space

//Quantifiers
// + -> 1 or more
// * -> 0 or more
// ? -> either 0 or 1
// ^ ->begining
// $ -> end
// {N} -> ocurence
//{M,N} -> min M and max N
//{N,}-> min N max N+1
// (option1|option2) 

*/
//let regex=/\d*/
// let regex=/\W/
//let regex=/^\w+\s\w+[aeiou]$/
//let i1="_ frui"
/*let regex=/^g+/
let i1="god"
let i2="good"
let regex=/go{2,}d/
let i1='good'
let i2='gooood'
let i3='gooooood'
console.log(regex.test(i1))
console.log(regex.test(i2))
console.log(regex.test(i3))*/
let regex=/(.com|.in)$/
let i="jayasruthi.l@gmail.com"
let j="jayasruthi.l@gmail.in"
console.log(regex.test(i))
console.log(regex.test(j))









