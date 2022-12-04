const solution = (num_list : number[], n : number) => {
    let answer = [];
    let temp = [];
    
    num_list.forEach((num, index) => {
        temp.push(num)
        if((index+1)%n === 0) {
            answer.push(temp);
            temp = [];
        }
    });
    
    return answer;
}

export default solution;