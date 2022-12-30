const solution = (numbers: number[]) => {
    let answer = -1;
    const v = 45;
    answer = v - numbers.reduce((a,b) => a+b,0);
    return answer;
}

export default solution;