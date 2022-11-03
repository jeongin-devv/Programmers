const solution = (array : number[]) => {
  let answer = [];
  const max : number = Math.max(...array);
  const index : number = array.indexOf(max);
  answer = [max,index];
  
  return answer;
}

export default solution;