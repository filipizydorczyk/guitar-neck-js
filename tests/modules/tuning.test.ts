import assert from "assert";
import { tuning } from "../../lib";

describe("Creating tunings tests", () => {
    it("should 6 string E standard", () => {
        const response = tuning({ tuning: "standard" });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "e"]);
    });

    it("should 7 string B standard", () => {
        const response = tuning({ tuning: "standard", root: "b", strings: 7 });

        assert.ok(response.length === 7);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "e", "b"]);
    });

    it("should 4 string C open", () => {
        const response = tuning({ tuning: "standard", root: "c", strings: 4 });

        assert.ok(response.length === 4);
        assert.deepEqual(response, ["c", "g", "c", "g"]);
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
