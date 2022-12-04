const solution = (numbers : number[], direction: 'right' | 'left') => {
    let answer = numbers;

    if(direction === "right"){
        const ele = answer.pop();
        answer.unshift(ele);
    }else{
        const ele = answer.shift();
        answer.push(ele);
    }
    return answer;
}

export default solution;