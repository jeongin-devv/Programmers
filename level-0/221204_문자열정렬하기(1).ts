const solution = (my_string : string) => {
    let answer = [];
    
    answer = Array.from(my_string)
            .filter((string) => !isNaN(Number(string)))
            .map((string) => Number(string))
            .sort((a,b) => a - b);
    
    return answer;
}

export default solution;