
let a ='Elzero Web School'

//use slice ,charAt  Zero

console.log(a.charAt(2).toUpperCase()+a.slice(3,6) )

//8H
console.log((a.charAt(13).toUpperCase()).repeat(8))

//Return array [Elzero]
console.log(a.split(' ',1))

//Elzero School   use subst
console.log(a.substr(0,7) +a.substr(11) )

//eLZERO WEB SCHOOl 
console.log(a[0].toLowerCase()+a.slice(1,-1).toUpperCase()+ a[a.length-1].toLowerCase())