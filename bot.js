import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
const fs = require('fs');

dotenv.config()
const token = process.env.TELEGRAM_BOT_TOKEN
const bot = new TelegramBot(token, { polling: true })
const videoPath = './DogeAptos.mp4';

bot.on('message', (message) => {
  const chatId = message.chat.id;
  const video = fs.readFileSync(videoPath);
  bot.sendVideo(chatId, video, {
    caption:"Doge Aptos Buy!"
  });
});


if(bot.isPolling()) {
  await bot.stopPolling();
}
await bot.startPolling();