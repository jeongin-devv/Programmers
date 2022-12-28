const solution = (sizes: number[][]) => {
    let answer = 0;
    
    const a = sizes.map((arr) => arr.sort((a,b) => a-b)[0]);
    const b = sizes.map((arr) => arr.sort((a,b) => a-b)[1]);
    
    answer = Math.max(...a)*Math.max(...b);
    
    return answer;
}

export default solution;