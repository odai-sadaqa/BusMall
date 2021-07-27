'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

console.log(leftImageElement, middleImageElement, rightImageElement);

let maxAttempts = 25;
let userAttemptsCounter = 0;

let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let namesArr = [];

let votesArr = [];

let shownArr = [];




function FavouriteThings(name, src) {
  this.name = name;
  this.sourse = src;
  this.votes = 0;
  this.shown = 0;
  favourites.push(this);
  namesArr.push(this.name);
}
let favourites = [];

console.log(favourites);

console.log(namesArr);
console.log(votesArr);

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
let shownPictures = [];
function renderThreeImages() {
  leftImageIndex = getRandomIndex();
  middleImageIndex = getRandomIndex();
  rightImageIndex = getRandomIndex();

  while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex || shownPictures.includes(leftImageIndex) || shownPictures.includes(rightImageIndex) || shownPictures.includes(middleImageIndex)) {
    middleImageIndex = getRandomIndex();
    leftImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
  }
  shownPictures = [leftImageIndex, rightImageIndex, middleImageIndex];



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

    button.addEventListener('click', buttonResult);



  }

  
  function buttonResult() {

    let list = document.getElementById('results-list');
    for (let i = 0; i < favourites.length; i++) {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      // listItem.textContent=``

      listItem.textContent = `${favourites[i].name} has ${favourites[i].votes} votes and it is shown ${favourites[i].shown}`

    }
    button.removeEventListener('click', buttonResult);
    showChart();

  }


}



function showChart() {

  for (let i = 0; i < favourites.length; i++) {

    votesArr.push(favourites[i].votes);
    shownArr.push(favourites[i].shown);
    console.log(shownArr);
    console.log(favourites[i].votes);
  }

  const data = {
    labels: namesArr,
    datasets: [{
      label: 'Votes',
      data: votesArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
    {
      label: 'Shown',
      data: shownArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }

    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}



// let button=document.createElement('button');
//     console.log(button);
//     let div =document.getElementById('parent');
//     console.log(div);

//     div.appendChild(button);
//     console.log(div);
//     button.textContent='show result';


