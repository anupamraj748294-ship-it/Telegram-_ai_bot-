const TelegramBot = require('node-telegram-bot-api');

// TOKEN environment variable से आएगा
const token = process.env.BOT_TOKEN;

if (!token) {
  console.log("BOT_TOKEN missing!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, "Hello 👋 Bot is working!");
});
