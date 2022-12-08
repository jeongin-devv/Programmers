const solution = (s : string) => {
    var answer = '';
    const array = Array.from(s);
    const lower = array.filter((word) => word === word.toLowerCase());
    const upper = array.filter((word) => word === word.toUpperCase());
    
    answer += lower.sort((a,b) => b.localeCompare(a)).join('');
    answer += upper.sort((a,b) => b.localeCompare(a)).join('');
    
    return answer;
}
export default solution;