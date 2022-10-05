const { Telegraf } = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const data = require("./data.json");
const { getUsernamesById, getToday, parseDay, getTyumenDate } = require('./src/utils.js')

bot.start((ctx) => ctx.reply('Ну здрасьте. Я умею отмечать всех в этой группе :)'));

bot.help((ctx) => ctx.reply(
  `
/start - запустить бота
/help - помощь
/all - отметить всех участников чата
   `
));

bot.command("all", (ctx) => {
  getUsernamesById(ctx, data.members).then(usernames => ctx.reply(usernames.join(' '), {parse_mode: 'MarkdownV2'}));
})

bot.command("today", (ctx) => {
  ctx.reply(
    'Итак, рассписание на сегодня:\n\n' +
    parseDay(getToday(getTyumenDate().getDay(), data.week, data.timeTable)), {parse_mode: 'HTML'}
    )
})

bot.command("tomorrow", (ctx) => {
  const tyumenDay = getTyumenDate().getDay()
  ctx.reply(
    'Итак, рассписание на завтра:\n\n' +
    parseDay(getToday(tyumenDay == 6 ? 0 : tyumenDay + 1, data.week, data.timeTable)), {parse_mode: 'HTML'}
    )
})

// bot.onText(/\/get_day (.+)/, (ctx) => {

// })

// bot.command("bull_dimon", (ctx) => {
//   ctx.sendSticker('CAACAgEAAxkBAAEF92ljOBOqhWN5vbHdpU8UwwPKJNnoXwACrwEAAsDr6UcSJTT8iVPXaCoE').then(() => ctx.reply('@y0urn3eon'))
// })

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));