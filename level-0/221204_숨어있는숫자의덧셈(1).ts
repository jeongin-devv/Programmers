const solution = (my_string : string) => {
    let answer = 0;
    let array = Array.from(my_string);
    
    array = array.filter((string) => !isNaN(Number(string)));
    array.forEach((string) => answer += Number(string));
    
    return answer;
}

export default solution;