function getUsernamesById(ctx, membersId) {
  return new Promise(async function (resolve, reject) {
    const usernames = [];
    for (const id of membersId) {
      await ctx.getChatMember(id).then((member) => {
        if (member.user.username) {
          usernames.push(toEscapeMsg(`@${member.user.username}`));
        } else {
          usernames.push(toEscapeMsg(`[${member.user.first_name}](tg://user?id=${member.user.id})`))
        }
      }).catch((error) => {console.log(error)});
    }
    resolve(usernames);
    // reject(error)
  });
}

function toEscapeMsg(str) {
  return str
      .replace(/_/gi, "\\_")
      .replace(/-/gi, "\\-")
      .replace("~", "\\~")
      .replace(/`/gi, "\\`")
      .replace(/\./g, "\\.");
}

module.exports = { getUsernamesById, getToday, parseDay, getTyumenDate };
