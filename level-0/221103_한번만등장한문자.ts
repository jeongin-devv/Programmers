const solution = (s : string) => {
  let answer = '';
  let tempArray : number[] = [];
  
  const array = Array.from(s);
  
  tempArray = array.map((num) => {
      let count = array.filter((a) => num===a).length;
      return count;
  });
  
  answer = tempArray.map((s,i) => {
      return s===1 ? array[i] : ''
  }).sort().join('');
  
  return answer;
}

export default solution;