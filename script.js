//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  //the episode's name and season number and episode number
  episodeList.forEach(episode => {
    const p =document.createElement("p");
    p.textContent = `S:${episode.season}-E:${episode.number}-name : ${episode.name}`
    rootElem.appendChild(p);
  });
}

window.onload = setup;