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
})

socket.addEventListener('message', event =>{
  if(event.data.includes("PING")){
    socket.send(`PING`);
  }
  if(event.data.includes("PRIVMSG")){
    console.log(`${getUserName(event.data)}: ${getMessage(event.data)}`)
    document.getElementById("chat").innerHTML = (document.getElementById("chat").innerHTML + `<span style="color: ${getUsernameColor(event.data)};">${getUserName(event.data)}<span style="color: white;">: ${getMessage(event.data)}</span></span><br>`);
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight + 99999;
  }
  console.log(event.data)
})

setInterval(cleanup, 10000)
