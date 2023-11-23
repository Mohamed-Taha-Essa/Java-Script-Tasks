document.write( '<h1>from 1:30 ----> 2:00</h1>')
//Concatination 
if(false){
    let a ='we love';
    let b= 'java script'; 
    var ahe  ='taha' ;//apeear in window var 
    document.write(a+' '+b);
    console.log(a+b);
};

// Template litera (templat string) using ecmascript6

if (false){
    let name ='taha';
    let desc ='this is paragraph';
    let markup =`
    <div class ='card'>
        <div class ='child'>
            <h1>${name} </h1>
            <p>${desc}  </p>
        
        </div>
    </div>
    
    `    
    document.write(markup)
}
