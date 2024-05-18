const commands = [
  {
    name: "#time",
    description: "The current time.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#ping",
    description: "Command to check if the bot is online.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#test",
    description: "Just tests the bot or something.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#version",
    description: "The current version of the bot.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#help | #commands",
    description: "This website.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#following [username]",
    description: "See who someone is following.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#vips",
    description: "List of all VIPs in the channel", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#mods",
    description: "List of all mods in the channel.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#founders",
    description: "List of all founders in the channel.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#echo [message]",
    description: "Repeats your message.", // Translated from German to English
    category: "Everyone (Mod can add ? or ! at the beginning)",
  },
  {
    name: "#color",
    description: "Shows your chat color as HEX code.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#fill [Emote]",
    description: "Fills the chat with Emotes.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#random",
    description: "A random number from 0-100.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#afk [message]",
    description: "You go afk. You can specify a message why you are gone or not. When you come back, the bot sends a message how long you were gone.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#gn [message]",
    description: "You go to sleep. You can specify a message or not. When you come back, the bot sends a message how long you slept.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#isafk [User]",
    description: "See if a specific chatter is AFK or asleep.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#spam [number] [message]",
    description: "Sends your message multiple times.", // Translated from German to English
    category: "Mod",
  },
  {
    name: "#chatting [User] [Channel]",
    description: "You see how many messages a user has written in a channel.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#cock",
    description: "Your cock size.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#glitch",
    description: "Glitches your message. (Only works in Chatterino.)", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#prefix",
    description: "Changes the prefix of the bot. Default: #", // Translated from German to English
    category: "Mod",
  },
  {
    name: "#restart",
    description: "Restarts the bot.", // Translated from German to English
    category: "Owner",
  },
  {
    name: "#stop",
    description: "Stops the bot.", // Translated from German to English
    category: "Owner",
  },
  {
    name: "#channels",
    description: "All channels the bot is active in.", // Translated from German to English
    category: "Owner",
  },
    {
    name: "#average",
    description: "The average viewers of the channel in the last 30 days.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#streamage",
    description: "How long the channel has been streaming.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#maxviewers",
    description: "The viewer record of the channel.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#followers",
    description: "How many followers the channel has.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#streams | #streak",
    description: "twitchtracker.com/[channel]/streams", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#bedgis",
    description: "You will be assigned a random number between 0 and 1000 Bedgi's. Then you have to wait an hour before you can use the command again.", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#gamba [number / all]",
    description: "Gambling!", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#math [task]",
    description: "Solves a math problem", // Translated from German to English
    category: "Everyone",
  },
  {
    name: "#chatis",
    description: "Generates a chat overlay", // Translated from German to English
    category: "",
  },
  {
    name: "#addchannel",
    description: "Adds the bot to a channel.", // Translated from German to English
    category: "Owner",
  },
  {
    name: "#rainbow",
    description: "", // Translated from German to English
    category: "Mod",
  },
  {
    name: "#user [User]",
    description: "Information about a user.", // Translated from German to English
    category: "Everyone",
  },
];


const commandList = document.getElementById("commands");
const searchInput = document.getElementById("search-input");

function renderCommands(filteredCommands) {
    commandList.innerHTML = "";
    if (!filteredCommands || filteredCommands.length === 0) {
        commandList.innerHTML = "<p>No results found.</p>";
    } else {
        filteredCommands.forEach((command) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<h3>${command.name}</h3><p>${command.description}</p>`;
            if (command.category) {
                const categorySpan = document.createElement("span");
                categorySpan.classList.add("category");
                categorySpan.textContent = `${command.category}`;
                listItem.appendChild(categorySpan);
            }
            commandList.appendChild(listItem);
        });
    }
}

renderCommands(commands); // Initial render without filtering

searchInput.addEventListener("keyup", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredCommands = commands.filter((command) =>
        command.name.toLowerCase().includes(searchTerm) ||
        command.description.toLowerCase().includes(searchTerm)
    );
    renderCommands(filteredCommands);
});





function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}



