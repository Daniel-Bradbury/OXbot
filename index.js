/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
}) */

console.log("OXbot");
const Eris = require("eris");

var bot = new Eris("BOT_TOKEN");
// Replace BOT_TOKEN with your bot account's token

// INIT
var v1 = "⠀"
var v2 = "⠀"
var v3 = "⠀"
var v4 = "⠀"
var v5 = "⠀"
var v6 = "⠀"
var v7 = "⠀"
var v8 = "⠀"
var v9 = "⠀"
var repeat=0
var game=""

bot.on("ready", () => { // When the bot is ready
  console.log("Ready!"); // Log "Ready!"
  bot.editStatus({ name: 'ox.help' })
});

bot.on("messageCreate", (msg) => {
  function loadGame(x) {
	  game=x
	  x=""
  }
  function unloadGame() {
	  game="Nothing"
  }
  function drawBoard() {
    bot.createMessage(msg.channel.id, "⠀" + v7 + "⠀|⠀" + v8 + "⠀|⠀" + v9 + "⠀\n" + "——+——+—— \n" + "⠀" + v4 + "⠀|⠀" + v5 + "⠀|⠀" + v6 + "⠀⠀⠀You are X. \n" + "——+——+—— \n" + "⠀" + v1 + "⠀|⠀" + v2 + "⠀|⠀" + v3 + "⠀");
	
	/* OLD SYSTEM:
	bot.createMessage(msg.channel.id, "⠀" + v7 + "⠀|⠀" + v8 + "⠀|⠀" + v9 + "⠀");
    bot.createMessage(msg.channel.id, "——+——+——");
    bot.createMessage(msg.channel.id, "⠀" + v4 + "⠀|⠀" + v5 + "⠀|⠀" + v6 + "⠀⠀⠀You are X.");
    bot.createMessage(msg.channel.id, "——+——+——");
    bot.createMessage(msg.channel.id, "⠀" + v1 + "⠀|⠀" + v2 + "⠀|⠀" + v3 + "⠀");
	*/
  }

  function botMove() {
    repeat=1
    while (repeat===1) {
      repeat=0
    omove=Math.round((Math.random()*8)+1);
    if (omove===1) {
      if (v1==="⠀") {
      v1 = "O"
    } else {
      repeat=1
    }}
    if (omove===2) {
      if (v2==="⠀") {
      v2 = "O"
    } else {
      repeat=1
    }}
    if (omove===3) {
      if (v3==="⠀") {
      v3 = "O"
    } else {
      repeat=1
    }}
    if (omove===4) {
      if (v4==="⠀") {
      v4 = "O"
    } else {
      repeat=1
    }}
    if (omove===5) {
      if (v5==="⠀") {
      v5 = "O"
    } else {
      repeat=1
    }}
    if (omove===6) {
      if (v6==="⠀") {
      v6 = "O"
    } else {
      repeat=1
    }}
    if (omove===7) {
      if (v7==="⠀") {
      v7 = "O"
    } else {
      repeat=1
    }}
    if (omove===8) {
      if (v8==="⠀") {
      v8 = "O"
    } else {
      repeat=1
    }}
    if (omove===9) {
      if (v9==="⠀") {
      v9 = "O"
    } else {
      repeat=1
    }}
      if ((v7==="O"&&v4==="O"&&v1==="O")||(v8==="O"&&v5==="O"&&v2==="O")||(v9==="O"&&v6==="O"&&v3==="O")||(v7==="O"&&v8==="O"&&v9==="O")||(v4==="O"&&v5==="O"&&v6==="O")||(v1==="O"&&v2==="O"&&v3==="O")||(v7==="O"&&v5==="O"&&v3==="O")||(v9==="O"&&v5==="O"&&v1==="O")) {
	  repeat=0
      console.log("Loss")
      bot.createMessage(msg.channel.id, "I win!");
      unloadGame();
    }
    if ((v7==="X"&&v4==="X"&&v1==="X")||(v8==="X"&&v5==="X"&&v2==="X")||(v9==="X"&&v6==="X"&&v3==="X")||(v7==="X"&&v8==="X"&&v9==="X")||(v4==="X"&&v5==="X"&&v6==="X")||(v1==="X"&&v2==="X"&&v3==="X")||(v7==="X"&&v5==="X"&&v3==="X")||(v9==="X"&&v5==="X"&&v1==="X")) {
	  repeat=0
      console.log("Win")
      bot.createMessage(msg.channel.id, "You win!");
      unloadGame();
    }
    if (v1!=="⠀"&&v2!=="⠀"&&v3!=="⠀"&&v4!=="⠀"&&v5!=="⠀"&&v6!=="⠀"&&v7!=="⠀"&&v8!=="⠀"&&v9!=="⠀") {
      repeat=0
	  console.log("Draw")
      bot.createMessage(msg.channel.id, "Its a Draw!");
	  unloadGame();
    }
    
  }
  }
    

  if (msg.content === "ox.help") {
    bot.createMessage(msg.channel.id, "https://tinyurl.com/oxbothelp");
  }
  
  
  if (msg.content === "ox.git") {
    bot.createMessage(msg.channel.id, "https://tinyurl.com/oxbotgit");
  }
  if (msg.content === "ox.play ox") {
    v1 = "⠀"
    v2 = "⠀"
    v3 = "⠀"
    v4 = "⠀"
    v5 = "⠀"
    v6 = "⠀"
    v7 = "⠀"
    v8 = "⠀"
    v9 = "⠀"
	loadGame("ox")
	botMove();
	drawBoard();
  }

  // GAMEPLAY :O
  if (game==="ox") {
	  
  if (msg.content === "ox.view") {
  drawBoard()
}
  if (msg.content === "ox.1") {
    if (v1 === "⠀") {
      v1 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.2") {
    if (v2 === "⠀") {
      v2 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.3") {
    if (v3 === "⠀") {
      v3 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.4") {
    if (v4 === "⠀") {
      v4 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.5") {
    if (v5 === "⠀") {
      v5 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.6") {
    if (v6 === "⠀") {
      v6 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.7") {
    if (v7 === "⠀") {
      v7 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.8") {
    if (v8 === "⠀") {
      v8 = "X"
      botMove()
      drawBoard()
    }
  }
  if (msg.content === "ox.9") {
    if (v9 === "⠀") {
      v9 = "X"
      botMove()
      drawBoard()
    }
  }
  
  }
});


bot.connect(); // Get the bot to connect to Discord