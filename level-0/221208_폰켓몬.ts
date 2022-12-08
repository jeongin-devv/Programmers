const solution = (nums : number[]) => {
    let answer = 0;
    
    const a = [...new Set([...nums])];
    
    nums.length/2 < a.length ? answer = nums.length/2 : answer = a.length
    
    return answer;
}

export default solution;