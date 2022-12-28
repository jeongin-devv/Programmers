const solution = (money: number) => {
    let answer = [];
    const price = 5500;
    
    answer = [Math.floor(money/price), money%price];
    
    return answer;
}

export default solution;