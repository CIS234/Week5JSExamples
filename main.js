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
  return painting.valueInDollars >= 10000
}

paintings
  .filter(filterExpensive)
  .map(addArtistListItem);

