const solution = (price: number, money: number, count: number) => {
    let answer = 0;

    let sum = 0;
    
    for(let i = 1; i<=count; i++){
        sum += i*price;
    }
    
    answer = sum-money;
    if(answer<0) {
        answer = 0;
    }
    return answer;
}

export default solution;