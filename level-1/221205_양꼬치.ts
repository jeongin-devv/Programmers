const solution = (n : number, k : number) => {
    let answer = 0;
    
    const service = Math.floor(n/10);
    answer = 12000*n + 2000*(k-service);
    
    return answer;
}

export default solution;