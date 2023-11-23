document.write( '<h1>from 1:30 ----> 2:00</h1>')


let a =1_00 ;
let b =2_00.5 ;
let c =1e2;
let d =2.4;


console.log(`${100} ${b} ${c} ${d}`)
// find smallest number and make it int
console.log(Math.trunc(Math.min(a ,b ,c ,d)))
//use a +d one time to get 10000
// console.log(Number((--a  + --d +'').replace('.' ,'0')) -4);
console.log('=================================')


// Convert a to a string, concatenate it with d, and convert the result to a number
let result = (`${a}${d} `);
// let result = (`${a}${d.toString().replace('.', '')}`);

console.log(result.replace(d ,'00')); // Output: 10000

console.log('=================================')

//get int 2 from using 4 method
console.log(Math.floor(d))
console.log(Math.trunc(d))
console.log(parseInt(d))
console.log(Math.round(d))
console.log(d|0)
console.log(~~d)


//use b +d to get 66.67 string    67 number
console.log()






