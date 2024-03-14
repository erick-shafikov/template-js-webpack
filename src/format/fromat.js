import plural from 'plural-ru';

export function format(seconds) {
    let s = (seconds % 60).toString();
    let ruS = plural(Number(s), 'секунда', 'секунды', 'секунд');
    let m = Math.floor((seconds / 60) % 60).toString();
    let ruM = plural(Number(m), 'минута', 'минуты', 'минут');
    let h = Math.floor((seconds / 60 / 60) % 60).toString();
    let ruH = plural(Number(h), 'час', 'часа', 'часов');
    return `${h.padStart(2, '0')} ${ruH}, ${m.padStart(
        2,
        '0'
    )} ${ruM}, ${s.padStart(2, '0')} ${ruS}`;
}
