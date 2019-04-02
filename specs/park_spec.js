const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function() {
  let bob;
  let candice;
  let july;
  let park;

  beforeEach(function() {
    bob = new Dinosaur("Tyrannosaurus", "Carnivore", 40);
    candice = new Dinosaur("Edmontosaurus", "Herbivore", 30);
    july = new Dinosaur("Titanosaurus", "Herbivore", 20);
    dinosaurs = [bob, candice];
    park = new Park("Dino World", 15, dinosaurs, 100);
  });

  it("should have a name", function() {
    const actual = park.name;
    assert.strictEqual(actual, "Dino World");
  });

  it("should have a ticket price", function() {
    const actual = park.ticket;
    assert.strictEqual(actual, 15);
  });

  it("should have a collection of dinosaurs", function() {
    const actual = park.dinosaurs;
    assert.strictEqual(actual, dinosaurs);
  });

  it("should be able to add a dinosaur to its collection", function() {
    park.addDino(july);
    const actual = [bob, candice, july];
    assert.deepEqual(park.dinosaurs, actual);
  });

  it("should be able to remove a dinosaur from its collection", function() {
    park.removeDino(bob);
    const actual = [candice];
    assert.deepEqual(park.dinosaurs, actual);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function() {
    expected = park.famousDino();
    assert.deepEqual(expected, bob);
  });

  it("should be able to find all dinosaurs of a particular species", function() {
    const expected = park.findDinoBySpecies("Edmontosaurus");
    const actual = [candice];
    assert.deepEqual(expected, actual);
  });

  it("should be able to remove all dinosaurs of a particular species", function() {
    park.removeDinoBySpecies("Tyrannosaurus");
    const actual = [candice];
    assert.deepEqual(park.dinosaurs, actual);
  });

  it("should be able to count visitors per day", function() {
    const actual = park.visitorsPerDay;
    assert.strictEqual(actual, 100);
  });

  it("should be able to count visitors per year", function() {
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 36500);
  });

  it("should be able to count revenue per year", function() {
    const actual = park.revenuePerYear();
    assert.strictEqual(actual, 547500);
  });

  it("should return diet types and count", function() {
    park.addDino(july);
    const actual = park.dietType();
    const expected = { Herbivore: 2, Carnivore: 1 };
    assert.deepEqual(actual, expected);
  });
});
