module.exports = (...args) => {
    return args.reduce((function (agg, value) {
        return agg *= value;
    }), 1);
}