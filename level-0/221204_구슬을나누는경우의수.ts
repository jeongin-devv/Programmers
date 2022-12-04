const solution = (balls : number, share : number) => {
    let answer = 0;
    const factorial = (number) => {
        return number > 1 ? number * factorial(number - 1) : 1;
    }
    
    answer = Math.round(factorial(balls) / (factorial(balls-share)*factorial(share)));
    
    return answer;
}

export default solution;