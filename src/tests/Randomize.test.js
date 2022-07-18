import { randomize } from "helpers/functions";
import { QOUESTION_LIMIT, } from "assets/constants";
import { filmQuiz } from "assets/data/QuestionsList"

test("randomize function should return an array equal to the length of its given range", () => {
    const RandomizedArray = randomize(filmQuiz, QOUESTION_LIMIT)
    expect(RandomizedArray.length).toBe(QOUESTION_LIMIT);
});


test("randomize function with no parameters should return an empty array", () => {
    const RandomizedArray = randomize()
    expect(RandomizedArray.length).toBe(0);
});


test("randomize function with a null parameter should return an empty array", () => {
    const RandomizedArray = randomize(null)
    expect(RandomizedArray.length).toBe(0);
});


test("randomize function with 2 null parameters should return an empty array", () => {
    const RandomizedArray = randomize(null, null)
    expect(RandomizedArray.length).toBe(0);
});


test("randomize function with an undefined parameter should return an empty array", () => {
    const RandomizedArray = randomize(undefined)
    expect(RandomizedArray.length).toBe(0);
});


test("randomize function with 2 undefined parameters should return an empty array", () => {
    const RandomizedArray = randomize(undefined, undefined)
    expect(RandomizedArray.length).toBe(0);
});
