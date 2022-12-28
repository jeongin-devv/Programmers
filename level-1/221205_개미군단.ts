const solution = (hp : number) => {
    let answer = 0;
    
    answer += Math.floor(hp/5);
    hp = hp - 5*Math.floor(hp/5);
    
    answer += Math.floor(hp/3);
    hp = hp - 3*Math.floor(hp/3);
    
    answer += hp;
    
    return answer;
}

export default solution;