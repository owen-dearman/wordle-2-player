import { MarkedGuess } from "./interfaces";
import {
  scoringPartialMatches,
  removeDirectMatchesFromContention,
  checkForPartialMatch,
} from "./scoringPartialMatches";

describe("suite of tests concerning checkForPartialMatch helper function", () => {
  test("should return false if letter is already direct match", () => {
    expect(checkForPartialMatch(["G", "L", "*", "R", "E"], "A")).toStrictEqual(
      false
    );
    expect(checkForPartialMatch(["G", "*", "A", "R", "E"], "L")).toStrictEqual(
      false
    );
    expect(checkForPartialMatch(["G", "L", "A", "R", "*"], "E")).toStrictEqual(
      false
    );
  });
  test("should return true if letter is a partial match", () => {
    expect(checkForPartialMatch(["T", "O", "I", "L", "S"], "L")).toStrictEqual(
      true
    );
    expect(checkForPartialMatch(["T", "H", "E", "I", "R"], "E")).toStrictEqual(
      true
    );
    expect(checkForPartialMatch(["W", "A", "I", "S", "T"], "A")).toStrictEqual(
      true
    );
  });
});

const guessOf_place: MarkedGuess = {
  guess: "PLACE",
  result: {
    1: { letter: "P", match: "NONE" },
    2: { letter: "L", match: "DIRECT" },
    3: { letter: "A", match: "DIRECT" },
    4: { letter: "C", match: "NONE" },
    5: { letter: "E", match: "DIRECT" },
  },
};
const guessOf_train: MarkedGuess = {
  guess: "TRAIN",
  result: {
    1: { letter: "T", match: "NONE" },
    2: { letter: "R", match: "DIRECT" },
    3: { letter: "A", match: "DIRECT" },
    4: { letter: "I", match: "NONE" },
    5: { letter: "N", match: "DIRECT" },
  },
};

describe("suite of tests concerning removeDirectMatchedFromContention", () => {
  test("should remove letters from accountability that have already been directly matched", () => {
    expect(
      removeDirectMatchesFromContention(
        ["G", "L", "A", "R", "E"],
        guessOf_place
      )
    ).toStrictEqual(["G", "*", "*", "R", "*"]);
    expect(
      removeDirectMatchesFromContention(
        ["C", "H", "A", "I", "N"],
        guessOf_train
      )
    ).toStrictEqual(["C", "H", "*", "*", "*"]);
  });
});

const guessOf_place2: MarkedGuess = {
  guess: "PLACE",
  result: {
    1: { letter: "P", match: "NONE" },
    2: { letter: "L", match: "NONE" },
    3: { letter: "A", match: "DIRECT" },
    4: { letter: "C", match: "NONE" },
    5: { letter: "E", match: "NONE" },
  },
};
const guessOf_scone: MarkedGuess = {
  guess: "SCONE",
  result: {
    1: { letter: "S", match: "NONE" },
    2: { letter: "C", match: "NONE" },
    3: { letter: "O", match: "NONE" },
    4: { letter: "N", match: "NONE" },
    5: { letter: "E", match: "DIRECT" },
  },
};
const guessOf_shape: MarkedGuess = {
  guess: "SHAPE",
  result: {
    1: { letter: "S", match: "NONE" },
    2: { letter: "H", match: "DIRECT" },
    3: { letter: "A", match: "DIRECT" },
    4: { letter: "P", match: "NONE" },
    5: { letter: "E", match: "DIRECT" },
  },
};
const guessOf_phase: MarkedGuess = {
  guess: "PHASE",
  result: {
    1: { letter: "P", match: "DIRECT" },
    2: { letter: "H", match: "DIRECT" },
    3: { letter: "A", match: "DIRECT" },
    4: { letter: "S", match: "DIRECT" },
    5: { letter: "E", match: "DIRECT" },
  },
};

describe("suite of tests for complete scoring of partial matches", () => {
  test("partial matches should be accounted for", () => {
    expect(scoringPartialMatches(guessOf_place2, "SCALP")).toStrictEqual({
      guess: "PLACE",
      result: {
        1: { letter: "P", match: "PARTIAL" },
        2: { letter: "L", match: "PARTIAL" },
        3: { letter: "A", match: "DIRECT" },
        4: { letter: "C", match: "PARTIAL" },
        5: { letter: "E", match: "NONE" },
      },
    });
    expect(scoringPartialMatches(guessOf_scone, "PHASE")).toStrictEqual({
      guess: "SCONE",
      result: {
        1: { letter: "S", match: "PARTIAL" },
        2: { letter: "C", match: "NONE" },
        3: { letter: "O", match: "NONE" },
        4: { letter: "N", match: "NONE" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
    expect(scoringPartialMatches(guessOf_shape, "PHASE")).toStrictEqual({
      guess: "SHAPE",
      result: {
        1: { letter: "S", match: "PARTIAL" },
        2: { letter: "H", match: "DIRECT" },
        3: { letter: "A", match: "DIRECT" },
        4: { letter: "P", match: "PARTIAL" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
    expect(scoringPartialMatches(guessOf_phase, "phase")).toStrictEqual({
      guess: "PHASE",
      result: {
        1: { letter: "P", match: "DIRECT" },
        2: { letter: "H", match: "DIRECT" },
        3: { letter: "A", match: "DIRECT" },
        4: { letter: "S", match: "DIRECT" },
        5: { letter: "E", match: "DIRECT" },
      },
    });
  });
});
