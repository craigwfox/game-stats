const csvFiles = [
  './data/Games to Play - 2018_Played.csv',
  './data/Games to Play - 2019_Played.csv',
  './data/Games to Play - Played_Legacy.csv'
];

let gamesList = {
  SNES: [],
  N64: [],
  Gamecube: [],
  Wii: [],
  DS: [],
  '3DS': [],
  Switch: [],
  Xbox: [],
  X360: [],
  PS1: [],
  PS2: [],
  PS4: [],
  PC: []
};

// ===------ Add games to the GamesList ------===
const addGames = function addToGamesList(obj) {
  for (let key in obj) {
    if (!obj[key].length < 1) {
      gamesList[key].push(obj[key]);
    }
  }
};

// ===------ Parse CSV and send object to addGames ------===
const parseCSV = function(url) {
  Papa.parse(url, {
    download: true,
    header: true,
    complete: function(results) {
      for (let i = 1; i < results.data.length; i++) {
        addGames(results.data[i]);
      }
    }
  });
};

// ===------ run parser on each csv ------===
csvFiles.forEach(url => {
  parseCSV(url);
});

// ====---------------====
// TESTING BITS
// ====---------------====
setTimeout(() => {
  console.log(gamesList);
}, 100);
