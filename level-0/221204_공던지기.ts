const solution = (numbers : number[], k : number) => {
    let answer = 0;
    
    answer = numbers[(k - 1) * 2 % numbers.length];
    
    return answer;
}

export default solution;