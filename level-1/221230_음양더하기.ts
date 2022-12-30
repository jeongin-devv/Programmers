const solution = (absolutes: number[], signs: boolean[]) => {
    let answer = 0;
    
    for(let i = 0; i<signs.length; i++) {
        answer += absolutes[i]*(signs[i] ? 1 : -1)
    }
    return answer;
}

export default solution;