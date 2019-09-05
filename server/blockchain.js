const sha256 = require('sha256');
const d = new Date();
const register_date = "";

class Block {
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

const createGenesisBlock = register_date => new Block(0, d.getTime(register_date), 'Genesis Block', '0');
console.log("register date: " + register_date + " timestamp: " + d.getTime(register_date));

const nextBlock = (lastBlock, data) =>
    new Block(lastBlock.index + 1, d.getTime(register_date), data, lastBlock.thisHash);

const Blockchain = register_date => {
        const blockchain = [createGenesisBlock(register_date)];
        let previousBlock = blockchain[0];
        const blockToAdd = nextBlock(previousBlock, `This is block #${register_date}`);
        blockchain.push(blockToAdd);
        previousBlock = blockToAdd;
        console.log(blockchain);
        return blockchain;
      };
module.exports=Blockchain;
     // const lengthToCreate = 20;
     // createBlockchain(lengthToCreate);