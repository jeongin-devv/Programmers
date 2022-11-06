const solution = (bin1 : string, bin2 : string) => {
  let answer = '';
  answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
  
  return answer;
}

export default solution;