const solution = (emergency : number[]) => {
    let answer = [];
    let order = {}
    let desc = [...emergency].sort((a,b) => b-a);
    
    for(let i = 0; i < desc.length; i++){
        order[desc[i]] = i+1;   
    }
    answer = emergency.map(v => order[v]);
    
    return answer;
}

export default solution;