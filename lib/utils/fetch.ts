import { GuitarNeck, NeckPosition } from "../types";

type FetchResponse = { neck: GuitarNeck; notes: NeckPosition[] };

export const fetch = (text: string): FetchResponse | undefined => {
    return {
        neck: {
            tuning: "open",
        },
        notes: [],
    };
};
