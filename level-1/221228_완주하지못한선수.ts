const solution = (participant: string[], completion: string[]) => {
    let answer = '';
    
    const sortedP = participant.sort();
    const sortedC = completion.sort();
    
    for(let i = 0; i<sortedP.length; i++) {
        if(sortedP[i]!==sortedC[i]){
            return sortedP[i];
        }
    }
    return sortedP[0];
}

export default solution;