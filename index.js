const { Telegraf } = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const membersId = require("./data.json").members;
const { getUsernamesById } = require('./src/utils.js')

bot.start((ctx) => ctx.reply('Ну здрасьте. Я умею отмечать всех и буллить Димона :)'));

bot.help((ctx) => ctx.reply(
  `
/start - запустить бота
/help - помощь
/all - отметить всех участников чата
/bull_dimon - забуллить димона
   `
));

bot.command("all", (ctx) => {
  getUsernamesById(ctx, membersId).then(usernames => ctx.reply(usernames.join(' '), {parse_mode: 'MarkdownV2'}));
})

bot.command("bull_dimon", (ctx) => {
  ctx.sendSticker('CAACAgEAAxkBAAEF92ljOBOqhWN5vbHdpU8UwwPKJNnoXwACrwEAAsDr6UcSJTT8iVPXaCoE').then(() => ctx.reply('@y0urn3eon'))
})

// bot.command("all2", (ctx) => {
//   membersId.map((id) =>
//     ctx
//       .getChatMember(id)
//       .then((member) => {
//         let user
//         if (member.user.username) {
//           user = `@${member.user.username}`;
//         } else {
//           user = `[${member.user.first_name}](tg://user?id=${member.user.id})`
//         }
//         ctx.reply(user, {parse_mode: "MarkdownV2"})
//       })
//   );
// });


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
