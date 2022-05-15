import { isTargetWord } from "./isTargetWord";

describe("suite of tests for isTargetMatch.ts", () => {
  test("returns true when correct guess", () => {
    expect(
      isTargetWord([
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "DIRECT" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "DIRECT" },
            4: { letter: "C", match: "DIRECT" },
            5: { letter: "E", match: "DIRECT" },
          },
        },
      ])
    ).toStrictEqual(true);
    expect(
      isTargetWord([
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "NONE" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "DIRECT" },
            4: { letter: "C", match: "DIRECT" },
            5: { letter: "E", match: "DIRECT" },
          },
        },
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "DIRECT" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "PARTIAL" },
            4: { letter: "C", match: "DIRECT" },
            5: { letter: "E", match: "PARTIAL" },
          },
        },
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "DIRECT" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "DIRECT" },
            4: { letter: "C", match: "DIRECT" },
            5: { letter: "E", match: "DIRECT" },
          },
        },
      ])
    ).toStrictEqual(true);
  });
  test("returns false when no correct guess", () => {
    expect(
      isTargetWord([
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "PARTIAL" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "DIRECT" },
            4: { letter: "C", match: "PARTIAL" },
            5: { letter: "E", match: "DIRECT" },
          },
        },
      ])
    ).toStrictEqual(false);
    expect(
      isTargetWord([
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "NONE" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "DIRECT" },
            4: { letter: "C", match: "NONE" },
            5: { letter: "E", match: "DIRECT" },
          },
        },
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "NONE" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "DIRECT" },
            4: { letter: "C", match: "NONE" },
            5: { letter: "E", match: "DIRECT" },
          },
        },
        {
          guess: "PLACE",
          result: {
            1: { letter: "P", match: "NONE" },
            2: { letter: "L", match: "DIRECT" },
            3: { letter: "A", match: "DIRECT" },
            4: { letter: "C", match: "NONE" },
            5: { letter: "E", match: "DIRECT" },
          },
        },
      ])
    ).toStrictEqual(false);
  });
});
