module.exports = function toReadable(number) {
    let map = new Map();
    map.set(0, 'zero');
    map.set(1, 'one');
    map.set(2, 'two');
    map.set(3, 'three');
    map.set(4, 'four');
    map.set(5, 'five');
    map.set(6, 'six');
    map.set(7, 'seven');
    map.set(8, 'eight');
    map.set(9, 'nine');
    map.set(10, 'ten');
    map.set(11, 'eleven');
    map.set(12, 'twelve');
    map.set(13, 'thirteen');
    map.set(14, 'fourteen');
    map.set(15, 'fifteen');
    map.set(16, 'sixteen');
    map.set(17, 'seventeen');
    map.set(18, 'eighteen');
    map.set(19, 'nineteen');
    map.set(20, 'twenty');
    map.set(30, 'thirty');
    map.set(40, 'forty');
    map.set(50, 'fifty');
    map.set(60, 'sixty');
    map.set(70, 'seventy');
    map.set(80, 'eighty');
    map.set(90, 'ninety');
    const h = Math.floor(number / 100);
    const dd = number % 100;
    let result = '';
    if (h > 0)
        result += map.get(h) + ' hundred ';
    const dds = map.get(dd);
    if (number === 0)
        return dds;
    if (dd === 0) {
        result = result.trim();
    } else if (dds) {
        result += dds;
    } else {
        const tens = Math.floor(dd / 10) * 10;
        const ones = dd % 10;
        result += map.get(tens) + ' ' + map.get(ones);
    }
    return result.trim();
}

