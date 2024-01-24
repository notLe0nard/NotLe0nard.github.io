function openTwitch() {
  window.open('https://twitch.tv/NotLe0nard', '_blank');
}
function openIG() {
  window.open('https://www.instagram.com/notle0nard', '_blank');
}
function openYT() {
  window.open('https://www.youtube.com/channel/UCi96eLfDv4zsrwwYAIe1FXA', '_blank');
}
async function openDC() {
  document.getElementById("container").style.opacity = "0";
  document.getElementById("title").style.opacity = "0";
  await sleep(200);
  document.getElementById("container").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("dc_alert").style.display = "flex";
  document.getElementById("dc_alert").style.opacity = "1";
}

async function closeDC() {
  document.getElementById("dc_alert").style.opacity = "0";
  await sleep(200);
  document.getElementById("dc_alert").style.display = "none";
  document.getElementById("container").style.display = "flex";
  document.getElementById("title").style.display = "flex";
  document.getElementById("container").style.opacity = "1";
  document.getElementById("title").style.opacity = "1";
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
    
  }
  if(kok == 6){
    
  }
  
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

kok = 0;
startSite();
