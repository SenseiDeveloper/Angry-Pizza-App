import {loadPizzas} from '../api/publicAPI';

describe('fetch test', () => {
    it("load products performances  test", async () => {
        const mockPromise = Promise.resolve({
            success: true
        });

        jest.spyOn(global, "fetch").mockImplementation(()=> mockPromise);
        await loadPizzas();
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it("load products fetch test", async () => {
        const mockPromise = Promise.resolve({
            success: true
        });

        jest.spyOn(global, "fetch").mockImplementation(()=> mockPromise);
        const data = await loadPizzas();
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(data).toEqual({success: true});
    });
});
