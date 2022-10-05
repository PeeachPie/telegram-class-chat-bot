const fs = require('fs')
const path = require('path')

week = {
  monday: {
    lessons: [
      {
        name: "Разговоры о важном",
        cabinet: "310",
        number: 1,
      },
      {
        name: "Физика",
        cabinet: "205",
        number: 2,
      },
      {
        name: "Русский язык",
        cabinet: "315",
        number: 3,
      },
      {
        name: "Информатика",
        cabinet: "209, 211",
        number: 4,
      },
      {
        name: "Информатика",
        cabinet: "209, 211",
        number: 5,
      },
      {
        name: "История",
        cabinet: "220",
        number: 6,
      },
      {
        name: "Математика",
        cabinet: "310",
        number: 7,
      },
      {
        name: "Химия",
        cabinet: "307",
        number: 8,
      },
    ],
  },
  tuesday: {
    lessons: [
      {
        name: "Математика",
        cabinet: "310",
        number: 1,
      },
      {
        name: "Литература",
        cabinet: "315",
        number: 2,
      },
      {
        name: "Литература",
        cabinet: "315",
        number: 3,
      },
      {
        name: "Английский",
        cabinet: "216, 317",
        number: 4,
      },
      {
        name: "Физра",
        cabinet: "с/зал",
        number: 5,
      },
      {
        name: "Физика",
        cabinet: "205",
        number: 6,
      },
      {
        name: "География",
        cabinet: "311",
        number: 7,
      },
    ],
  },
  wednesday: {
    lessons: [
      {
        name: "ОБЖ",
        cabinet: "222",
        number: 1,
      },
      {
        name: "Литература",
        cabinet: "315",
        number: 2,
      },
      {
        name: "Математика",
        cabinet: "310",
        number: 3,
      },
      {
        name: "Английский",
        cabinet: "301, 317",
        number: 4,
      },
      {
        name: "Инд. проект",
        cabinet: "105",
        number: 5,
      },
      {
        name: "Физика",
        cabinet: "205",
        number: 6,
      },
      {
        name: "Физика",
        cabinet: "205",
        number: 6,
      },
    ],
  },
  thursday: {
    lessons: [
      {
        name: "Мир и человек (общество)",
        cabinet: "220",
        number: 1,
      },
      {
        name: "История",
        cabinet: "220",
        number: 2,
      },
      {
        name: "Математика",
        cabinet: "310",
        number: 3,
      },
      {
        name: "Математика",
        cabinet: "310",
        number: 4,
      },
      {
        name: "Астрономия",
        cabinet: "105",
        number: 5,
      },
      {
        name: "Английский",
        cabinet: "205, 317",
        number: 6,
      },
    ],
  },
  friday: {
    lessons: [
      {
        name: "Физика",
        cabinet: "205",
        number: 1,
      },
      {
        name: "Русский эл.",
        cabinet: "315",
        number: 2,
      },
      {
        name: "Информатика",
        cabinet: "209, 211",
        number: 3,
      },
      {
        name: "Информатика",
        cabinet: "209, 211",
        number: 4,
      },
      {
        name: "Физра",
        cabinet: "с/зал",
        number: 5,
      },
      {
        name: "Математика",
        cabinet: "310",
        number: 6,
      },
      {
        name: "Математика эл.",
        cabinet: "310",
        number: 7,
      },
    ],
  },
};

// Расписание звонков на понедельник:
//   Кч     8:30 - 9:00
//     1     9:15 - 9:55
//     2 10:15 - 10:55
//     3 11:15 - 11:55
//     4 12:05 - 12:45
//     5 12:55 - 13:35
//     6 13:45 - 14:25
//     7 14:35 - 15:15
//     8 15:25 - 16:05

// Расписание звонков в обычные дни:
//     1     8:30 - 9:15
//     2   9:30 - 10:15
//     3 10:35 - 11:20
//     4 11:40 - 12:25
//     5 12:40 - 13:25
//     6 13:35 - 14:20
//     7 14:30 - 15:15
//     8 15:25 - 16:10


const timeTable = {
  abbreviated: [
    {start: '8:30', end: '9:00'},
    {start: '9:15', end: '9:55'},
    {start: '10:15', end: '10:55'},
    {start: '11:15', end: '11:55'},
    {start: '12:05', end: '12:45'},
    {start: '12:55', end: '13:35'},
    {start: '13:45', end: '14:25'},
    {start: '14:35', end: '15:15'},
    {start: '15:25', end: '16:05'}
  ],
  simple: [
    {start: '8:30', end: '9:15'},
    {start: '9:30', end: '10:15'},
    {start: '10:35', end: '11:20'},
    {start: '11:40', end: '12:25'},
    {start: '12:40', end: '13:25'},
    {start: '13:35', end: '14:20'},
    {start: '14:30', end: '15:15'},
    {start: '14:35', end: '15:15'},
    {start: '15:25', end: '16:10'}
  ]
}

function writeJSON(pathToJSON, object) {
  fs.writeFile(pathToJSON, JSON.stringify(object), (err) => {
    if (err) { throw err; }
  });
}

function addToJSON (pathToJSON, name, object) {
  const absolutePath = path.resolve(__dirname, pathToJSON)

  const data = require(absolutePath);
  data[name] = object;
  
  writeJSON(absolutePath, data)
}

// addToJSON('../data.json', 'week', week)
addToJSON('../data.json', 'timeTable', timeTable)
