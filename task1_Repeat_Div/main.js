let t_Title = 'Elzero' , d_Desc = 'Elzero Web school' ,d_Date= '25/10';

let markup = `
    <div class ='card'>
      <div class = "child" >
          <h2>Hello ${t_Title} </h2>
          <p> ${d_Desc} </p>
          <span>${d_Date} </span>
      </div>
     </div>
`;
document.write(markup.repeat(3));
//document.write(markup)
//document.write(markup).repeat(3)


let g = true ;
let f =30 ;
let e = "20"
let d = "-100"
console.log((++g * -d)* (f- +e)  )