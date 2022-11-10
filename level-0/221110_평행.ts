const solution = (dots: number[][]) => {
    let answer = 0;
    const leanArray = [];
    
    for(let i=0; i< dots.length; i++){
        for(let j=i+1; j< dots.length; j++){
            const lean = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])
            leanArray.includes(lean) ? answer = 1 : leanArray.push(lean);
        }
    }
    
    return answer;
}

export default solution;