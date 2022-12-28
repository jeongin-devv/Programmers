const solution = (number: number, limit: number, power: number) => {
    let answer = 0;
    let temp = [];
    
    for(let i = 1; i<=number; i++){
        let count = 1;
        for(let j=1; j<=i/2; j++){
            if(i%j===0) count++;
        }
        temp.push(count);
    }
    
    answer = temp.reduce((acc,cur) => {
        if(cur > limit) {
            return acc+power;
        }else{
            return acc+cur;
        }
    }, 0)
    
    return answer;
}

export default solution;