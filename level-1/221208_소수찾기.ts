const solution = (n : number) => {
    let answer = 0;

    const calc = (num) => {
        if(num===2) return true;
        for(let i =2; i <= Math.floor(Math.sqrt(num)); i++){
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
    
    for(let i = 2; i<=n; i++){
        if(calc(i)) answer++;
    }
    
    return answer;
}

export default solution;