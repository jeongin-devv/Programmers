const solution = (park, routes) => {
    let answer = [];
    
    const ylength = park.length;
    const xlength = park[0].length;
    
    let y = park.findIndex((p) => p.includes('S'));
    let x = park[y].indexOf('S');
    
    routes.forEach((w) => {    
        let flag = true;
        let tempY = y;
        let tempX = x;
        const [direction, distance] = w.split(" ");
        
        for(let a = 0; a < Number(distance); a++) {
            if (direction === 'E') tempX++;
            if (direction === 'W') tempX--;
            if (direction === 'S') tempY++;
            if (direction === 'N') tempY--;
            
            if (tempX >= xlength || tempY >= ylength || tempX < 0 || tempY < 0 || park[tempY][tempX] === 'X') {
                flag = false;
                break;
            }
            
        } 
        
        if (flag) {
            y = tempY;
            x = tempX;
        }
        
    })
    
    answer = [y, x];
    
    return answer;
}

export default solution;