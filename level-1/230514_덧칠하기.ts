const solution = (n: number, m: number, section: number[]) => {
    let answer = 0;
    const array = new Array(n).fill(1);
    section.forEach((num) => {
        array[num] = 0;
    });
    const length = array.length;
    for(let i = 0; i < length; i++) {
        if (array[i] === 0) {
            for(let j = 0; j < m; j++) {
               if(i+j < length) {
                   array[i+j] = 1;
               }
            }
            answer++;
        }
    }
    return answer;
}

export default solution;