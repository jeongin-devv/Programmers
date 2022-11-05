const solution = (before : string, after : string) => {
  let answer = 0;
  const sorting = (string) => {
      return Array.from(string).sort().join('');
  }
  
  const beforeString = sorting(before);
  const afterString = sorting(after)
  
  beforeString === afterString 
      ? answer = 1
      : answer = 0;
  
  return answer;
}


export default solution;