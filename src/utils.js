function getUsernamesById(ctx, membersId) {
  return new Promise(async function (resolve, reject) {
    const usernames = [];
    for (const id of membersId) {
      await ctx.getChatMember(id).then((member) => {
        if (member.user.username) {
          usernames.push(`@${member.user.username}`);
        } else {
          usernames.push(`[${member.user.first_name}](tg://user?id=${member.user.id})`)
        }
      });
    }
    resolve(usernames);
    // reject(error)
  });
}

module.exports = { getUsernamesById }