const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers');

const CarModel = require("../../app/models/car.js");

describe('test properties on model', () => {
    const Model = CarModel(sequelize, dataTypes);
    const instance = new Model;

    checkModelName(Model)('Car');

    context('check properties', () => {
        ['name', 'price', 'size', 'image', 'isCurrentlyRented'].forEach(checkPropertyExists(instance));
    });
});
