function reloadPage() {
    location.reload();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100000);
}

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function reloadImage1() {
  document.getElementById('aufjott2').style.opacity = "1"
  var newImageUrl = "https://www.gommehd.net/place/api/image/?lu=undefined?v=" + getRandomNumber();
  document.getElementById('aufjott').style.backgroundImage = "url('" + newImageUrl + "')"
  await Sleep(2000)
  document.getElementById('aufjott2').style.opacity = "0"
  
}

setInterval(reloadPage, 120000);
setInterval(reloadImage1, 30000);