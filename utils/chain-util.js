const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

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
    static genKeyPair(){
        return ec.genKeyPair();
    }
}

module.exports = ChainUtil;