const solution = (numbers : number[]) => {
    let answer = 0;
    const length = numbers.length;
    
    numbers = numbers.sort((a,b) => b - a);
    answer = numbers[0]*numbers[1];
    
    return answer;
}

export default solution;