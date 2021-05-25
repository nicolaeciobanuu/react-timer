const addZero = (num: Number) => {
    return num > 9 ? num : `0${num}`;
}
export const formatTime = (time) => {
    const minutes = addZero(Math.floor(time / 60));
    const seconds = addZero(Math.floor(time % 60));

    return `${minutes}:${seconds}`;
}