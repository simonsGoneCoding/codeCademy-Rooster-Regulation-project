const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //setup
      const expected = "cock-a-doodle-doo!";
      //exercise
      const result = Rooster.announceDawn();
      //verify
      assert.strictEqual(result, expected);
    });
  });
});
