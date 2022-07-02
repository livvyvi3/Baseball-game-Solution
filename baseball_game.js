function totalScore(record){
    let newArr = [];
    let sum = 0;
    for(var i=0; i<record.length; i++){
        if (parseInt(record[i]!== NaN)){
            newArr.push(parseInt(record[i]));
        }
        else if (record[i] === '+'){
            sum += newArr[newArr.length - 1] + newArr[newArr.length - 2];
            newArr.push(sum);
        }
        else if (record[i] === 'C'){
            newArr.pop(newArr[newArr.length - 1]);
        }
        else if (record[i] === 'D'){
            sum += newArr[newArr.length - 1] + newArr[newArr.length - 1];
            newArr.push(sum);
        }
    }
    let totalScore = newArr.reduce((partialSum, a) => partialSum + a, 0);
    return totalScore;
};
console.log(totalScore(["5","2","C","D","+"]));
console.log(totalScore(["5","-2","4","C","D","9","+","+"]));
console.log(totalScore(["1","C"]));

