const authorSearch = document.getElementById('authorSearch');
//retrieve the input element

let currentValue;
//I define a variable where the values entered by users in text input will go

let counterStyle = 0;
//I define a variable that will record how many elements need to be deleted because they are not part of the search

let card = document.getElementById('1');
//recovery of a grid card

let styleCard = window.getComputedStyle(card);
//etrieve all calculated CSS card styles

let width = styleCard.getPropertyValue('width');
//recover the width of the card 

authorSearch.addEventListener('keyup', e => {

    //I add an event listener to my input element, the control will happen to every character inserted 
    //keyup on what event there is control
    //e is the object that contains all characters entered in the input

    currentValue = e.target.value.toLowerCase();
    //fetches the value of "e" and I insert it in a variable transforming all its contents in lowercase


    let landScapes = document.querySelectorAll('a.grid-item');
    //I create an array by extrapolating all anchor elements with the grid-item class

    let arrayDimension = landScapes.length;
    //Register in a variable the number of items in the array
  
    landScapes.forEach(landScape => {
    // Loop within the array 

        if (landScape.dataset.caption.toLowerCase().includes(currentValue)){
            //If the data-caption attribute of the array element contains the values entered by the user in the input, 
            //the display value of that element will be set to block
            landScape.style.display = "block";

            counterStyle += 0;
            //For each element that is removed the counterStyle increases by one, it will later serve to control the css 


        }else{

            landScape.style.display = "none";
            //If the item does not include the values entered by the user in its data-caption,
            //it will be removed from the display with the display property: none;
            
            counterStyle++;

        }
    })


    if (arrayDimension  > counterStyle && arrayDimension - counterStyle === 1 ||  arrayDimension - counterStyle === 2 ){

        document.getElementById('gallery').style.gridTemplateColumns = `repeat(auto-fit, minmax(200px, ${width}))`;
        counterStyle = 0;

    }else{

        document.getElementById('gallery').style.gridTemplateColumns = `repeat(auto-fit, minmax(200px, 1fr))`;
        counterStyle = 0;
    }

    //For this condition
    //the size of the array must be smaller than the number of elements with display properties: none; (i.e., removed from the display)
    //And the difference between the array size and the number of items removed from the display must be 1
    //This is because if only one element remains in the grid, it assumes a different behavior or that the only element will occupy the whole grid because in the css there is the property 
    //grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) and a "1fr" takes up all the space on the card
    //In order not to make him occupy all the space but only what he had in the beginning we use the value that was recovered before that is "width" that was recovered when the cards occupied all the same space in an orderly way, so that the remaining card occupies the space it occupied before 

});
