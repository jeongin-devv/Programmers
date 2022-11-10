const solution = (n : number) => {
  let answer = [];

  const calc = (n, from, to) => {
      const a = 6-from-to;
      if(n===1){
          answer.push([from,to]);
      }else{
          calc(n-1, from, a);
          answer.push([from, to]);
          calc(n-1, a, to);
      }
  }
  
  calc(n,1, 3);
  
  return answer;
}

export default solution;