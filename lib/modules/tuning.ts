import { useStandardTuningGenerator } from "../utils";
import { NOTES } from "../constants";
import { GuitarNeck, Note } from "../types";

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
    const notesGenerator = useStandardTuningGenerator("e");

    const response: Note[] = [];

    while (response.length < (neck.strings || 6)) {
        response.push(notesGenerator.next().value);
    }

    return response;
};

//intervals = [4, 3] => C E G
