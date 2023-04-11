const solution = (cards1: string[], cards2: string[], goal: string[]) => {
    let answer = "Yes";
    for(const word of goal) {
        if(cards1[0] === word) {
            cards1.shift();
        } else if (cards2[0] === word) {
            cards2.shift();
        } else {
            return "No"
        }
    }
    return answer;
}

export default solution;