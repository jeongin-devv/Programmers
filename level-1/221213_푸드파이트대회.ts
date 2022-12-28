const solution = (food : number[]) => {
    let answer = '';
    for(let i = 1; i<food.length; i++){
        const count = Math.floor(food[i]/2);
        answer += i.toString().repeat(count);
    }
    
    let temp = Array.from(answer).reverse().join('');
    
    answer = answer + "0" + temp;
    
    return answer;
}

export default solution;