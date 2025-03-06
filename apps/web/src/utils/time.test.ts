import { time2sec, sec2time } from "./time";

describe("time2sec", () => {
    it("should convert time to seconds", () => {
        expect(time2sec({ s: 1, m: 1, h: 1 })).toBe(3661);
    });
});

describe("sec2time", () => {
    it("should convert seconds to time", () => {
        expect(sec2time(3661)).toStrictEqual({ s: 1, m: 1, h: 1 });
    });
});