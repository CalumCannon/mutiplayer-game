use snakes_and_ladders;
db.dropDatabase();

db.players.insertMany([ // NEW
  {
    name: "Calum",
    wins: 0,
    losses: 0,
    avatar: "https://img.icons8.com/color/48/000000/guest-male.png"
  },
]);
