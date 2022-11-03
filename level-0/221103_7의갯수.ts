const solution = (array : number[]) => {
  let answer = 0;
  const joinArray = array.join('');
  const containSeven = Array.from(joinArray).filter(a => a==='7');
  
  answer = containSeven.length;
  
  return answer;
}

export default solution;