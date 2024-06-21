const authorSearch = document.getElementById('authorSearch');
let currentValue;

let card = document.getElementById('1');
let styleCard = window.getComputedStyle(card);
let width = styleCard.getPropertyValue('width');
console.log(width);

authorSearch.addEventListener('keyup', e => {

    currentValue = e.target.value.toLowerCase();

    let landScapes = document.querySelectorAll('a.grid-item');

  
    landScapes.forEach(landScape => {

        if (landScape.dataset.caption.toLowerCase().includes(currentValue)){

            landScape.style.display = "block";

            document.getElementById('gallery').style.gridTemplateColumns = `repeat(auto-fit, minmax(200px, ${width}))`;

        }else{

            landScape.style.display = "none";

        }
    })

});




// let prova = document.querySelector('.gallery');    

// console.log(typeof prova);

// prova.style.gridTemplateColumns = "500px";

