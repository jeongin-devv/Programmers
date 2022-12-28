const solution = (numbers : number[]) => {
    let answer = 0;
    const length = numbers.length;
    
    answer = numbers.reduce((a,b) => a+b, 0)/length;
    
    return answer;
}

export default solution;