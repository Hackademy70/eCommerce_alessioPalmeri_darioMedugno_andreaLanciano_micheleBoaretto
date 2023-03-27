// fetch

fetch('./articoli.json').then((response)=> response.json() ).then((data)=>{

    // qui comincia script accordion

    let radioWrapper = document.querySelector('#radioWrapper');
    
    
    function setBrandRadios (){
    
    let brands = data.map((articolo) => articolo.type);
    console.log(brands);


   let uniqueBrands = Array.from( new Set(brands));

   
   uniqueBrands.forEach((type) => {
    let div = document.createElement('div');
    div.classList.add('.form-check');
   });


   } 

    setBrandRadios();



    

    //qui cominciano le card


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
                <h5 class="card-title">${annuncio.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${annuncio.surname}</h6>
                <img src="${annuncio.url}" class="card-img" alt="...">
                </div>
                `;
                cardWrapper.appendChild(div);
            });
    }

    showCard(data);


    let wordInput = document.querySelector('#wordInput');

    function filterByWord(parola){
        let filtered = data.filter( (element) => element.name.toLowerCase().includes(parola.toLowerCase()) );
        showCard(filtered);
    }

    wordInput.addEventListener('input', () => {
        filterByWord(wordInput.value);
    });


});
