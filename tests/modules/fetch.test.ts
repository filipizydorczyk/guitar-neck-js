import assert from "assert";
import { fetch } from "../../lib";

describe("Fetching tests", () => {
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
});
