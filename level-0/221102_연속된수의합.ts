const solution = (num: number, total: number) => {
  let answer : number[] = [];
  /* 
      total = startNumber*num - (num-1)(1 + num - 1)/2
  */
  let startNumber = (2*total/num + 1 - num) / 2;
  
  for(let i = 0; i < num; i++) {
      answer.push(startNumber+i)
  }
  
  return answer;
}

export default solution;