const solution = (num : number, k : number) => {
  let answer = 0;
  const numberArray = Array.from(num.toString());
  const i = numberArray.indexOf(k.toString());
  
  i != -1 
      ? answer = i+1 
      : answer = i;
  
  return answer;
}

export default solution;