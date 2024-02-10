function openTwitch() {
  window.open('https://twitch.tv/Entenfurz1', '_blank');
}

async function HASTDUAUFNACHTARAZGESP() {
  document.documentElement.requestFullscreen()
  document.getElementById("video").style.opacity = "1"
  document.getElementById("video").style.width = "100%"
  document.getElementById("video").style.height = "100%"

  document.getElementById("video").play()
  await sleep(13000);
  document.getElementById("video").style.opacity = "0"
  document.getElementById("video").style.width = "0%"
  document.getElementById("video").style.height = "0%"
}

async function startSite(){
  await sleep(100);
  document.getElementById("main_container").style.opacity = "1";
  await sleep(100);
  document.getElementById("title").style.fontSize = "10vmin";
  await sleep(100);
  document.getElementById("weristentenfurz").style.opacity = "1";
  await sleep(100);
  document.getElementById("weristentenfurz").style.width = "50vmax";
  await sleep(300);
  document.getElementById("weristentenfurz").style.height = "15vmax";
  await sleep(100);
  document.getElementById("HASTDUAUFNACHTARAZGESP").style.width = "10vmax";
  await sleep(100);
  document.getElementById("HASTDUAUFNACHTARAZGESP").style.height = "10vmax";
  await sleep(300);
  document.getElementById("leonBild").style.width = "15vmax";
  await sleep(100);
  document.getElementById("weristentenfurztext").style.fontSize = "1.6vmax";


}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

startSite();
