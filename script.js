function openTwitch() {
  window.open('https://twitch.tv/NotLe0nard', '_blank');
}
function openIG() {
  window.open('https://www.instagram.com/notle0nard', '_blank');
}
function openYT() {
  window.open('https://www.youtube.com/channel/UCi96eLfDv4zsrwwYAIe1FXA', '_blank');
}
function openDC() {
  alert("Discord: @NotLe0nard");
}
async function startSite(){
  await sleep(100);
  document.getElementById("title").style.fontSize = "10vmin";
  await sleep(100);
  document.getElementById("container").style.height = "50%";
  document.getElementById("container").style.width = "50%";
  document.getElementById("container").style.opacity = "1";
  await sleep(100);
  document.getElementById("twitch").style.fontSize = "6vmin";
  await sleep(100);
  document.getElementById("ig").style.fontSize = "6vmin";
  await sleep(100);
  document.getElementById("yt").style.fontSize = "6vmin";
  await sleep(100);
  document.getElementById("dc").style.fontSize = "6vmin";
}

function secret(){
  kok++;
  if(kok == 5){
    window.open('https://kappa.lol/z9nML.odp', '_blank');
  }
  if(kok == 6){
    window.open('https://kappa.lol/sReiX.pptx', '_blank');
  }
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

kok = 0;
startSite();