import { formatTimer, sec2time, time2sec } from "./time";

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

describe("getFormattedTime", () => {
  it("should format time with hours", () => {
    expect(formatTimer({ time: 3661, includeHours: true })).toBe("01:01:01");
  });
  it("should format time without hours", () => {
    expect(formatTimer({ time: 61 })).toBe("01:01");
  });
});
