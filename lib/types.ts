export type TuningType = "standard" | "drop" | "open";

export type Note =
    | "a-flat"
    | "a"
    | "ais"
    | "b-flat"
    | "b"
    | "bis"
    | "c-flat"
    | "c"
    | "cis"
    | "d-flat"
    | "d"
    | "dis"
    | "e-flat"
    | "e"
    | "eis"
    | "f-flat"
    | "f"
    | "fis"
    | "g-flat"
    | "g"
    | "gis";

export type GuitarNeck = {
    tuning: TuningType;
    root?: Note;
    strings: number;
    freats: number;
};

export type NeckPosition = {};
