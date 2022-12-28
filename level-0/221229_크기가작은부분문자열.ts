const solution = (t: string, p: string) => {
    let answer = 0;
    const a = [];
    for(let i = 0; i<=t.length-p.length; i++){
        a.push(Number(t.slice(i,i+p.length)));
    }
    
    answer = a.filter((num) => Number(p) >= num).length;
    
    return answer;
}

export default solution;