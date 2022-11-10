const solution = (lines:number[][]) => {
    let answer = 0;
    const temp = {};
    
    lines.forEach((arr) => {
        const minValue = Math.min(...arr);
        const maxValue = Math.max(...arr);
        for(let i = minValue; i < maxValue; i++) {
            temp[i] = temp[i] ? temp[i] + 1 : 1;
        }
    });
    
    answer = Object.values(temp).filter(value => value >1).length;
    
    return answer;
}

export default solution;