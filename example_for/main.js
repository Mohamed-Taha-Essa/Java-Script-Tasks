document.write(`<h3>                       Time 05:08 </h3>`)

let product = ['keyboard' ,'mouse' ,'pad' ,'pen' ,'monitor' ,'ipad'];
let color =['red' ,'green' ,'blue'];

let showCount= 5;

for(let i =0 ; i<showCount ;i++) {
    document.write(`<div>`)

    document.write(`<h2>[${i+1}]${product[i]} </h2>`)
    for (let j = 0; j < color.length; j++) {
       document.write(`<p>---${color[j]} </p>`)
        
    }
    document.write(`${color.join(' | ')}`)

    document.write(`</div>`)

}
