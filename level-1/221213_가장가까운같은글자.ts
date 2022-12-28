const solution = (str : string) => {
    let answer = [];
    let temp = [];
    
    for(let i = 0; i < str.length; i++){
        let count = 0;
        
        if(!temp.includes(str[i])){
            answer.push(-1);
            temp.push(str[i]);
        } else {
            for(let j = i-1; j>=0; j--){
                count++;
                if(str[i]===str[j]){
                    answer.push(count);
                    break;
                }
            }
        }
    }
    
    return answer;
}

export default solution;