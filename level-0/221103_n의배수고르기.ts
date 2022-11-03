const solution = (n : number, numlist : number[]) => {
  let answer = [];
  answer = numlist.filter((num) => {
      if(num%n === 0){
          return num;
      }
  });
  
  return answer;
}

export default solution;