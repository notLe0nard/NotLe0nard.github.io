// script.js

const commands = [
    {
        name: "#time",
        description: "Die aktuelle zeit.",
        category: "Jeder",
    },
    {
        name: "#ping",
        description: "Command um zu schauen ob der Bot online ist.",
        category: "Jeder",
    },    
    {
        name: "#test",
        description: "Joa testet halt den bot oderso.",
        category: "Jeder",
    },   
    {
        name: "#versiom",
        description: "Die aktuelle Version vom Bot.",
        category: "Jeder",
    }, 
    {
        name: "#help | #commands",
        description: "Diese Website.",
        category: "Jeder",
    },    
    {
        name: "#following [username]",
        description: "Schaue nach wem jemand folgt.",
        category: "Jeder",
    },    
    {
        name: "#vips",
        description: "Liste von allen VIPs im channel",
        category: "Jeder",
    },    
    {
        name: "#mods",
        description: "Liste von allen Mods im channel.",
        category: "Jeder",
    },    
    {
        name: "#founders",
        description: "Liste von allen foundern im channel.",
        category: "Jeder",
    },    
    {
        name: "#echo [Nachricht]",
        description: "Wiederhohlt deine nachricht.",
        category: "Jeder (Mod kann z.B. ? oder ! am anfang hinzufügen)",
    },    
    {
        name: "#color",
        description: "Zeigt deine Chat-Farbe als HEX-Code.",
        category: "Jeder",
    },    
    {
        name: "#fill [Emote]",
        description: "Füllt den chat mit Emotes.",
        category: "Jeder",
    },    
    {
        name: "#random",
        description: "Eine zufällige zahl von 0-100.",
        category: "Jeder",
    },    
    {
        name: "#afk [Nachricht]",
        description: "Du gehst afk. Du kannst eine Nachricht angeben wieso du weg gehst oder auch nicht. Wenn du zurück kommst sendet der bot eine nachricht wie lange du weg warst.",
        category: "Jeder",
    },    
    {
        name: "#gn [Nachricht]",
        description: "Du gehst schlafen. Du kannst eine Nachricht angeben oder auch nicht. Wenn du zurück kommst sendet der bot eine nachricht wie lange du geschlafen hast.",
        category: "Jeder",
    },    
    {
        name: "#isafk [User]",
        description: "Schaue nach ob ein bestimmter Chatter gerade AFK oder am schlafen ist.",
        category: "Jeder",
    },    
    {
        name: "#spam [Anzahl] [Nachricht]",
        description: "Sendet deine Nachricht vermehrt.",
        category: "Mod",
    },    
    {
        name: "#chatting [User] [Kanal]",
        description: "Du siehst, wie viele Nachrichten ein user in einem Kanal geschrieben hat.",
        category: "Jeder",
    },
    {
        name: "#kok",
        description: "Deine kok größe.",
        category: "Jeder",
    },
    {
        name: "#glitch",
        description: "Glitcht deine nachricht. (Geht nur in Chatterino.)",
        category: "Jeder",
    },
    {
        name: "#prefix",
        description: "Ändert den Prefix des Bots. Default: #",
        category: "Owner",
    },
    {
        name: "#restart",
        description: "Startet den bot neu.",
        category: "Owner",
    },
    {
        name: "#stop",
        description: "Stopt den bot.",
        category: "Owner",
    },
    {
        name: "#channels",
        description: "Alle channel in dem der Bot aktiv ist.",
        category: "Owner",
    },
    {
        name: "#average",
        description: "Die Average Zuschauer des kanals in den lezten 30 Tagen.",
        category: "Jeder",
    },
    {
        name: "#streamage",
        description: "Wie lange der Kanal schon gestreamt hat.",
        category: "Jeder",
    },
    {
        name: "#maxviewers",
        description: "Der Viewerrekord des Kanals.",
        category: "Jeder",
    },
    {
        name: "#followers",
        description: "Wie viele Follower der Kanal hat.",
        category: "Jeder",
    },
    {
        name: "#streams | #streak",
        description: "twitchtracker.com/[kanal]/streams",
        category: "Jeder",
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
