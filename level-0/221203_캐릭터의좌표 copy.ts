const solution = (keyinput: string[], board: number[]) => {
    let answer = [0, 0];
    const rangeX = (board[0]-1)/2;
    const rangeY = (board[1]-1)/2;
    
    const keyGroup = {
        "left" : [-1,0],
        "right" : [1,0],
        "up" : [0, 1],
        "down" : [0, -1]
    };
    
    keyinput.forEach((key) => {
        const temp = [...answer];
        answer[0] += keyGroup[key][0];
        answer[1] += keyGroup[key][1];

        if(answer[0] > rangeX || answer[0] < (rangeX*-1)) answer[0] = temp[0];
        if(answer[1] > rangeY || answer[1] < (rangeY*-1)) answer[1] = temp[1];
        
    });
    
    return answer;
}

export default solution;