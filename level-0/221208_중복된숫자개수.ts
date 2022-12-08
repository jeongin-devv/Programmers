const solution = (array : number[], n) => {
    let answer = 0;
    let temp = {};
    
    array.forEach((num) => {
        temp[num] = (temp[num] || 0) + 1
    });
    
    answer = temp[n] || 0;
    
    return answer;
}

export default solution;