
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
    
    return { s, m, h};
}