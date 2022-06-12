import { GuitarNeck, NeckPosition } from "./types";

/**
 * Function to draw guitar nexk text representation
 *
 * @param neck set of informations that describes how neck
 * will look like. Some of the informations are optional.
 * Default values for them are
 *  - `root` - it depends on tuning. `E` for `standard`,
 * `D` for `drop` and `C` for `open`
 *  - `strings` - `6`, needs to be non negative
 *  - `freats` - `4`, needs to be non negative
 * @param notes list of positions to draw on neck
 * @returns string with neck representation
 */
export const guitarNeckToText = (
    neck: GuitarNeck,
    notes: NeckPosition[]
): string => {
    const freats = neck.freats || 4;
    const strings = neck.strings || 6;

    if (freats <= 0 || strings <= 0) {
        return "";
    }

    return "";
};

export const readFromText = (
    text: string
): { neck: GuitarNeck; notes: NeckPosition[] } | undefined => {
    return {
        neck: {
            tuning: "open",
        },
        notes: [],
    };
};
