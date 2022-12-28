const solution = (numbers: number[], num1: number, num2: number) => {
    let answer = [];

    answer = numbers.slice(num1,num2+1);

    return answer;
}

export default solution;