/*jshint esversion: 6 */

const chai = require('chai');

chai.should();

const Nick = require('../zombies.js');

describe('Item', () => {

  item = Nick.item;

  it('should be a class', () => {
    item.should.be.a.function;
  });

  it('should have a name', () => {
    let dildo = new item("Dildo");
    dildo.name.should.equal('Dildo');
  });

});