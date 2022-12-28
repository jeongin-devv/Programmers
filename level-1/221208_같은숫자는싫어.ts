const solution = (arr : number[]) => {
    let answer = [];

    arr.forEach((num, index) => {
        if(index===0){
            answer.push(num);
        }else{
            const lastIndex = answer.length-1;
            if(answer[lastIndex] !== num){
                answer.push(num);
            }
        }
    })
    
    return answer;
}

export default solution;