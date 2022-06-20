import { useStandardTuningGenerator } from "../utils";
import { NOTES } from "../constants";
import { GuitarNeck, Note } from "../types";

const DEFAULT_STRING_COUNT = 6;

const baseTuning = (neck: GuitarNeck): Note[] => {
    const strings = neck.strings || DEFAULT_STRING_COUNT;
    const overStrings =
        strings >= DEFAULT_STRING_COUNT
            ? strings % DEFAULT_STRING_COUNT
            : DEFAULT_STRING_COUNT - strings;
    const defaultRoot = neck.tuning === "drop" ? "d" : "e";

    const startingPoint =
        neck.tuning === "drop"
            ? NOTES.indexOf(neck.root || defaultRoot) + 2
            : NOTES.indexOf(neck.root || defaultRoot);

    const multiplier = strings < DEFAULT_STRING_COUNT ? -1 : 1;

    let rootIndex =
        (36 +
            startingPoint -
            multiplier * overStrings * 7 -
            (overStrings > 1 && multiplier === 1 ? 1 : 0)) %
        12;

    let root = NOTES[rootIndex];

    const notesGenerator = useStandardTuningGenerator(root);
    const response: Note[] = [];

    while (response.length < strings) {
        response.push(notesGenerator.next().value);
    }

    if (neck.tuning === "drop") {
        const currentRoot = response[response.length - 1];
        const newRoot = NOTES.indexOf(currentRoot) - 2;
        response[response.length - 1] = NOTES[newRoot];
    }

    return response;
};

const openTuning = (neck: GuitarNeck): Note[] => {
    const response: Note[] = [];
    const strings = neck.strings || DEFAULT_STRING_COUNT;
    const rootIndex = NOTES.indexOf(neck.root || "c");
    const secondIndex = (rootIndex + 4) % NOTES.length;
    const thirdIndex = (rootIndex + 7) % NOTES.length;

    response.push(NOTES[secondIndex]);

    [...Array(strings - 1)].map((_, index) => {
        response.push(index % 2 == 1 ? NOTES[rootIndex] : NOTES[thirdIndex]);
    });

    return response;
};

/**
 * Function to create guitar tuning
 * @param neck object that contain informations to create
 * tuning.
 *  -   `strings` is 6 by default
 *  -   `root` by default is deteminated by `tuning`. Read
 *      more about this at {@link text}
 * @returns array of notes ordered by guitar strings (eg.
 * [E, B, G, D, A, E] for standard e)
 */
export const tuning = (neck: GuitarNeck): Note[] => {
    if (neck.tuning === "open") {
        return openTuning(neck);
    } else {
        return baseTuning(neck);
    }
};
