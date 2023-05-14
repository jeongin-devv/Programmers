const solution = (keymap : string[], targets: string[]) => {
  let answer = [];
  const tempGroup = {};
  
  keymap.forEach((key) => {
      const keyArray = Array.from(key);
      keyArray.forEach((k,i) => {
          tempGroup[k] = tempGroup[k] < i+1 ? tempGroup[k] : i+1;
      });
  });
  
  answer = targets.map((target) => {
      const targetArray = Array.from(target);
      const sum = targetArray.reduce((a,c) => a += tempGroup[c], 0);
      return sum ? sum : -1;
  });
  
  return answer;
}

export default solution;