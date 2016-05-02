import '../js/line-global.js';

import {
    describe,
    it
} from 'mocha';

import {
    expect
} from 'chai';

describe('line-global', () => {
    it('should represent the current line number', () => {
        expect(__line).to.equal(14);
    });
});
