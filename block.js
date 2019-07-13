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
        const hash = "todo-hash";
        return new this(timestamp, lastHash, hash, data);
    }
}

module.exports = Block;