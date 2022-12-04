const solution = (dots: number[][]) => {
    let answer = 0;
    
    const sorted = dots.sort((a, b) => b[0] - a[0]);
    const x = Math.abs(sorted[0][0] - sorted[2][0]);
    const y = Math.abs(sorted[0][1] - sorted[1][1]);
    
    answer = x*y;
    
    return answer;
}

export default solution;