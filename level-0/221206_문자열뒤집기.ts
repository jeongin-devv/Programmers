const solution = (my_string: string) => {
    let answer = '';

    answer = Array.from(my_string).reverse().join('');
    
    return answer;
}

export default solution;