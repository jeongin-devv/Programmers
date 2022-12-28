const solution = (k : number, score: number[]) => {
    let answer = [];
    
    for(let i = 0; i <score.length; i++) {
        const array = score.slice(0,i+1).sort((a,b) => b-a);
        if(i < k-1) answer.push(array.pop());
        else answer.push(array[k-1]);
    }
    
    return answer;
}

export default solution;