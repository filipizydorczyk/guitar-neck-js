import { deepEqual } from "assert";
import { useStandardTuningGenerator } from "../lib/utils";

describe("utils tests", () => {
    it.only("should generate correct notes for standard tuning", () => {
        const notesGenerator = useStandardTuningGenerator("e");

        deepEqual(notesGenerator.next().value, "e");
        deepEqual(notesGenerator.next().value, "b");
        deepEqual(notesGenerator.next().value, "g");
        deepEqual(notesGenerator.next().value, "d");
        deepEqual(notesGenerator.next().value, "a");
        deepEqual(notesGenerator.next().value, "e");
    });
});
