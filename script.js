//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  
  makePageForEpisodes(allEpisodes);
}
//function for season number and episode number
const makeSeasonAndEpisodes = function(episode){
//shot form for const season and const number 
const{season,number} = episode;
// const season =episode.season ;
// const number =episode.number ;
const paddedSeason = season.toString().padStart(2,"0");
const paddedEpisodeNumber = number.toString().padStart(2,"0");
return `S${paddedSeason}E${paddedEpisodeNumber}`
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  //the episode's name and season number and episode number
  episodeList.forEach(episode => {
    const p = document.createElement("p");
    p.textContent = `${makeSeasonAndEpisodes(episode)}-name: ${episode.name}`
    rootElem.appendChild(p);

    //the episode's medium-sized image
    const img = document.createElement("img");
    img.src = episode.image.medium;
    rootElem.appendChild(img);

    //the episode's summary text
    // const summaryP = document.createElement("p");
    // summaryP.innerHTML = `${episode.summary}`
    // rootElem.appendChild(summaryP);
    // other way to two line above
    rootElem.innerHTML += episode.summary;
  });

  //input 







}

window.onload = setup;