"use strict";

fetch('https://api.myjson.com/bins/d3p74')
  .then(response => response.json())
  .then(data => {
    const paintings = data.data;
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

    const totalValue = paintings.reduce(sumPaintingValues, 0);
    console.log(`Total Value: ${totalValue}`);
  });

/**
 * Adds the painting information to the html element with id of list
 * @param painting a Painting object with {artist, title, valueInDollars}
 * @returns {*} painting object that was passed in
 */
function addArtistListItem(painting) {
  const titleAndArtist = `${painting.title} by ${painting.artist}`;
  const list = document.getElementById("list");
  const artistLi = document.createElement("li");
  const artistText = document.createTextNode(titleAndArtist);
  artistLi.appendChild(artistText);
  list.appendChild(artistLi);
  return painting;
}

/**
 * Filters out paintings less than $2
 * @param painting a Painting object with {artist, title, valueInDollars}
 * @returns {boolean}
 */
function filterExpensive(painting){
  return painting.valueInDollars >= 2
}

/**
 * A reducer for totalling the painting values
 * @param total
 * @param painting
 * @returns {*}
 */
const sumPaintingValues = (total, painting) => total + painting.valueInDollars;


