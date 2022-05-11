import { scoringDirectMatches, isDirectMatch } from "./scoringDirectMatches";

describe("suite of tests concerning isDirectMatch() helper function", () => {
  test("isDirectMatch() should return true when letters match", () => {
    expect(isDirectMatch("A", "A")).toStrictEqual(true);
    expect(isDirectMatch("g", "g")).toStrictEqual(true);
    expect(isDirectMatch("z", "Z")).toStrictEqual(true);
  });
  test("isDirectMatch() should return false when letters do not match", () => {
    expect(isDirectMatch("a", "b")).toStrictEqual(false);
    expect(isDirectMatch("b", "c")).toStrictEqual(false);
    expect(isDirectMatch("A", "b")).toStrictEqual(false);
  });
});

describe("suite of tests concerning scoringDirectMatches() function", () => {
  test("exactly identical words should return all direct matches", () => {
    expect(scoringDirectMatches("place", "place")).toStrictEqual({
      guess: "PLACE",
      result: {
        1: { letter: "P", match: "DIRECT" },
        2: { letter: "L", match: "DIRECT" },
        3: { letter: "A", match: "DIRECT" },
        4: { letter: "C", match: "DIRECT" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
    expect(scoringDirectMatches("GECKO", "GECKO")).toStrictEqual({
      guess: "GECKO",
      result: {
        1: { letter: "G", match: "DIRECT" },
        2: { letter: "E", match: "DIRECT" },
        3: { letter: "C", match: "DIRECT" },
        4: { letter: "K", match: "DIRECT" },
        5: { letter: "O", match: "DIRECT" },
      },
    });
    expect(scoringDirectMatches("score", "SCORE")).toStrictEqual({
      guess: "SCORE",
      result: {
        1: { letter: "S", match: "DIRECT" },
        2: { letter: "C", match: "DIRECT" },
        3: { letter: "O", match: "DIRECT" },
        4: { letter: "R", match: "DIRECT" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
  });
  test("words where only a few letters are direct matches should return correct marks", () => {
    expect(scoringDirectMatches("place", "glare")).toStrictEqual({
      guess: "PLACE",
      result: {
        1: { letter: "P", match: "NONE" },
        2: { letter: "L", match: "DIRECT" },
        3: { letter: "A", match: "DIRECT" },
        4: { letter: "C", match: "NONE" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
    expect(scoringDirectMatches("CARVE", "FARCE")).toStrictEqual({
      guess: "CARVE",
      result: {
        1: { letter: "C", match: "NONE" },
        2: { letter: "A", match: "DIRECT" },
        3: { letter: "R", match: "DIRECT" },
        4: { letter: "V", match: "NONE" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
    expect(scoringDirectMatches("SLOPE", "SHIPS")).toStrictEqual({
      guess: "SLOPE",
      result: {
        1: { letter: "S", match: "DIRECT" },
        2: { letter: "L", match: "NONE" },
        3: { letter: "O", match: "NONE" },
        4: { letter: "P", match: "DIRECT" },
        5: { letter: "E", match: "NONE" },
      },
    });
  });
  test("words with no direct matches should return no direct matches", () => {
    expect(scoringDirectMatches("SLIME", "THORN")).toStrictEqual({
      guess: "SLIME",
      result: {
        1: { letter: "S", match: "NONE" },
        2: { letter: "L", match: "NONE" },
        3: { letter: "I", match: "NONE" },
        4: { letter: "M", match: "NONE" },
        5: { letter: "E", match: "NONE" },
      },
    });
    expect(scoringDirectMatches("ABCDE", "FGHIJ")).toStrictEqual({
      guess: "ABCDE",
      result: {
        1: { letter: "A", match: "NONE" },
        2: { letter: "B", match: "NONE" },
        3: { letter: "C", match: "NONE" },
        4: { letter: "D", match: "NONE" },
        5: { letter: "E", match: "NONE" },
      },
    });
  });
  test("empty strings should return empty object in result", () => {
    expect(scoringDirectMatches("", "")).toStrictEqual({
      guess: "",
      result: {},
    });
  });
});
