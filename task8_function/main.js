document.write(`<h3>Time 06:08 </h3>`)
document.write(`<hr>`)

function showDetail(...rest)
{
    let res =[]
    for(let i =0 ; i <rest.length ; i++)
    {
        ((typeof rest[i] ==='string') ? 
        res.unshift(`Hello ${rest[i]},`):
        (typeof rest[i]==='number') ? 
        res.splice(1,0, ` your age is ${rest[i]},`):
         (typeof rest[i]==='boolean' && rest[i]==true) ? 
         res.push(` your are available for hire `):
         (typeof rest[i]==='boolean' && rest[i]==false) ? 
         res.push(` you are not available for hire`):null)  
             
    }
    document.write(`<h3> ${res.join('')}</h3>`)
}


showDetail('taha' ,35 ,true)
document.write('<hr>')
showDetail(22,'taha' ,true)

document.write('<hr>')
showDetail(false,'taha' ,22)

document.write('<hr>')
showDetail('taha' ,false ,27)










