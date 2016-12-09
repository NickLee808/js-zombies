/*jshint esversion: 6 */

const chai = require('chai');

chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {

  item=Zombies.item;

  it('should be a class', () => {
    item.should.be.a.function;
  });

  it('should have a name', () => {
    item.should.have.a.name;
  })

});