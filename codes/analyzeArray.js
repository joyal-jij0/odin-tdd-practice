function analyzeArray(arr){
    let sum =0
    for(let i =0; i<arr.length; i++){
        sum += arr[i];
    }
    const average = sum/arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average,
        min,
        max,
        length: arr.length
    }
}

module.exports = analyzeArray;