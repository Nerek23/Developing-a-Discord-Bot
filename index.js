const { Client } = require("discord.js");
const client = new Client({ intents: [3276799] });
const config = require("./config.json");

const jokes = [
  "Joke 1.",
  "Joke 2.",
  "Joke 3.",
  "Joke 4.",
  "Joke 5.",
  "Joke 6.",
];

function calculateLove(tag1, tag2) {
  const lovePercentage = Math.floor(Math.random() * 101);
  const loveMessage = `${tag1} and ${tag2} have a love percentage of ${lovePercentage}%. ❤️`;
  return loveMessage;
}

client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "asd") {
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
  if (message.content.toLowerCase() === "sadsd") {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    message.channel.send(randomJoke);
  }
});



client.login(config.token);
