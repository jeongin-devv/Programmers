const solution = (arr : number[], divisor : number) => {
    let answer = [];
    
    arr.forEach((num) => {
        if(num%divisor === 0){
            answer.push(num);
        };
    });
    if(answer.length===0){
        answer.push(-1);
    }
    answer.sort((a,b) => a-b);
    
    return answer;
}

export default solution;