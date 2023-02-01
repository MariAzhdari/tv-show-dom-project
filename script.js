//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  //the episode's name
  episodeList.forEach(episode => {
    const p =document.createElement("p");
    p.textContent = `episode name : ${episode.name}`
    rootElem.appendChild(p);
  });
}

window.onload = setup;