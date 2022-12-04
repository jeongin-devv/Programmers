const solution = (numbers: number[]) => {
    let answer = 0;
    
    if(numbers.length ===2){
        return numbers[0] * numbers[1];
    }
    
    const positiveNumbers = numbers.filter((num) => num >= 0).sort((a,b) => b-a);
    const negativeNumbers = numbers.filter((num) => num <= 0).sort((a,b) => b-a);
    
    const num1 = positiveNumbers[0] * positiveNumbers[1];
    const num2 = negativeNumbers[0] * negativeNumbers[1];
    
    answer = Math.max(num1 ? num1 : 0 ,num2 ? num2 : 0);
    
    return answer;
}

export default solution;