const Block = require('../models').Block;
const sequelize = require('sequelize');
const Op = sequelize.Op;
// const Blockchain = require('./../blockchain').Blockchain;
const sha256 = require('sha256');
const d = new Date();
const register_date = "";

class _Block {
    constructor(index, timestamp, data, prevHash){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.thisHash = sha256(
            this.index + this.timestamp + this.data + this.prevHash
            );
    }
}

const createGenesisBlock = register_date => new _Block(0, d.getTime(register_date), 'Genesis Block', '0');
console.log("register date: " + register_date + " timestamp: " + d.getTime(register_date));

const nextBlock = (lastBlock, data) =>
    new _Block(lastBlock.index + 1, d.getTime(register_date), data, lastBlock.thisHash);

const Blockchain = register_date => {
        const blockchain = [createGenesisBlock(register_date)];
        let previousBlock = blockchain[0];
        const blockToAdd = nextBlock(previousBlock, `This is block #${register_date}`);
        blockchain.push(blockToAdd);
        previousBlock = blockToAdd;
//        console.log(blockchain["thisHash"]);
        return blockchain;
      };
console.log(Blockchain("2019-08-31")[1].thisHash);

module.exports = {
  create(req, res){
    console.log("register date is: " + req.body.register_date + " block: " + Blockchain("2019-08-31")[1].thisHash);
    return Block
    .create({
      register_date: req.body.register_date, 
      blockchain: Blockchain(req.body.register_date)[1].thisHash,      
    })
    .then(block => res.status(201).send(block))
    .catch(error => res.status(400).send(error));
  },
  list(res){
    return Block
    .findAll({
      limit: 10000,
    })
    .then(block => res.status(201).send(block))
    .catch(error => res.status(400).send(error));
  },
};