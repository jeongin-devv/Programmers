const solution = (rsp : string) => {
    let answer = '';
    const rspGroup = {
        "2" : 0,
        "0" : 5,
        "5" : 2
    };
    
    answer = Array.from(rsp).map((s) => rspGroup[s]).join('')
    
    return answer;
}

export default solution;