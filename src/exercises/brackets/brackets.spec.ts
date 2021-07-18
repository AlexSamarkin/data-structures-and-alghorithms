import {checkBrackets} from "./brackets";

describe("Check Brackets", () => {
    it("should return correct brackets", () => {
        const testCases: { expected: boolean, testCase: string }[] = [
            {
                expected: true,
                testCase: ""
            },
            {
                expected: false,
                testCase: "{"
            },
            {
                expected: true,
                testCase: "{([])}"
            },
            {
                expected: true,
                testCase: "[]"
            },
            {
                expected: false,
                testCase: "{[]"
            },
            {
                expected: false,
                testCase: "[]{"
            },
            {
                expected: false,
                testCase: "()[{]("
            },
            {
                expected: true,
                testCase: "a[b]"
            },
            {
                expected: true,
                testCase: "(abc)[a]{(a)}[]{[([])]}"
            }
        ];

        testCases.forEach(({ expected, testCase }) => {
            expect(checkBrackets(testCase)).toBe(expected);
        })
    })
})