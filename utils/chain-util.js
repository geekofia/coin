const EC = require('elliptic').ec;
const uuidV1 = require('uuid/v1');
const ec = new EC('secp256k1');
// use sha-256 for generating hash
const SHA256 = require('crypto-js/sha256');

/**
 * secp256k1
 * 
 * s: standard of
 * e: efficient
 * c: cryptography
 * p: prime number (which elliptic uses)
 * 256: prime number is 256 bits(32 bytes) long
 * k: Neal Koblitz, Professor of mathematics at the University of Washington
 * 1: first implementation
 */

class ChainUtil {
    // generates the keypair for a wallet
    static genKeyPair() {
        return ec.genKeyPair();
    }

    // generates unique transaction id
    static id() {
        return uuidV1();
    }

    // generates sha256 hash of data
    static hash(data){
        return SHA256(JSON.stringify(data)).toString();
    }
}

module.exports = ChainUtil;