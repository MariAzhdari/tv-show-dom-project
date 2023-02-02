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
    const p = document.createElement("p");
    p.textContent = `S${episode.season}E${episode.number}-name: ${episode.name}`
    rootElem.appendChild(p);
    //the episode's medium-sized image
    const img = document.createElement("img");
    img.src = episode.image.medium;
    rootElem.appendChild(img);
    //the episode's summary text
    const summaryP = document.createElement("p");
    summaryP.innerHTML = `${episode.summary}`
    rootElem.appendChild(summaryP);
  });




}

window.onload = setup;