module.exports = (firstNum, ...args) => {
    return args.reduce((function (agg, value) {
        return agg -= value;
    }), firstNum);
}