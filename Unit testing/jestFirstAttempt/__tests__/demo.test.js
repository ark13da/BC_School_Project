'use strict';

beforeAll(() => {
    console.log('init before all tests');

});

test('this is first test', () => {
    console.log('first test');
})

afterAll(() => {
    console.log('after all tests, cleaning all tests');

})

it('second test with it keyword', () => {
    console.log('test example with it');
})

describe('this is test suit A', () => {
    beforeEach(() => {
        console.log('before each test');
    });
    afterEach(() => {
        console.log("after each test")
    });
    test('first test in group', () => {
        console.log('first test in group A');
    })
    test('2nd test in group A', () => {
        console.log('2nd test in group A');
    })
})

describe('test suit B', () => {
    beforeAll(() => {
        console.log('before all test suit B tests');
    })
    describe('subsuit of B', () => {
        test('first test of subsuit A', () => {
            console.log("first test of subsuit A");
        })
        test('second test of subsuit B', ()=> {
            console.log("second test of subsuit B");
        })
    })

    describe('subsuit b of b', () => {
        beforeEach(() => {
            console.log('before each of subsuit b of b');
        })
        test('first test of subsuit b of b', () => {
            console.log("first test of subsuit b of b");
        })
    })
})

describe('test concat string', () => {
    const concat = (a,b) => {
        return a + b;
        //nromally this would be ref to module?
    }
    test('test two parts', () => {
        expect(concat('one', 3)).toBe('one3');
    })
})

describe("test exception", () => {
  const testFunc = () => {
      throw Error('this is exception');
    //nromally this would be ref to module?
  }
  test("test throw exception", () => {
      expect(() => testFunc()).toThrow('this is exception');
  })
})
