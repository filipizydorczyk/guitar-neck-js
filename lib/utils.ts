import { NOTES } from "./constants";
import { Note } from "./types";

export const useStandardTuningGenerator = function* (root: Note) {
    let currentIndex = NOTES.indexOf(root);
    let i = 0;

    while (true) {
        yield NOTES[currentIndex];

        currentIndex = (currentIndex + (i % 5 === 1 ? 8 : 7)) % NOTES.length;
        i += 1;
    }
};
