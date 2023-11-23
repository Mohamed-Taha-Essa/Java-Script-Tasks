// Array Challenge

let zero =0 ;
let counter =3;

let my =['Ahmed' ,'Mazero' ,'Elham' ,'Osama' ,'Gamal' ,'Ameer'];

// write code here
// [osama ,Elham ,Mazero Ahmed]

console.log(my.slice(zero ,++counter).reverse())

//[Elham ,Mazero]
console.log(my.slice(++zero ,--counter).reverse())

// [Elzero]
console.log(my[--counter].substring(--zero,counter) +my[++zero].substring(counter))

//counter =2  zero =1
//rO
console.log(my[zero][++counter +zero]+my[counter][--zero])
