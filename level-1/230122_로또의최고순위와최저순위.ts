const solution = (lottos : number[], win_nums: number[]) => {
    let answer = [];
    let correct = [6,5,4,3,2,1];
    
    let min = 0;
    let max = 0;
    
    let zeroNumber = lottos.filter((v) => v === 0).length;
    let containNumber = lottos.filter((v) => win_nums.includes(v)).length;
    
    if(zeroNumber === 6) {
        return [1,6]
    }
    if(containNumber === 6) {
        return [1,1]
    }
    
    if(containNumber === 0) {
        return [6,6]
    }
    
    min = correct[containNumber-1];
    max = correct[zeroNumber+containNumber-1];
    
    answer = [max,min];
    
    return answer;
}

export default solution;