const solution = (X: string, Y: string) => {
    let answer = '';
    let x = Array.from(X);
    let y = Array.from(Y);
    
    for(let i = 0 ; i < 10 ; i ++) {
        const curX = x.filter(a => Number(a) === i).length
        const curY = y.filter(a => Number(a) === i).length
        answer+=String(i).repeat(Math.min(curX, curY))
    }
    
    if(answer==="") answer = "-1";
    if(Number(answer) ===0) answer = "0";
    answer = Array.from(answer).sort((a,b) => Number(b) - Number(a)).join('');
    
    return answer;
}

export default solution;