var emote_links = {};

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
      console.log(data.length)
      for (let i = 0; i < data.length; i++){
        console.log(data[i].code)
        console.log(data[i].urls[0].url)
        emote_links[data[i].code] = data[i].urls[1].url
      }
    console.log(emote_links)
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
      newMessage += `<img src="${emoteLinks[word]}">`;
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
  console.log("Value from query string:", channel); // Output: Value from query string: myData
} else {
  console.log("No 'c' parameter found in the query string.");
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
        `<span style="
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
        `<span style="color: ${usernameColor};">${username}<span style="color: white;">: ${replaceEmotes(message, emote_links)}</span></span><br>`
      );
    }
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight + 99999;
  }
  console.log(event.data)
})

setInterval(cleanup, 10000)
