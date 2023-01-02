const solution = (left: number, right: number) => {
    let answer = 0;
    
    const calc = (number) => {
        let count = 0;
        for(let i = 1; i<=number; i++) {
            if(number % i === 0) {
                count++;
            }
        }
        return count;
    }
    
    for(let i = left; i<=right; i++) {
        if(calc(i) % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    
    return answer;
}

export default solution;