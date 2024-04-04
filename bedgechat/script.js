var emote_links = {};
async function fetchBadges(){
  const response = await fetch(`badges.json`);
  badges_links = await response.json();
}



function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// Function to extract username from message
function getUserName(message) {
  const parts = message.split('display-name=');
  if (parts.length > 1) {
    return parts[1].split(';')[0].trim();
  }
  return null;
}

// Function to extract username color from message
function getUsernameColor(message) {
  const parts = message.split('color=');
  if (parts.length > 1) {
    return parts[1].split(';')[0].trim();
  }
  return null;
}

function getBadgeNames(message) {
  // Find the part containing badge information
  const badgeInfoMatch = message.match(/badges=(.*?);/);

  if (!badgeInfoMatch) {
    return []; // No badges found
  }

  // Extract the comma-separated badge definitions
  const badgeDefs = badgeInfoMatch[1].split(",");

  // Extract badge names and return as an array
  const badges = badgeDefs.map(badgeDef => badgeDef.split("/")[0]);

  // Extract badge names (remove version numbers)
  const badgeNames = badges.map((badge) => badge.split("/")[0]);
  output = []

  let imgString = "";

  for (let i = 0; i < badgeNames.length; i++) {
    if (badgeNames[i] in badges_links){
      imgString   += `<img class="badge" src="${(badges_links[badgeNames[i]])}">`;
    }
  }

  return imgString
}




// Function to extract message content
function getMessage(message) {
  return message.split(`PRIVMSG #${channel} :`)[1];
}

function cleanup() {
  document.getElementById("chat").innerHTML = document.getElementById("chat").innerHTML.slice(-30000)
}

async function fetch7tv(channel){
  try{
      const response = await fetch(`https://emotes.crippled.dev/v1/channel/${channel}/7tv`);
      const data = await response.json();
      for (let i = 0; i < data.length; i++){
        emote_links[data[i].code] = data[i].urls[1].url
      }
  }
  catch(error){
      console.error(error);
  }
}

function replaceEmotes(message, emoteLinks) {
  // Create an empty string to store the modified message
  let newMessage = "";

  for (const word of message.replace(/^\s+|\s+$/g, '').replace(/<\/?[^>]+(>|$)/g, '').split(" ")) {
    // Check if the word is an emote
    if (emoteLinks.hasOwnProperty(word)) {
      // Use template literal for cleaner image tag creation
      newMessage += `<img class="emote" src="${emoteLinks[word]}">`;
    } else {
      // Add the original word if it's not an emote
      newMessage += word + " ";
    }
  }

  // Trim trailing space from the end (optional)
  return newMessage.trim();

}

const url = new URL(window.location.href); // Get the current URL
const searchParams = url.searchParams; // Get the query string parameters
index = 0

if (searchParams.has('c')) {
  channel = searchParams.get('c').toLowerCase();
} else {
}

const socket = new WebSocket("wss://irc-ws.chat.twitch.tv:443");

socket.addEventListener('open', () =>{
  socket.send(`PASS oauth:leckeier`);
  socket.send(`NICK justinfan65345`);
  socket.send(`JOIN #${channel}`);
  socket.send(`CAP REQ :twitch.tv/commands twitch.tv/membership twitch.tv/tags`);
  document.getElementById("chat").innerHTML = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
  fetch7tv(channel)
})

socket.addEventListener('message', event =>{
  if(event.data.includes("PING")){
    socket.send(`PING`);
  }
  if(event.data.includes("PRIVMSG")){
    const message = getMessage(event.data);
    const username = getUserName(event.data);
    const usernameColor = getUsernameColor(event.data);



    if(username.toLowerCase() == "notle0nard"){
      document.getElementById("chat").innerHTML += (
        `${getBadgeNames(event.data)} <span style="
          color: #8600FF;
              text-shadow:
                0 0 3px rgba(134, 0, 255, 1),
                0 0 10px rgba(134, 0, 255, .9),
                0 0 30px rgba(134, 0, 255, .7);
">${username}<span style="color: white;">: ${replaceEmotes(message, emote_links)}</span></span><br>`
      );
    }
    else{
      document.getElementById("chat").innerHTML += (
        `${getBadgeNames(event.data)} <span style="color: ${usernameColor};">${username}<span style="color: white;">: ${replaceEmotes(message, emote_links)}</span></span><br>`
      );
    }
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
  }
  console.log(event.data)
  console.log(getBadgeNames(event.data))
})

setInterval(cleanup, 5000)
fetchBadges()