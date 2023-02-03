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
  //I add this line for when we search something in input 
  rootElem .innerHTML ="";
  rootElem.textContent = ` You Got ${episodeList.length} Episode(s)`;

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
}
  //input 
  const searchInput =document.getElementById('search-input');
  searchInput.addEventListener("input",(event) => {
     const searchString = event.target.value.toLowerCase();
     const filterEpisode =getAllEpisodes().filter((episode)=>{
      if(episode.summary.toLowerCase().includes(searchString) || episode.name.toLowerCase().includes(searchString)){
      return true;
      }
     return false;
  });
  makePageForEpisodes(filterEpisode);
  //select input













  });

window.onload = setup;