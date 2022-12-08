const solution = (array : number[], height : number) => {
    let answer = 0;
    
    answer = array.filter((num) => num > height).length;
    
    return answer;
}

export default solution;