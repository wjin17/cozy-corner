export function time2sec(time: Time) {
  const s = time.s;
  const m = time.m;
  const h = time.h;

  return s + m * 60 + h * 60 * 60;
}

export function sec2time(sec: number) {
  const s = sec % 60;
  const m = Math.floor(sec / 60) % 60;
  const h = Math.floor(sec / 3600);

  return { s, m, h };
}

export function formatTimer(props: { time: number; includeHours?: boolean }) {
  const timeF = sec2time(props.time);
  const h = timeF.h >= 10 ? timeF.h.toString() : `0${timeF.h}`;
  const m = timeF.m >= 10 ? timeF.m.toString() : `0${timeF.m}`;
  const s = timeF.s >= 10 ? timeF.s.toString() : `0${timeF.s}`;
  if (props.includeHours) {
    return `${h}:${m}:${s}`;
  } else {
    return `${m}:${s}`;
  }
}

export function formatTime(props: {
  time: number;
  format?: "12h" | "24h";
  includeSeconds?: boolean;
}) {
  const t = sec2time(props.time);
  const hours = props.format === "12h" ? (t.h % 12 ? t.h % 12 : 12) : t.h;
  const h = hours >= 10 ? hours.toString() : `0${hours}`;
  const m = t.m >= 10 ? t.m.toString() : `0${t.m}`;
  const s = t.s >= 10 ? t.s.toString() : `0${t.s}`;
  if (props.includeSeconds) {
    return `${h}:${m}:${s}`;
  } else {
    return `${h}:${m}`;
  }
}
