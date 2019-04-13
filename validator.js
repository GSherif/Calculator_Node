module.exports = (n) => {
    if (isNaN(n)) {
        throw 'It is not a number';
    }
    else {
        return Number(n);
    }
}