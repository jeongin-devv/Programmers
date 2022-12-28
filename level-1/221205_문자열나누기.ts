const solution = (s : string) => {
    let answer = 0;
    let temp = "";

    let count1 = 0;
    let count2 = 0;

    Array.from(s).forEach((string) => {
        if(!temp) temp = string;
        
        if(temp === string) count1++;
        
        else count2++;
        
        if (count1 === count2) {
            answer++;
            count1 = 0;
            count2 = 0;
            temp = "";
        }
    })
    
    if (temp) answer++;
    
    return answer;
}

export default solution;