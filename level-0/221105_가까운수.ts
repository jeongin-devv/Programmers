const solution = (array, n) => {
  let answer = 0;
  const sortArray = array.sort();
  const minus = sortArray.map((num,index) => {
      return {index, num : Math.abs(num-n)}
  }).sort((a,b) => {
      if (a.num > b.num) return 1;
      if (a.num < b.num) return -1;
      
      return 0;
  });
  
  answer = array[minus[0].index];
  
  return answer;
}

export default solution;