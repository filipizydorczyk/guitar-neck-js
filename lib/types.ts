import { NOTES } from "./constants";

export type TuningType = "standard" | "drop" | "open";

export type Note = typeof NOTES[number];

export type GuitarNeck = {
    tuning: TuningType;
    root?: Note;
    strings?: number;
    freats?: number;
};

export type NeckPosition = {
    freat: number;
    string: number;
};
