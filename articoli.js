// fetch

fetch('./articoli.json').then((response)=> response.json() ).then((data)=>{
    
    //Sezione Accordion
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
    //qui finisce accordion


    //SEZIONE CARDS

    let cardWrapper = document.querySelector('#cardWrapper');

    //mostro le cards
    function showCard(array) {
        cardWrapper.innerHTML = '';

            array.forEach((annuncio) => {
                
                let div = document.createElement('div');
                div.classList.add('card', 'my-card');
                div.innerHTML = 
                `
                <div class="card-body d-flex flex-wrap flex-column align-items-center justify-content-between">
                <h5 class="card-title">${annuncio.gender}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${annuncio.price}</h6>
                <img src="${annuncio.url}" class="card-img" alt="...">
                </div>
                `;
                cardWrapper.appendChild(div);
            });
    }

    showCard(data);


    let wordInput = document.querySelector('#wordInput');

    function filterByWord(parola){
        let filtered = data.filter( (element) => element.gender.toLowerCase().includes(parola.toLowerCase()) );
        showCard(filtered);
    }

    wordInput.addEventListener('input', () => {
        filterByWord(wordInput.value);
    });
    //qui finiscono le cards
})
