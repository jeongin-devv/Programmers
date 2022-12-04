const solution = (n : number) => {
    let answer = [];
    
    while(n > 1 && n % 2 === 0) {
        answer.push(2);
        n /= 2;
    }
    
    for(let i = 3; i*i <= n; i +=2){
        while(n % i ===0){
            answer.push(i);
            n/= i;
        }
    }
    
    if (n > 2) answer.push(n);
    
    answer = Array.from(new Set(answer));
    
    return answer;
}

export default solution;