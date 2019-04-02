const Park = function(name, ticket, dinosaurs, visitorsPerDay) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = dinosaurs;
  this.visitorsPerDay = visitorsPerDay;
};

Park.prototype.visitorsPerYear = function() {
  return this.visitorsPerDay * 365;
};

Park.prototype.revenuePerYear = function() {
  return this.visitorsPerYear() * this.ticket;
};

Park.prototype.addDino = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDino = function(dinosaur) {
  position = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(position, 1);
};

Park.prototype.famousDino = function() {
  let famousDino = this.dinosaurs[0];
  for (let dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > famousDino.guestsAttractedPerDay) {
      famousDino = dinosaur;
    }
  }
  return famousDino;
};

Park.prototype.findDinoBySpecies = function(species) {
  const dinosaurSpecies = [];

  for (let dinosaur of this.dinosaurs) {
    if (dinosaur.species == species) {
      dinosaurSpecies.push(dinosaur);
    }
  }
  return dinosaurSpecies;
};

Park.prototype.removeDinoBySpecies = function(species) {
  let dinos = this.findDinoBySpecies(species);

  for (dinosaur of dinos) {
    this.removeDino(dinosaur);
  }
};

Park.prototype.dietType = function() {
  let diet = {};
  for (dino of this.dinosaurs) {
    if (dino.diet in diet) {
      diet[dino.diet] += 1;
    } else {
      diet[dino.diet] = 1;
    }
  }
  return diet;
};

module.exports = Park;
