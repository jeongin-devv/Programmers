const solution = (box: number[], n : number) => {
    let answer = 1;
    const nBox = [n,n,n];
    
    box.forEach((e, i) => {
        answer *= Math.floor(box[i]/nBox[i]);
    });
    
    return answer;
}

export default solution;