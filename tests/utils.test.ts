import assert from "assert";
import { GuitarNeck, NeckPosition, fetch, text, tuning } from "../lib";

describe("Utils tests", () => {
    it("should create guitar neck in E standard", () => {
        const neck: GuitarNeck = { tuning: "standard" };
        // am chord
        const positions: NeckPosition[] = [
            {
                freat: 1,
                string: 1,
            },
            {
                freat: 2,
                string: 2,
            },
            {
                freat: 2,
                string: 3,
            },
        ];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 6);
        assert.ok(strings[0] === "E ||---|---|---|---|");
        assert.ok(strings[1] === "B ||-o-|---|---|---|");
        assert.ok(strings[2] === "G ||---|-o-|---|---|");
        assert.ok(strings[3] === "D ||---|-o-|---|---|");
        assert.ok(strings[4] === "A ||---|---|---|---|");
        assert.ok(strings[5] === "E ||---|---|---|---|");
    });
    it("should create guitar neck in D drop tuning", () => {
        const neck: GuitarNeck = { tuning: "drop" };
        // f power chord
        const positions: NeckPosition[] = [
            {
                freat: 3,
                string: 5,
            },
            {
                freat: 3,
                string: 4,
            },
            {
                freat: 3,
                string: 3,
            },
        ];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 6);
        assert.ok(strings[0] === "E ||---|---|---|---|");
        assert.ok(strings[1] === "B ||---|---|---|---|");
        assert.ok(strings[2] === "G ||---|---|---|---|");
        assert.ok(strings[3] === "D ||---|---|-o-|---|");
        assert.ok(strings[4] === "A ||---|---|-o-|---|");
        assert.ok(strings[5] === "D ||---|---|-o-|---|");
    });
    it("should create guitar neck in open C tuning", () => {
        const neck: GuitarNeck = { tuning: "open" };
        // d chord
        const positions: NeckPosition[] = [
            {
                freat: 2,
                string: 0,
            },
            {
                freat: 2,
                string: 1,
            },
            {
                freat: 2,
                string: 2,
            },
            {
                freat: 2,
                string: 3,
            },
            {
                freat: 2,
                string: 4,
            },
            {
                freat: 2,
                string: 5,
            },
        ];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 6);
        assert.ok(strings[0] === "C ||---|-o-|---|---|");
        assert.ok(strings[1] === "G ||---|-o-|---|---|");
        assert.ok(strings[2] === "C ||---|-o-|---|---|");
        assert.ok(strings[3] === "G ||---|-o-|---|---|");
        assert.ok(strings[4] === "C ||---|-o-|---|---|");
        assert.ok(strings[5] === "E ||---|-o-|---|---|");
    });
    it("should create guitar neck in cis drop tuning", () => {
        const neck: GuitarNeck = { tuning: "drop", root: "cis" };
        // d power chord
        const positions: NeckPosition[] = [
            {
                freat: 3,
                string: 5,
            },
            {
                freat: 3,
                string: 4,
            },
            {
                freat: 3,
                string: 3,
            },
        ];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 6);
        assert.ok(strings[0] === "dis ||---|---|---|---|");
        assert.ok(strings[1] === "ais ||---|---|---|---|");
        assert.ok(strings[2] === "fis ||---|---|---|---|");
        assert.ok(strings[3] === "cis ||-o-|---|---|---|");
        assert.ok(strings[4] === "gis ||-o-|---|---|---|");
        assert.ok(strings[5] === "cis ||-o-|---|---|---|");
    });
    it("should create guitar neck with default string number", () => {
        const neck: GuitarNeck = { tuning: "open" };
        const positions: NeckPosition[] = [];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 6);
    });
    it("should create guitar neck with default freats number", () => {
        const neck: GuitarNeck = { tuning: "open" };
        const positions: NeckPosition[] = [];
        const response = text(neck, positions);

        const strings = response.split("\n");
        const stringElements = strings[0].split("|");
        const freats = stringElements.slice(2, stringElements.length - 1);
        assert.ok(freats.length === 4);
    });
    it("should create guitar neck with 7 strings", () => {
        const neck: GuitarNeck = { tuning: "open", strings: 7 };
        const positions: NeckPosition[] = [];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 7);
    });
    it("should create guitar neck with 12 freats", () => {
        const neck: GuitarNeck = { tuning: "open", freats: 12 };
        const positions: NeckPosition[] = [];
        const response = text(neck, positions);

        const strings = response.split("\n");
        const stringElements = strings[0].split("|");
        const freats = stringElements.slice(2, stringElements.length - 1);
        assert.ok(freats.length === 12);
    });
    it("should ignore posiotn when freat is 0", () => {
        const neck: GuitarNeck = { tuning: "open" };
        // am chord
        const positions: NeckPosition[] = [
            {
                freat: 0,
                string: 5,
            },
        ];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 6);
        assert.ok(strings[0] === "E ||---|---|---|---|");
        assert.ok(strings[1] === "B ||---|---|---|---|");
        assert.ok(strings[2] === "G ||---|---|---|---|");
        assert.ok(strings[3] === "D ||---|---|---|---|");
        assert.ok(strings[4] === "A ||---|---|---|---|");
        assert.ok(strings[5] === "E ||---|---|---|---|");
    });

    it("should not create guitar neck with negative strings", () => {
        const neck: GuitarNeck = { tuning: "open", strings: -12 };
        // am chord
        const positions: NeckPosition[] = [
            {
                freat: 0,
                string: 5,
            },
        ];
        const response = text(neck, positions);

        assert.ok(response === "");
    });
    it("should not create guitar neck with negative freats", () => {
        const neck: GuitarNeck = { tuning: "open", freats: -12 };
        // am chord
        const positions: NeckPosition[] = [
            {
                freat: 0,
                string: 5,
            },
        ];
        const response = text(neck, positions);

        assert.ok(response === "");
    });
    it("should not create guitar neck with zero strings", () => {
        const neck: GuitarNeck = { tuning: "open", strings: 0 };
        // am chord
        const positions: NeckPosition[] = [
            {
                freat: 0,
                string: 5,
            },
        ];
        const response = text(neck, positions);

        assert.ok(response === "");
    });
    it("should not create guitar neck with zero freats", () => {
        const neck: GuitarNeck = { tuning: "open", freats: 0 };
        // am chord
        const positions: NeckPosition[] = [
            {
                freat: 0,
                string: 5,
            },
        ];
        const response = text(neck, positions);

        assert.ok(response === "");
    });
    it("should omit positions out of neck range", () => {
        const neck: GuitarNeck = { tuning: "open" };
        // am chord
        const positions: NeckPosition[] = [
            {
                freat: 1,
                string: 1,
            },
            {
                freat: 2,
                string: 2,
            },
            {
                freat: 2,
                string: 3,
            },
            {
                freat: 2,
                string: 7,
            },
            {
                freat: 12,
                string: 5,
            },
        ];
        const response = text(neck, positions);

        const strings = response.split("\n");
        assert.ok(strings.length === 6);
        assert.ok(strings[0] === "E ||---|---|---|---|");
        assert.ok(strings[1] === "B ||-o-|---|---|---|");
        assert.ok(strings[2] === "G ||---|-o-|---|---|");
        assert.ok(strings[3] === "D ||---|-o-|---|---|");
        assert.ok(strings[4] === "A ||---|---|---|---|");
        assert.ok(strings[5] === "E ||---|---|---|---|");
    });
    it("should fetch standard tuning from text", () => {
        let neck = "";
        neck += "E ||---|---|---|---|\n";
        neck += "B ||-o-|---|---|---|\n";
        neck += "G ||---|-o-|---|---|\n";
        neck += "D ||---|-o-|---|---|\n";
        neck += "A ||---|---|---|---|\n";
        neck += "E ||---|---|---|---|\n";

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.root === "e");
        assert.ok(response.neck.tuning === "standard");
    });
    it("should fetch drop tuning from text", () => {
        let neck = "";
        neck += "E ||---|---|---|---|\n";
        neck += "B ||---|---|---|---|\n";
        neck += "G ||---|---|---|---|\n";
        neck += "D ||---|---|-o-|---|\n";
        neck += "A ||---|---|-o-|---|\n";
        neck += "D ||---|---|-o-|---|\n";

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.root === "d");
        assert.ok(response.neck.tuning === "drop");
    });
    it("should fetch open tuning from text", () => {
        let neck = "";
        neck += "C ||---|-o-|---|---|\n";
        neck += "G ||---|-o-|---|---|\n";
        neck += "C ||---|-o-|---|---|\n";
        neck += "G ||---|-o-|---|---|\n";
        neck += "C ||---|-o-|---|---|\n";
        neck += "E ||---|-o-|---|---|\n";

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.root === "e");
        assert.ok(response.neck.tuning === "standard");
    });
    it("should fetch number of freats from text", () => {
        let neck = "";
        neck += "E ||---|---|---|---|\n";
        neck += "B ||-o-|---|---|---|\n";
        neck += "G ||---|-o-|---|---|\n";
        neck += "D ||---|-o-|---|---|\n";
        neck += "A ||---|---|---|---|\n";
        neck += "E ||---|---|---|---|\n";

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.freats === 4);
    });
    it("should fetch correct number of strings from text", () => {
        let neck = "";
        neck += "E ||---|---|---|---|\n";
        neck += "B ||-o-|---|---|---|\n";
        neck += "G ||---|-o-|---|---|\n";
        neck += "D ||---|-o-|---|---|\n";
        neck += "A ||---|---|---|---|\n";
        neck += "E ||---|---|---|---|\n";

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.strings === 6);
    });
    it("should fetch standard tuning with correct notes number", () => {
        let neck = "";
        neck += "E ||---|---|---|---|\n";
        neck += "B ||-o-|---|---|---|\n";
        neck += "G ||---|-o-|---|---|\n";
        neck += "D ||---|-o-|---|---|\n";
        neck += "A ||---|---|---|---|\n";
        neck += "E ||---|---|---|---|\n";

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.root === "e");
        assert.ok(response.neck.tuning === "standard");
        assert.ok(response.notes.length === 3);
    });
    it("should fetch information from text with additional `-` cahracters", () => {
        let neck = "";
        neck += "E ||-----|----|---|-----|\n";
        neck += "B ||--o--|----|---|-----|\n";
        neck += "G ||-----|-o--|---|-----|\n";
        neck += "D ||-----|--o-|---|-----|\n";
        neck += "A ||-----|----|---|-----|\n";
        neck += "E ||-----|----|---|-----|\n";

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.root === "e");
        assert.ok(response.neck.tuning === "standard");
        assert.ok(response.notes.length === 3);
    });
    it("should fetch standard tuning when string is not ideal", () => {
        const neck = `
        E ||---|---|---|---|
        B ||-o-|---|---|---|
        G ||---|-o-|---|---|
        D ||---|-o-|---|---| 
        A ||---|---|---|---|
        E ||---|---|---|---|
        `;

        const response = fetch(neck);

        if (!response) {
            assert.ok(false);
        }

        assert.ok(response.neck.root === "e");
        assert.ok(response.neck.tuning === "standard");
        assert.ok(response.notes.length === 3);
    });
    it("should return undefined when text cant be properly fetched", () => {
        const incorrectText = "klfsdas";
        const response = fetch(incorrectText);
        assert.ok(response === undefined);
    });

    it("should 6 string E standard", () => {
        const response = tuning({ tuning: "standard" });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "e"]);
    });

    it("should 7 string B standard", () => {
        const response = tuning({ tuning: "standard" });

        assert.ok(response.length === 6);
        assert.deepEqual(response, ["e", "b", "g", "d", "a", "e", "b"]);
    });

    it("should 4 string C open", () => {
        const response = tuning({ tuning: "standard", strings: 4 });

        assert.ok(response.length === 4);
        assert.deepEqual(response, ["c", "g", "c", "g"]);
    });

    it("should 6 string D drop", () => {
        const response = tuning({ tuning: "drop" });

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
