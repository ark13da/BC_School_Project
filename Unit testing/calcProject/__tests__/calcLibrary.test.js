'use strict';

const library = require('../calcLibrary');

describe('test sum with int', () => {
    test('testing 1+1=2', ()=> {
        expect(library.sum(1, 1)).toBe(2);
    })
})