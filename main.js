"use strict";

const data = {
  metadata:{
    count: 4,
  },
  data: [
    {
      title: "Star Wars Diner",
      artist: "Edward hopper",
      valueInDollars: 1000,
    },
    {
      title: "Scream",
      artist: "Munch",
      valueInDollars: 10000,
    },
    {
      title: "Colors",
      artist: "Toddler",
      valueInDollars: 1000000,
    },
    {
      title: "My Art",
      artist: "Dan Rusk",
      valueInDollars: 1,
    },
  ]
};

const paintings = data.data;

function addArtistListItem(painting) {
  const titleAndArtist = `${painting.title} by ${painting.artist}`;
  const list = document.getElementById("list");
  const artistLi = document.createElement("li");
  const artistText = document.createTextNode(titleAndArtist);
  artistLi.appendChild(artistText);
  list.appendChild(artistLi);
  return painting;
}

function filterExpensive(painting){
  return painting.valueInDollars >= 2
}

paintings
  .filter(filterExpensive)
  .sort((a, b) => {
    if(a.title < b.title){
      return -1;
    } else if (a.title === b.title){
      return 0;
    } else {
      return 1;
    }
  })
  .map(addArtistListItem);

const sumPaintingValues = (total, painting) => total + painting.valueInDollars;
const totalValue = paintings.reduce(sumPaintingValues, 0);
console.log(`Total Value: ${totalValue}`);

