export type NumBool = "0" | "1";

export type NumBoolToBool<T extends NumBool> = {"0": false, "1": true}[T];

export type Not<T extends NumBool> = {"0": "1", "1": "0"}[T];

export type Or<A extends NumBool, B extends NumBool> = {
    "0": {"0": "0", "1": "1"},
    "1": {"0": "1", "1": "1"}
}[A][B];
