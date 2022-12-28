const solution = (n: number, arr1: number[] | number[][], arr2: number[] | number[][]) => {
    let answer = [];
    
    const parsing = (arr) => {
        return arr.map((num) => {
            let tw = num.toString(2);
            if(tw.length<n) {
                tw = "0".repeat(n-tw.length) + tw
            }
            return Array.from(tw).map((string) => Number(string));
        })
    }
    
    arr1 = parsing(arr1);
    arr2 = parsing(arr2);
    
    answer = arr1.map((arr,index) => arr.map((num,i) => num+arr2[index][i] === 0 ? " " : "#").join(''));
    
    return answer;
}

export default solution;