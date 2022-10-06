const { Telegraf } = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const data = require("./data.json");
const { Week } = require('./src/Week.js')

const week = new Week({week: data.week, timeTable: data.timeTable})

bot.start((ctx) => ctx.reply('Ну здрасьте. Я умею отмечать всех в этой группе :)'));

bot.help((ctx) => ctx.reply(
  `
/start - запустить бота
/help - помощь
/all - отметить всех участников чата
   `
));

bot.command("all", async (ctx) => {
  await getUsernamesById(ctx, data.members).then(usernames => ctx.reply(usernames.join(' '), {parse_mode: 'MarkdownV2'}));
})

bot.command("today", async (ctx) => {
  await ctx.reply(week.getToday(), {parse_mode: 'HTML'});
});

bot.command("tomorrow", async (ctx) => {
  await ctx.reply(week.getTomorrow(), {parse_mode: 'HTML'});
});

bot.command('get_day', async (ctx) => {
  day = ctx.message.text.replace('/get_day ','')
  await ctx.reply(week.getDay(day), {parse_mode: 'HTML'})
})

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));