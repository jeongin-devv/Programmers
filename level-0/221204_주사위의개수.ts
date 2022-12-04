const solution = (n : number) => {
    let answer = 0;
    const arr = new Set();
    for(let i = 2; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0) arr.add(i);
        }
    }
    
    answer = arr.size;
    
    return answer;
}

export default solution;