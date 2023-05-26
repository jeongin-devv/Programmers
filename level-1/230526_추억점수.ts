const solution = (name: string[], yearning: number[], photo: string[][]) => {
    const answer = [];
    const scoreMap = {};
    
    name.forEach((word, index) => {
        console.log(word)
        scoreMap[word] =  yearning[index];
    });
    
    photo.forEach((array) => {
        let count = 0;
        array.forEach((word) => {
            if (scoreMap[word]) {
               count += scoreMap[word]; 
            }
        });
        answer.push(count);
    });
    
    return answer;
}

export default solution;