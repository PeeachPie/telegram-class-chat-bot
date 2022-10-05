class Week {
  constructor(options) {
    this.week = options.week
    this.timeTable = options.timeTable
    this.enDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    this.ruDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  }

  _getTyumenDate() {
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

  getToday() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    return this.week[this.enDays[parseInt(_getTyumenDate().getDay())]]
  }

  getDay(day) {
  
    if (day === 'понедельник') {
      this._parseDay()
    }
  
  }

  _parseDay(day) {
    let parsedDay = ''
    for (lesson of day.lessons) {
      parsedDay += `<i><b>${lesson.number}</b></i>  ${lesson.name}\n`
    }
    return parsedDay
  }
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

module.exports = { Week };