import { useStandardTuningGenerator } from "../utils";
import { NOTES } from "../constants";
import { GuitarNeck, Note } from "../types";

const DEFAULT_STRING_COUNT = 6;

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
    const strings = neck.strings || DEFAULT_STRING_COUNT;
    const overStrings = strings % DEFAULT_STRING_COUNT;

    const startingPoint =
        neck.tuning === "drop"
            ? NOTES.indexOf(neck.root || "e") + 2
            : NOTES.indexOf(neck.root || "e");

    let rootIndex =
        (36 + startingPoint - overStrings * 7 - (overStrings > 1 ? 1 : 0)) % 12;

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

//intervals = [4, 3] => C E G
