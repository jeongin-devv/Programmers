const solution = (board : number[][]) => {
    let answer = 0;
    const length = board.length;
    
    const numArray = [
        [0,1],
        [0,-1],
        [1,-1],
        [1,0],
        [1,1],
        [-1,-1],
        [-1,0],
        [-1,1]
    ];
    
    const existAxis = (y: number, x: number) => y>=0 && x>=0 && length > y && length > x;
    
    const existBomb = (y: number, x: number) => {
        return numArray.some(([a,b]) => existAxis(y + a,x + b) && board[y + a][x + b] === 1);
    }
    
    for(let i = 0; i<length; i++){
        for(let j = 0; j<length; j++) {
            if(board[i][j] !== 1 && !existBomb(i,j)) answer++; 
        }
    }
    
    return answer;
}

export default solution;