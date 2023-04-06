const { Client } = require("discord.js");
const client = new Client({ intents: [3276799] });
const config = require("./config.json");

const jokes = [
  "Why doesn't Roksie want to do voice chat? Because she's always in the mood to talk, not play.",
  "They say Roksi doesn't like to talk while gaming, but we all know she's just too busy thinking about me.",
  "Why does Roksi never like to do voice chat while gaming? Because she's too busy being horny on main!",
  "Roksi prefers to keep it PG during gaming sessions, but when the game's over, it's time to get naughty!",
  "They say Roksi's too shy to talk while gaming, but I know her dirty little secrets!",
  "Roksi's got a heart of gold, but she's also got a dirty mind that's always in the gutter!",
];

function calculateLove(tag1, tag2) {
  const lovePercentage = Math.floor(Math.random() * 101);
  const loveMessage = `${tag1} and ${tag2} have a love percentage of ${lovePercentage}%. ❤️`;
  return loveMessage;
}

client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "hi") {
    const response = "I don't want vc";
    message.channel.send(response);
  }
  if (message.content.toLowerCase().startsWith("!love")) {
    const args = message.content.toLowerCase().split(" ");
    if (args.length !== 3) {
      const response = "Please use the format `!love <user1> <user2>`.";
      message.channel.send(response);
      return;
    }
    const tag1 = args[1];
    const tag2 = args[2];
    const loveMessage = calculateLove(tag1, tag2);
    message.channel.send(loveMessage);
  }
  if (message.content.toLowerCase() === "roksi") {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    message.channel.send(randomJoke);
  }
});



client.login(config.token);