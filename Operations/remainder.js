module.exports = (firstNum,...args) => {
    return args.reduce((function (agg, value) {
        if(value === 0){
            throw 'can not divide by 0';
        }
        else{
            return agg %= value;
        }
    }), firstNum);
}