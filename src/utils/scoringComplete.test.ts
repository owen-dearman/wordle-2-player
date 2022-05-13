import { completeScoring } from "./scoringComplete";

describe("suite of tests concerning completeScoring()", () => {
  test("a guess should be correctly marked against the target word", () => {
    expect(completeScoring("PLACE", "PLACE")).toStrictEqual({
      guess: "PLACE",
      result: {
        1: { letter: "P", match: "DIRECT" },
        2: { letter: "L", match: "DIRECT" },
        3: { letter: "A", match: "DIRECT" },
        4: { letter: "C", match: "DIRECT" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
    expect(completeScoring("FRAME", "PARTY")).toStrictEqual({
      guess: "FRAME",
      result: {
        1: { letter: "F", match: "NONE" },
        2: { letter: "R", match: "PARTIAL" },
        3: { letter: "A", match: "PARTIAL" },
        4: { letter: "M", match: "NONE" },
        5: { letter: "E", match: "NONE" },
      },
    });
    expect(completeScoring("LEVEL", "VALUE")).toStrictEqual({
      guess: "LEVEL",
      result: {
        1: { letter: "L", match: "PARTIAL" },
        2: { letter: "E", match: "PARTIAL" },
        3: { letter: "V", match: "PARTIAL" },
        4: { letter: "E", match: "NONE" },
        5: { letter: "L", match: "NONE" },
      },
    });
    expect(completeScoring("FLEES", "FLIES")).toStrictEqual({
      guess: "FLEES",
      result: {
        1: { letter: "F", match: "DIRECT" },
        2: { letter: "L", match: "DIRECT" },
        3: { letter: "E", match: "NONE" },
        4: { letter: "E", match: "DIRECT" },
        5: { letter: "S", match: "DIRECT" },
      },
    });
    expect(completeScoring("LUCKY", "LEVEL")).toStrictEqual({
      guess: "LUCKY",
      result: {
        1: { letter: "L", match: "DIRECT" },
        2: { letter: "U", match: "NONE" },
        3: { letter: "C", match: "NONE" },
        4: { letter: "K", match: "NONE" },
        5: { letter: "Y", match: "NONE" },
      },
    });
  });
});
