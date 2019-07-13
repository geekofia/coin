// use sha-256 for generating hash
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    // To string function
    toString() {
        return `Block -
        Timestamp   : ${this.timestamp}
        Last Hash   : ${this.lastHash.substring(0, 10)}
        Hash        : ${this.hash.substring(0, 10)}
        Data        : ${this.data}
        `
    }

    // "genesis block" - a default dummy block to originate the chain
    static genesis() {
        return new this('Genesis time', '-------', 'f1r57-h45h', []);
    }

    // Mining function
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }

    // generate hash
    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }
}

module.exports = Block;