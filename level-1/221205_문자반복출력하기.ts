const solution = (my_string : string, n : number) => {
    let answer = '';
    
    Array.from(my_string).forEach((string) => {
        for(let i = 0; i < n; i++) {
            answer +=string;
        }
    });
    
    return answer;
}

export default solution;