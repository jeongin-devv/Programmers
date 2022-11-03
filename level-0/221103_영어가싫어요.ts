const solution = (numbers : string) => {
  let answer = numbers;
  const numList = [
      "zero", "one", "two", "three", 
      "four", "five", "six", "seven", 
      "eight", "nine"
  ];
  const numJson = {
      "zero":0, 
      "one":1, 
      "two":2, 
      "three":3, 
      "four":4, 
      "five":5, 
      "six":6, 
      "seven":7, 
      "eight":8, 
      "nine":9
  };

  numList.forEach((num) => {
      let reg = new RegExp(`${num}`,'g');
      answer = answer.replace(reg,numJson[num]);
  });
  
  return Number(answer);
}

export default solution;