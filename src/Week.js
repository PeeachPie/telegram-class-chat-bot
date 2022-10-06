class Week {
  constructor(options) {
    this.week = options.week
    this.timeTable = options.timeTable
    this.enDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    this.ruDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
    this.ruDaysForms = ['воскресение', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу']
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
    const tyumenDay = this._getTyumenDate().getDay()
    return "Итак, расписание на сегодня:\n\n" +this._parseDay(this.week[this.enDays[tyumenDay]])
  }

  getTomorrow() {
    const tyumenDay = this._getTyumenDate().getDay()
    return "Итак, расписание на завтра:\n\n" + this._parseDay(this.week[this.enDays[tyumenDay == 6 ? 0 : tyumenDay + 1]])
  }

  getDay(day) {
    const id = this.ruDays.indexOf(day)
    const dayForm = this.ruDaysForms[id]
    return `Итак, расписание на ${dayForm}:\n\n` + this._parseDay(this.week[this.enDays[id]])
  }

  _parseDay(day) {
    let parsedDay = ''
    for (let lesson of day.lessons) {
      parsedDay += `<i><b>${lesson.number}</b></i>  ${lesson.name}\n`
    }
    return parsedDay
  }
}

// https://nodejsdev.ru/guide/events/
module.exports = { Week };