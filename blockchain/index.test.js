const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
    let bc, bc2;

    // initialize data before all tests
    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    // test for the very first block to be a genesis block
    it('starts with genisis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    // test for addition of a new block
    it('adds a new block', () => {
        const data = 'foo';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });

    /**
     * chain validation
     */

    it('validates a valid chain', () => {
        bc2.addBlock('foo');

        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    /**
     * chain invalidation
     */

    // case 1: corrupted genesis block
    it('invalidates a chain with a corrupt genesis block', () => {
        bc2.chain[0].data = "Bad data";

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    // case 2: tampered block data
    it('invalidates a corrupt chain', () => {
        bc2.addBlock('foo');
        bc2.chain[1].data = "Not foo";

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    });

    /**
     * chain replacement
    */

    // replace the chain with a valid chain
    it('replaces the chain with a valid chain', () => {
        bc2.addBlock('goo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    });

    // don't replace the chain with smaller/equal length chain
    it('does not replace the chain with one of less than or equal to length', () => {
        bc.addBlock('foo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    });
});