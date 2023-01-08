const solution = (N: number, stages: number[]) => {
    let answer = [];
    let count = stages.length;
    
    for(let i = 1; i<= N+1; i++) {
        let fail = stages.filter(n => n === i).length;
        answer.push([i,fail/count]);
        count -= fail;
    }
    answer.pop();
    answer = answer.sort((a,b) => b[1] - a[1]).map(a => a[0])
    
    return answer;
}

export default solution;