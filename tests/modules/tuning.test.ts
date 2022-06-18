import assert from "assert";
import { tuning } from "../../lib";

describe.only("Creating tunings tests", () => {
    it("should 6 string E standard", () => {
        const response = tuning({ tuning: "standard" });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "e"]);
    });

    it("should 3 string E standard", () => {
        const response = tuning({ tuning: "standard", root: "g", strings: 3 });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["e", "b", "g"]);
    });

    it("should 7 string B standard", () => {
        const response = tuning({ tuning: "standard", root: "b", strings: 7 });

        assert.ok(response.length === 7);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "e", "b"]);
    });

    it("should 8 string G standard", () => {
        const response = tuning({ tuning: "standard", root: "g", strings: 8 });

        assert.ok(response.length === 8);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "e", "b", "g"]);
    });

    it("should 4 string C open", () => {
        const response = tuning({ tuning: "open", strings: 4 });

        assert.ok(response.length === 4);
        assert.deepEqual(response, ["e", "g", "c", "g"]);
    });

    it("should 6 string D open", () => {
        const response = tuning({ tuning: "open", root: "d" });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["fis", "a", "d", "a", "d", "a"]);
    });

    it("should 6 string A open (through octave)", () => {
        const response = tuning({ tuning: "open", root: "a" });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["cis", "e", "a", "e", "a", "e"]);
    });

    it("should 8 string C open", () => {
        const response = tuning({ tuning: "open", strings: 8 });

        assert.ok(response.length === 8);
        assert.deepEqual(response, ["e", "g", "c", "g", "c", "g", "c", "g"]);
    });

    it("should 6 string D drop", () => {
        const response = tuning({ tuning: "drop", root: "d" });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "d"]);
    });

    it("should 7 string cis drop", () => {
        const response = tuning({
            root: "cis",
            tuning: "drop",
            strings: 7,
        });

        assert.ok(response.length === 7);
        assert.deepEqual(response, [
            "gis",
            "dis",
            "b",
            "fis",
            "cis",
            "gis",
            "cis",
        ]);
    });
});
