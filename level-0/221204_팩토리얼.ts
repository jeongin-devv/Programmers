const solution = (n : number) => {
    let answer = 0;
    let i = 1;
    
    const factorial = (number : number) => number > 1? number * factorial(number - 1) : 1;
    
    while(i > 0){
        if(factorial(i) > n){
            answer = (i-1);
            break;
        }else{
            i++;
        }
    }
    
    return answer;
}

export default solution;