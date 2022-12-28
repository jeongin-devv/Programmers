const solution = (array) => {
    let answer = 0;
    let m = new Map();
    
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    const sortedArray = [...m].sort((a,b)=>b[1]-a[1]);
    
    answer = sortedArray.length === 1 || sortedArray[0][1] > sortedArray[1][1] ? sortedArray[0][0] : -1;
    
    return answer;
}

export default solution;