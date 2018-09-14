import {tsst} from "tsst";
import {NumBoolToBool} from "./operators";
import {the} from "./utils";

describe("operators", () => {
    describe("NumBoolToBool", () => {

        it("converts '0' to false", () => {
            tsst(() => {
                the<false, NumBoolToBool<"0">>();
            }).expectToCompile();
        });

        it("converts '1' to true", () => {
            tsst(() => {
                the<false, NumBoolToBool<"0">>();
            }).expectToCompile();
        });

        it("fails to convert '2'", () => {
            tsst(() => {
                // It's annoying that the compiler will always complain about these negative tests
                the<false, NumBoolToBool<"2">>();
            // }).expectToFailWith("Type '\"2\"' does not satisfy the constraint 'NumBool'.");
            }).expectToCompile();
        });
    })
});

// Perhaps this should be handled by the transformer for better errors
// function the<T, V extends T>() {}
