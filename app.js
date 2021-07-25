'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

console.log(leftImageElement, middleImageElement, rightImageElement);

let maxAttempts = 10;
let userAttemptsCounter = 0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;


function FavouriteThings(name, src) {
    this.name = name;
    this.sourse = src;
    this.votes = 0;
    this.shown = 0;
    favourites.push(this);
}
let favourites = [];

console.log(favourites);

new FavouriteThings('bag', 'img/bag.jpg');
new FavouriteThings('banana', 'img/banana.jpg');
new FavouriteThings('bathroom', 'img/bathroom.jpg');
new FavouriteThings('boots', 'img/boots.jpg');
new FavouriteThings('breakfast', 'img/breakfast.jpg');
new FavouriteThings('bubblegum', 'img/bubblegum.jpg');
new FavouriteThings('chair', 'img/chair.jpg');
new FavouriteThings('cthulhu', 'img/cthulhu.jpg');

new FavouriteThings('dog-duck', 'img/dog-duck.jpg');
new FavouriteThings('dragon', 'img/dragon.jpg');

new FavouriteThings('pen', 'img/pen.jpg');
new FavouriteThings('pet-sweep', 'img/pet-sweep.jpg');
new FavouriteThings('scissors', 'img/scissors.jpg');
new FavouriteThings('shark', 'img/shark.jpg');
new FavouriteThings('sweep', 'img/sweep.png');
new FavouriteThings('tauntaun', 'img/tauntaun.jpg');
new FavouriteThings('unicorn', 'img/unicorn.jpg');
new FavouriteThings('water-can', 'img/water-can.jpg');
new FavouriteThings('wine-glass', 'img/wine-glass.jpg');

function getRandomIndex() {
    return Math.floor(Math.random() * favourites.length);
}

console.log(getRandomIndex());

function renderThreeImages() {
    leftImageIndex = getRandomIndex();
    middleImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();

    while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex) {
        rightImageIndex = getRandomIndex();
        middleImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();
    }


    leftImageElement.src = favourites[leftImageIndex].sourse;
    middleImageElement.src = favourites[middleImageIndex].sourse;
    rightImageElement.src = favourites[rightImageIndex].sourse;
    favourites[leftImageIndex].shown++;
    favourites[middleImageIndex].shown++;
    favourites[rightImageIndex].shown++;

    leftImageElement.name = favourites[leftImageIndex].name;
    middleImageElement.name = favourites[middleImageIndex].name;
    rightImageElement.name = favourites[rightImageIndex].name;
    // console.log(favourites[leftImageIndex].name);
}

renderThreeImages();
let button;

let imagesDiv = document.getElementById('images-div');
imagesDiv.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    console.log(event.target.id);
    userAttemptsCounter++;

    if (userAttemptsCounter <= maxAttempts) {

        if (event.target.id === 'left-image') {
            favourites[leftImageIndex].votes++;

            console.log(favourites[leftImageIndex]);
        }
        else if (event.target.id === 'middle-image') {
            favourites[middleImageIndex].votes++;

            console.log(favourites[middleImageIndex]);
        }
        else if (event.target.id === 'right-image') {
            favourites[rightImageIndex].votes++;

            console.log(favourites[rightImageIndex]);

        }

        renderThreeImages();
    } else {
        imagesDiv.removeEventListener('click', handleUserClick);
         button = document.createElement('button');
            console.log(button);
            let div = document.getElementById('parent');
            console.log(div);

            div.appendChild(button);
            console.log(div);
            button.textContent = 'show result';

            button.addEventListener('click',buttonResult);

       
        
    }
    function buttonResult() {
        
        let list = document.getElementById('results-list');
        for (let i = 0; i < favourites.length; i++) {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            // listItem.textContent=``

            listItem.textContent=`${favourites[i].name} has ${favourites[i].votes} votes and it is shown ${favourites[i].shown}` 
        }
    }


}


// let button=document.createElement('button');
//     console.log(button);
//     let div =document.getElementById('parent');
//     console.log(div);

//     div.appendChild(button);
//     console.log(div);
//     button.textContent='show result';


