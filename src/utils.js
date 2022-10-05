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

function getTyumenDate() {
  const date = new Date();
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours() + 5,
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
}

function getToday(day, week, timeTable) {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  console.log(day)
  return week[days[parseInt(day)]]
}

function getDay(day) {
  
  if (day === 'понедельник') {
    parseDay()
  }

}

function parseDay(day) {
  let parsedDay = ''
  console.log(day)
  for (lesson of day.lessons) {
    parsedDay += `<i><b>${lesson.number}</b></i>  ${lesson.name}\n`
    console.log(lesson)
  }
  return parsedDay
}

// console.log(getToday(1, 2, 3))

module.exports = { getUsernamesById, getToday, parseDay, getTyumenDate };
