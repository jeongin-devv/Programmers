const solution = (answers: number[]) => {
    const answer = [];
    
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    
    const calc = (array) => {
        return answers.filter((number,index) => number === array[index % array.length]).length;
    };
    
    const p = [];
    
    p.push(calc(first));
    p.push(calc(second));
    p.push(calc(third));

    const max = Math.max(...p);
    
    p.forEach((num,index) => {
        if(num===max) answer.push(index+1);
    })
    
    return answer;
}

export default solution;