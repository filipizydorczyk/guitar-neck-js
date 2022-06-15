import { NOTES } from "../constants";
import { GuitarNeck, Note } from "../types";

/**
 * Function to create guitar tuning
 * @param neck object that contain informations to create
 * tuning.
 *  -   `strings` is 6 by default
 *  -   `root` by default is deteminated by `tuning`. Read
 *      more about this at {@link guitarNeckToText}
 * @returns array of notes ordered by guitar strings (eg.
 * [E, B, G, D, A, E] for standard e)
 */
export const tuning = (neck: GuitarNeck): Note[] => {
    let currentIndex = NOTES.indexOf(neck.root || "e");
    let i = 0;
    const response: Note[] = [];

    while (response.length < 6) {
        response.push(NOTES[currentIndex]);
        currentIndex = (currentIndex + (i % 6 === 1 ? 8 : 7)) % NOTES.length;
        i += 1;
    }

    return response;
};

//intervals = [4, 3] => C E G
