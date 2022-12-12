const solution = (ingredient : number[]) => {
    let answer = 0;
    let stack = [];
    const checkValue = '1231'
    const length = checkValue.length;
    
    ingredient.forEach((num) => {
        stack.push(num);
        if(stack.length >= 4){
            const checked = stack.slice(-4).join('') === checkValue;
            if(checked){
                for(let i = 0 ; i<length; i++){
                    stack.pop();
                }
                answer++;
            }
        }
    })
    
    return answer;
}

export default solution;