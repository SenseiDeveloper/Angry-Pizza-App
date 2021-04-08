import {mathPrice} from '../helpers/pizza';

describe('math operation tests', ()=> {
    it('test reduce 1,2,3 = 6',  () => {
        const result = mathPrice([{price:1},{price:2},{price:3}]);
        expect(result).toBe(6);
    });

    it('test reduce 1,2,3,4 = 10',  () => {
        const result = mathPrice([{price:1},{price:2},{price:3},{price:4}]);
        expect(result).toBe(10);
    });
});
