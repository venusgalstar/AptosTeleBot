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
    caption:"🐕🐕 Doge Aptos Buy! 🐕🐕" + 
            "\n\n" + 
            "🟢🟢🟢" +
            "\n\n" +
            "<b>Spent:</b>" + " " + "$7" + "\n" +
            "<b>Got:</b>" + " " + "$7" + "\n" + 
            "<b>Price:</b>" + " " + "$7" + "\n" +
            "<b>Market cap:</b>" + " " + "$7" +
            "\n\n" +
            "<a href=\"https://example.com\">Tx</a>" + " | " + "<a href=\"https://dexscreener.com/aptos/liquidswap-41629\">Chart</a>" + " | " + "<a href=\"https://example.com\">Buyer</a>" + " | " + "<a href=\"https://liquidswap.com/#/\">Buy Now</a>",
    parse_mode: 'HTML'
  });
});


if(bot.isPolling()) {
  await bot.stopPolling();
}
await bot.startPolling();