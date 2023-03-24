// fetch

fetch('./articoli.json').then((response)=> response.json() ).then((data)=>{
    
    


    let radioWrapper = document.querySelector('#radioWrapper');
    
    
    function setBrandRadios (){
    
    let brands = data.map((articolo) => articolo.type);
    console.log(brands);

    /* let uniqueBrands = [];

    
    brands.forEach((type) => {
        
        if(!uniqueBrands.includes(type)){
            uniqueBrands.push(type);
        }
   });
     

   console.log(uniqueBrands); */

   let uniqueBrands = Array.from( new Set(brands));

   
   uniqueBrands.forEach((type) => {
    let div = document.createElement('div');
    div.classList.add('.form-check');
   });


   } 

    setBrandRadios();

    })
