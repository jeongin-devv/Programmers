const solution = (numlist : number[], n : number) => {
  let answer = [];
  
  answer = numlist.map((num) => {
      return {
          num,
          abs : Math.abs(num-n)
      }
  });
  
  answer = answer.sort((a,b) => {
      if((a.abs - b.abs) < 0) return -1;
      if((a.abs - b.abs) > 0) return 1;
      if((a.abs - b.abs) === 0 && a.num > b.num) return -1;
      return 1;
  });
  
  answer = answer.map((group) => group.num);
  
  return answer;
}

export default solution;