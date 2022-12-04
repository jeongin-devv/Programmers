const solution = (my_string : string) => {
    let answer = '';
    const alp = ['a','e','i','o','u'];
    
    answer = Array.from(my_string)
            .filter((string) => !alp.includes(string))
            .join('');
    
    return answer;
}

export default solution;