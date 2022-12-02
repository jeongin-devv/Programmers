const solution = (my_string : string) => {
    let answer = 0;
    const nums = my_string.match(/[0-9]+/g);
    
    nums?.forEach((num) => {
        answer = eval(`${answer}+${num}`);
    });
    
    return answer;
}

export default solution;