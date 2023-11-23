document.write(`<h3>Time 05:20 </h3>`)
document.write(`<hr>`)

let myAdmin = ['Ahmed' ,'Osama' ,'Sayed' ,'Stop' ,'Samera'];
let myEmployee =['Anwar','Amgad' ,'Samah' ,'Ameer' ,'Omar' ,'Othman','Amany','Samia'];
let counter =0;
index =1;
for(let i=0; i <myAdmin.length ;i++)
{
    if(myAdmin[i]==='Stop')
    {
        counter =i
        document.write(`<div>We have ${i} Admins</div>`)
        break;
    }
}

document.write("<hr>")

for(let i=0; i <counter;i++)
{
    document.write(`<div>The Admin For Team ${i+1} Is ${myAdmin[i]}`)
    document.write(`<h3> Team members : `)
    
    for(let j=0 ;j<myEmployee.length;j++)
    {
        if(myEmployee[j].startsWith(myAdmin[i][0]))
        {
            document.write(`<p>--${index} ${myEmployee[j]}  </p> `)
            index++;
        }
    }

    document.write(`</div>`)

    document.write("<hr>")


}
















