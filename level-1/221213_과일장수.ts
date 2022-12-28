const solution = (k:number, m:number, score:number[]) => {
    let answer : any= 0;
    const boxCount = Math.floor(score.length/m);
    const boxList = [];
    answer = score.sort((a,b) => b-a);
    
    for(let i =0; i < boxCount; i++){
        boxList.push(answer.slice(i*m, (i+1)*m).sort());
    }
    
    answer = boxList.map((box) => box[0]*m).reduce((a,b) => a+b,0);
    
    return answer;
}

export default solution;