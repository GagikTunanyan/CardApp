import { generateUniqueRandomNumber } from "./";

describe("utils functions testing", () => {
    it("testing generateUniqueRandomNumber function", () => {
        expect(typeof generateUniqueRandomNumber([], 10) === "number").toBeTruthy();
    });

    it("when the returned numeric value exists in the array, the function is called again and returns a unique number", () => {
        const array = [0];
        expect(generateUniqueRandomNumber(array, 1)).toEqual(1);
    })
})